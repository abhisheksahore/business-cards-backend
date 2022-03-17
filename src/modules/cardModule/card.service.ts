import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from "fastify";
import { DBHelper } from 'src/common/helpers/db.helpers';
import { CardCollection, UsersCollection } from 'src/common/collections/allCollections';
import * as qr from 'qrcode'
import * as admin from 'firebase-admin'
@Injectable()
export class CardService {

  constructor(
    @Inject(REQUEST) private readonly request: FastifyRequest,
    private readonly dbHelper: DBHelper
  ) {
  }

  async getCard(id) {

    if (!id) {
      return {
        status: "error",
        message: 'No id found'
      }
    }

    let card = await this.dbHelper.getDataById(CardCollection, id);

    if (card['status'] === 'error') {
      return card;
    }
    else {
      return {
        status: 'success',
        data: card
      }
    }

  }

  async getAllCards() {
    let uid = this.request.headers.uid;

    if (!uid) {
      return {
        status: 'error',
        message: 'user not found'
      }
    }

    let cards = await this.dbHelper.getData(CardCollection, { uid: uid.toString() });

    if (cards['status'] === 'error') {
      return cards;
    }
    return {
      status: 'success',
      data: cards
    };

  }


  async changeCardStatus(id: string, published: boolean) {
    try {
      await this.dbHelper.updateById(CardCollection, id, { published });
      return {
        status: 'success',
        message: 'Updated Successfully'
      }
    }
    catch (err) {
      return {
        status: 'error',
        message: err.message
      }
    }

  }

  async createCard(data: {
    Name?: string,
    BusinessName?: string,
    DescribeYourself?: string,
    ProfilePicture?: string,
    Logo?: string,
    PrimaryButtons?: Array<any>,
    Telegram?: string,
    Call?: string,
    WhatsApp?: string,
    Mail?: string,
    Website?: string,
    Location?: string,
    ProFeaturesList?: Array<any>,
    uid?: string
  }) {
    let uid = this.request.headers.uid;

    if (!uid) {
      return {
        status: 'error',
        message: 'user not found'
      }
    }

    let userDetails = await this.dbHelper.getDataById(UsersCollection, uid.toString());
    if (userDetails['status'] === 'error') {
      return {
        status: 'error',
        message: 'User not found'
      }
    }

    if (userDetails['totalCards'] === 2) {
      return {
        status: 'error',
        message: 'User can have max of 2 cards'
      }
    }

    await this.dbHelper.updateById(UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] + 1 });
    data.uid = uid.toString();
    let cardId = await this.dbHelper.addRow(CardCollection, { ...data });

    return {
      status: 'success',
      message: 'data added successfully',
      id: cardId
    }

  }

  async deleteCard(id: string) {

    //changes
    try {
      let card = await this.dbHelper.getDataById(CardCollection, id);

      await this.dbHelper.deleteById(CardCollection, id);

      return {
        status: 'success',
        message: 'card deleted successfully'
      }
    }
    catch (err) {
      return {
        status: "error",
        message: err.message
      }
    }

  }

  async editCard(id, data) {
    try {
      await this.dbHelper.updateById(CardCollection, id, data);
      return {
        status: 'success',
        message: 'Updated Successfully'
      }
    }
    catch (err) {
      return {
        status: 'error',
        message: err.message
      }
    }
  }

  async createQR(id) {

    try {
      let url = await qr.toDataURL('mysite12443/' + id);

      const storageRef = admin.storage().bucket(process.env.BUCKET_NAME);

      let name = id + Date.now() + '.png'
     
      const fileRef = storageRef.file(name);

      let file = Buffer.from(url.split("base64,")[1], 'base64');
      await fileRef.save(file, {
        public: true,
        contentType: 'image/png'
      });

      return {
        status: 'success',
        data: (await storageRef.file(name).publicUrl()),
      }

    } catch (err) {
      return {
        status: 'error',
        message: err.message
      }
    }
  }
}

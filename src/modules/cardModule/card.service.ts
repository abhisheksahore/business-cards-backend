import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from "fastify";
import { DBHelper } from 'src/common/helpers/db.helpers';
import { CardCollection, UsersCollection } from 'src/common/collections/allCollections';
var qr = require('qrcode')
import * as admin from 'firebase-admin'
import { AuthGuard } from 'src/auth.gaurd';
import { FileUploadService } from '../fileUpload/fileupload.service';
@Injectable()
export class CardService {

  constructor(
    @Inject(REQUEST) private readonly request: FastifyRequest,
    private readonly dbHelper: DBHelper,
    private readonly authGaurd: AuthGuard,
    private readonly fileUploadService: FileUploadService
  ) {
  }

  async getCard(id, viewCount) {

    if (!id) {
      return {
        status: "error",
        message: 'No id found'
      }
    }

    let card = await this.dbHelper.getDataById(CardCollection, id);

    if (card['status'] === 'error') {
      return card
    }

    let token: string = this.request.headers['token'] ? this.request.headers['token'].toString() : '';
    let res = await this.authGaurd.verifyGoogleToken(token);
    let uid = '';
    if (res['uid']) {
      uid = res['uid'];
    }
    if (!card.published && (!uid || card.uid !== uid)) {

      return {
        status: 'error',
        message: 'Card is not published by user'
      }
    }

    if (viewCount && card.published && (card.uid !== uid)) {
      await this.dbHelper.updateById(CardCollection, id, {
        viewCount: card.viewCount + 1
      });
    }

    card = await this.changeCardImagesToUrl(card);

    return {
      status: 'success',
      data: card
    }

  }

  async changeCardImagesToUrl(card) {

    card.Logo = {
      name: card.Logo,
      url: ''
    };
    if (card.Logo) {
      let url = await this.fileUploadService.getFileUrl([card.Logo.name]);
      if (url['status'] === 'success') {
        card.Logo = {
          name: card.Logo.name,
          url: url.urls[0]
        };
      }
    }

    card.ProfilePicture = {
      name: card.ProfilePicture,
      url: ''
    };
    if (card.ProfilePicture) {
      let url = await this.fileUploadService.getFileUrl([card.ProfilePicture.name]);
      if (url['status'] === 'success') {
        card.ProfilePicture = card.ProfilePicture = {
          name: card.ProfilePicture.name,
          url: url.urls[0]
        };
      }
    }

    card.coverPhoto = {
      name: card.coverPhoto,
      url: ''
    };
    if (card.coverPhoto) {
      let url = await this.fileUploadService.getFileUrl([card.coverPhoto.name]);
      if (url['status'] === 'success') {
        card.coverPhoto = card.coverPhoto = {
          name: card.coverPhoto.name,
          url: url.urls[0]
        };
      }
    }

    for (let ele of card.ProFeaturesList) {
      if (ele.image) {
        let url = await this.fileUploadService.getFileUrl([ele.image]);
        if (url['status'] === 'success') {
          ele.image = {
            name: ele.image,
            url: url.urls[0]
          };
        }
      }

      if (ele.images) {
        let url = await this.fileUploadService.getFileUrl(ele.images);
        if (url['status'] === 'success') {
          ele.images = ele.images.map((e, i) => {
            return {
              name: e,
              url: url.urls[i]
            }
          })
        }
      }
    }

    return card;
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

  async createCard(data) {
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

    if (await this.checkSlugExist(data.cardSlug)) {
      return {
        status: 'error',
        message: 'Slug already exist'
      }
    }

    try {
      data.uid = uid.toString();

      let cardId = await this.dbHelper.addRow(CardCollection, { ...data, createdAt: Date.now(), updatedAt: Date.now() });
      await this.dbHelper.updateById(UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] + 1 });

      return {
        status: 'success',
        message: 'data added successfully',
        id: cardId
      }
    }
    catch (err) {
      return {
        status: 'error',
        message: err.message
      }
    }

  }

  async deleteCard(id: string) {

    //changes
    let uid = this.request.headers.uid;

    if (!uid) {
      return {
        status: 'error',
        message: 'user not found'
      }
    }
    try {
      let userDetails = await this.dbHelper.getDataById(UsersCollection, uid.toString());
      if (userDetails['status'] === 'error') {
        return {
          status: 'error',
          message: 'User not found'
        }
      }
      let card = await this.dbHelper.getDataById(CardCollection, id);
      if (card['status'] === 'error' || card.uid !== uid) {
        return {
          status: 'error',
          message: 'card not found with this user'
        }
      }
      else {
        await this.dbHelper.deleteById(CardCollection, id);

        await this.dbHelper.updateById(UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] - 1 });
      }

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
      await this.dbHelper.updateById(CardCollection, id, { ...data, updatedAt: Date.now() });
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

  async createQR(slug) {

    try {
      let url = await qr.toDataURL(slug);

      const storageRef = admin.storage().bucket(process.env.BUCKET_NAME);

      let name = Date.now() + '.png'

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

  async checkSlugExist(slug: string) {

    if (!slug) {
      return true;
    }

    let cards = await this.dbHelper.getData(CardCollection, {
      cardSlug: slug
    })

    console.log(cards)
    if (cards.length > 0) {
      return true;
    }
    return false;
  }

}

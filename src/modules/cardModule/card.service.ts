import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from "fastify";
import { DBHelper } from 'src/common/helpers/db.helpers';
import { CardCollection, UsersCollection } from 'src/common/collections/allCollections';

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

    let cards = await this.dbHelper.getData(CardCollection, { id: uid.toString() });

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

    await this.dbHelper.updateById(UsersCollection, uid.toString(), { totalCards: userDetails['totalCards'] + 1 });
    let cardId = await this.dbHelper.addRow(CardCollection, data);

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
        status:'success',
        message:'card deleted successfully'
      }
    }
    catch(err){
      return{
        status:"error",
        message:err.message
      }
    }
    
  }

  async editCard(id,data){
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

}

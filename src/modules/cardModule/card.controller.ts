import { Body, Controller, Get, Headers, Param, Post, Put, Query, Res } from '@nestjs/common';
import { query } from 'express';
import { FastifyReply } from 'fastify';
import { CardService } from './card.service';
import { GetCardDto } from './dto/getcard.dto';
import { ChangeStatusDto } from './dto/changeStatus.dto';
import { CardDto } from './dto/cardDto';
@Controller()
export class CardController {

  constructor(
    private readonly cardService: CardService
  ) { }

  @Get('getCard')
  async getCard(@Query() query: GetCardDto, @Res() res: FastifyReply) {

    let id = query.id;
    let response = await this.cardService.getCard(id);

    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }
  }

  @Get('getAllCards')
  async getAllCards(@Res() res: FastifyReply) {
    let response = await this.cardService.getAllCards();

    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }

  }

  @Put('changeStatus')
  async changeStatus(@Query() query: ChangeStatusDto, @Res() res: FastifyReply) {

    let response = await this.cardService.changeCardStatus(query.id, query.published);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }

  }

  @Post('createCard')
  async createCard(@Body() body: CardDto, @Res() res: FastifyReply) {

    let data = {
      Name: body.Name ? body.Name : '',
      BusinessName: body.BusinessName ? body.BusinessName : '',
      DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
      ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
      Logo: body.Logo ? body.Logo : '',
      PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
      Telegram: body.Telegram ? body.Telegram : '',
      Call: body.Call ? body.Call : '',
      WhatsApp: body.WhatsApp ? body.WhatsApp : '',
      Mail: body.Mail ? body.Mail : '',
      Website: body.Website ? body.Website : '',
      Location: body.Location ? body.Location : '',
      ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
      published: body.published ? body.published : false,
      uid: ''
    }

    let response = await this.cardService.createCard(data);

    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }
  }



  @Put('deleteCard')
  async deleteCard(@Query() query: GetCardDto, @Res() res: FastifyReply) {

    let response = await this.cardService.deleteCard(query.id);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }

  }

  @Put('editCard')
  async editCard(@Query() query: GetCardDto, @Body() body: CardDto, @Res() res: FastifyReply) {

    let data = {
      Name: body.Name ? body.Name : '',
      BusinessName: body.BusinessName ? body.BusinessName : '',
      DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
      ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
      Logo: body.Logo ? body.Logo : '',
      PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
      Telegram: body.Telegram ? body.Telegram : '',
      Call: body.Call ? body.Call : '',
      WhatsApp: body.WhatsApp ? body.WhatsApp : '',
      Mail: body.Mail ? body.Mail : '',
      Website: body.Website ? body.Website : '',
      Location: body.Location ? body.Location : '',
      ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
      published: body.published ? body.published : false,
    }

    let response = await this.cardService.editCard(query.id, data);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }
  }

  @Get('createQr')
  async createCardQr(@Query() query:GetCardDto, @Res() res: FastifyReply) {

    let response = await this.cardService.createQR(query.id);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }

  }

}

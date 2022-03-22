import { Body, Controller, Get, Headers, Param, Post, Put, Query, Res } from '@nestjs/common';
import { query } from 'express';
import { FastifyReply } from 'fastify';
import { CardService } from './card.service';
import { GetCardDto } from './dto/getcard.dto';
import { ChangeStatusDto } from './dto/changeStatus.dto';
import { CardDto } from './dto/cardDto';
import { CheckSlugDto } from './dto/checkSlug.dto';
import { EditCardDto } from './dto/editCardDto';
@Controller()
export class CardController {

  constructor(
    private readonly cardService: CardService
  ) { }

  @Get('getCard')
  async getCard(@Query() query: GetCardDto, @Res() res: FastifyReply) {

    let id = query.id;
    let viewCount = query.isCount ? query.isCount : false;
    let response = await this.cardService.getCard(id, viewCount);

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

    console.log(body.ProFeaturesList)
    let data = {
      Name: body.Name,
      BusinessName: body.BusinessName ? body.BusinessName : '',
      genderPronouns: body.genderPronouns ? body.genderPronouns : '',
      jobTitle: body.jobTitle ? body.jobTitle : '',
      businessDescription: body.businessDescription ? body.businessDescription : '',
      cardName: body.cardName ? body.cardName : '',
      DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
      ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
      coverPhoto: body.coverPhoto ? body.coverPhoto : '',
      Logo: body.Logo ? body.Logo : '',
      PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
      socialMedia: body.socialMedia ? body.socialMedia : [],
      commerce: body.commerce ? body.commerce : [],
      Telegram: body.Telegram ? body.Telegram : '',
      Call: body.Call ? body.Call : '',
      WhatsApp: body.WhatsApp ? body.WhatsApp : '',
      Mail: body.Mail ? body.Mail : '',
      Website: body.Website ? body.Website : '',
      Location: body.Location ? body.Location : '',
      weChat: body.weChat ? body.weChat : '',
      messenger: body.messenger ? body.messenger : '',
      calendar: body.calendar ? body.calendar : '',
      store: body.store ? body.store : '',
      viber: body.viber ? body.viber : '',
      skype: body.skype ? body.skype : '',
      facebook: body.facebook ? body.facebook : '',
      instagram: body.instagram ? body.instagram : '',
      youtube: body.youtube ? body.youtube : '',
      twitter: body.twitter ? body.twitter : '',
      vimeo: body.vimeo ? body.vimeo : '',
      twitch: body.twitch ? body.twitch : '',
      linkedin: body.linkedin ? body.linkedin : '',
      snapchat: body.snapchat ? body.snapchat : '',
      reddit: body.reddit ? body.reddit : '',
      tiktok: body.tiktok ? body.tiktok : '',
      pinterest: body.pinterest ? body.pinterest : '',
      spotify: body.spotify ? body.spotify : '',
      behance: body.behance ? body.behance : '',
      discord: body.discord ? body.discord : '',
      cashapp: body.cashapp ? body.cashapp : '',
      paypal: body.paypal ? body.paypal : '',
      stripe: body.stripe ? body.stripe : '',
      googleBusinessProfile: body.googleBusinessProfile ? body.googleBusinessProfile : '',
      bingBusinessProfile: body.bingBusinessProfile ? body.bingBusinessProfile : '',
      amazonStore: body.amazonStore ? body.amazonStore : '',
      eBayStore: body.eBayStore ? body.eBayStore : '',
      yelp: body.yelp ? body.yelp : '',
      ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
      published: body.published ? body.published : false,
      uid: '',
      viewCount: 0,
      cardSlug: body.cardSlug

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
  async editCard(@Query() query: GetCardDto, @Body() body: EditCardDto, @Res() res: FastifyReply) {

    let data = {
      Name: body.Name,
      BusinessName: body.BusinessName ? body.BusinessName : '',
      genderPronouns: body.genderPronouns ? body.genderPronouns : '',
      jobTitle: body.jobTitle ? body.jobTitle : '',
      businessDescription: body.businessDescription ? body.businessDescription : '',
      cardName: body.cardName ? body.cardName : '',
      DescribeYourself: body.DescribeYourself ? body.DescribeYourself : '',
      ProfilePicture: body.ProfilePicture ? body.ProfilePicture : '',
      coverPhoto: body.coverPhoto ? body.coverPhoto : '',
      Logo: body.Logo ? body.Logo : '',
      PrimaryButtons: body.PrimaryButtons ? body.PrimaryButtons : [],
      socialMedia: body.socialMedia ? body.socialMedia : [],
      commerce: body.commerce ? body.commerce : [],
      Telegram: body.Telegram ? body.Telegram : '',
      Call: body.Call ? body.Call : '',
      WhatsApp: body.WhatsApp ? body.WhatsApp : '',
      Mail: body.Mail ? body.Mail : '',
      Website: body.Website ? body.Website : '',
      Location: body.Location ? body.Location : '',
      weChat: body.weChat ? body.weChat : '',
      messenger: body.messenger ? body.messenger : '',
      calendar: body.calendar ? body.calendar : '',
      store: body.store ? body.store : '',
      viber: body.viber ? body.viber : '',
      skype: body.skype ? body.skype : '',
      facebook: body.facebook ? body.facebook : '',
      instagram: body.instagram ? body.instagram : '',
      youtube: body.youtube ? body.youtube : '',
      twitter: body.twitter ? body.twitter : '',
      vimeo: body.vimeo ? body.vimeo : '',
      twitch: body.twitch ? body.twitch : '',
      linkedin: body.linkedin ? body.linkedin : '',
      snapchat: body.snapchat ? body.snapchat : '',
      reddit: body.reddit ? body.reddit : '',
      tiktok: body.tiktok ? body.tiktok : '',
      pinterest: body.pinterest ? body.pinterest : '',
      spotify: body.spotify ? body.spotify : '',
      behance: body.behance ? body.behance : '',
      discord: body.discord ? body.discord : '',
      cashapp: body.cashapp ? body.cashapp : '',
      paypal: body.paypal ? body.paypal : '',
      stripe: body.stripe ? body.stripe : '',
      googleBusinessProfile: body.googleBusinessProfile ? body.googleBusinessProfile : '',
      bingBusinessProfile: body.bingBusinessProfile ? body.bingBusinessProfile : '',
      amazonStore: body.amazonStore ? body.amazonStore : '',
      eBayStore: body.eBayStore ? body.eBayStore : '',
      yelp: body.yelp ? body.yelp : '',
      ProFeaturesList: body.ProFeaturesList ? body.ProFeaturesList : [],
    }

    let response = await this.cardService.editCard(query.id, data);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }
  }

  @Get('createQr')
  async createCardQr(@Query() query: GetCardDto, @Res() res: FastifyReply) {

    let response = await this.cardService.createQR(query.id);
    if (response['status'] == 'success') {
      return res.status(200).send(response);
    } else {
      return res.status(400).send(response);
    }

  }

  @Get('checkSlug')
  async checkSlug(@Query() query: CheckSlugDto, @Res() res: FastifyReply) {

    let response = await this.cardService.checkSlugExist(query.slug);
    return res.status(200).send({
      status: response
    });
  }

}

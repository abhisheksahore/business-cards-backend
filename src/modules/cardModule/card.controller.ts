import { Body, Controller, Get, Headers, Param, Post, Put, Query, Res } from '@nestjs/common';
import { query } from 'express';
import { FastifyReply } from 'fastify';
import { CardService } from './card.service';
import { CardDto } from './dto/card.dto';
import { ChangeStatusDto } from './dto/changeStatus.dto';

@Controller()
export class CardController {

  constructor(
    private readonly cardService: CardService
  ) { }

  @Get('getCard')
  async getCard(@Query() query: CardDto, @Res() res: FastifyReply) {

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
  async createCard(@Body() body, @Res() res: FastifyReply){
    
  }



}

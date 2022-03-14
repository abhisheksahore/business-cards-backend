import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
  imports:[SharedModule],
  controllers: [CardController],
  providers: [CardService],
  exports:[]
})
export class CardModule {}
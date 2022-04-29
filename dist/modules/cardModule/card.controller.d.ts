import { FastifyReply } from 'fastify';
import { CardService } from './card.service';
import { GetCardDto } from './dto/getcard.dto';
import { ChangeStatusDto } from './dto/changeStatus.dto';
import { CardDto } from './dto/cardDto';
import { CheckSlugDto } from './dto/checkSlug.dto';
import { EditCardDto } from './dto/editCardDto';
import { VcardDtoDto } from './dto/vcard.dto';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getCard(query: GetCardDto, res: FastifyReply): Promise<never>;
    getAllCards(res: FastifyReply): Promise<never>;
    changeStatus(body: ChangeStatusDto, res: FastifyReply): Promise<never>;
    createCard(body: CardDto, res: FastifyReply): Promise<never>;
    deleteCard(query: GetCardDto, res: FastifyReply): Promise<never>;
    editCard(query: GetCardDto, body: EditCardDto, res: FastifyReply): Promise<never>;
    checkSlug(query: CheckSlugDto, res: FastifyReply): Promise<never>;
    vcard(query: VcardDtoDto, res: FastifyReply): Promise<void>;
}

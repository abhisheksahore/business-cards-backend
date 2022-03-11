import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class ConstantsService {
    private ENVIRONMENT: string = '';
    constructor(
    ) {
        this.ENVIRONMENT = process.env.ENV.toLowerCase();
    }

    skipAuth(){
        let skip = [];
        return skip;
    }

}
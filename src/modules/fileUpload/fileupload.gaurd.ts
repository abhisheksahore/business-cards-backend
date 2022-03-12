import {
    Injectable,
    CanActivate,
    ExecutionContext,
    BadRequestException,
} from "@nestjs/common";
import { FastifyRequest } from "fastify";

@Injectable()
export class UploadGuard implements CanActivate {
    public async canActivate(ctx: ExecutionContext): Promise<boolean> {
        const req = ctx.switchToHttp().getRequest() as FastifyRequest;
        let files = req.raw['files'];
        if (!files){
            throw new BadRequestException({
                status:'error',
                message:"file not found"
            });
        }
        else{
            files = files['files'];
        }
           
        let totalSize = 0;
        if(!files[0]){
            totalSize += files.size / (1024*1024);
            if(this.checkType(files.mimetype)){
                throw new BadRequestException({
                    status:'error',
                    message:files.mimetype + " type is not allowed"
                });   
            }
            req['incomingFiles'] = [files];
        }
        else{
            // if(files.length > 100){
            //     throw new BadRequestException({
            //         status:'error',
            //         message:"max number of allowed files is 100"
            //     });
            // }
            for(let file of files){
                if(this.checkType(files.mimetype)){
                    throw new BadRequestException({
                        status:'error',
                        message:files.mimetype + " type is not allowed"
                    });   
                }
                totalSize += file.size / (1024*1024);
            }
            
            req['incomingFiles'] = files;
        }
        
        if(totalSize > 30){
            throw new BadRequestException({
                status:'error',
                message:"Cannot use files more than 30 mb"
            });
        }
        
        return false;
    }

    checkType(type){
        let skip = ['image/','video/'];
        
        let check = true;
        for(let skipType of skip){
            if(type.includes(skipType)){
                check = false;
                break;
            }
        }
        return check;
        
    }

}
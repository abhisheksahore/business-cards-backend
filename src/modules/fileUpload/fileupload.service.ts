import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fs from 'fs'
@Injectable()
export class FileUploadService {

    constructor() { }

    async uploadFiles(files) {
        
        let promises = [];

        for(let file of files){
            promises.push(this.uploadFileToFirebase(file));
        }
        
        try{
            let names = await Promise.all(promises);
            
            promises = [];
            for(let fileName of names){
                promises.push(this.getFileUrl(fileName));
            }
            let signedUrls = await Promise.all(promises);
            return {
                status:'success',
                data:signedUrls
            };
        }
        catch(err){
            return {
                status:'error',
                message: err.message
            }
        }
      
    }

    async getFileUrl(filename){

        let bucket = admin.storage().bucket('gs://booking-system-mad.appspot.com');
        let oneHr = new Date(Date.now() + 1*60*60*1000);
      
        return (await bucket.file(filename).getSignedUrl({
            action:'read',
            expires: oneHr.getTime()
        }))[0];
    }

    async uploadFileToFirebase(file){

        let filename =  Date.now().toString() + file.name;
        let bucket = admin.storage().bucket('gs://booking-system-mad.appspot.com');
        await bucket.file(filename).save(file.data,{public:true});
        return filename;
    }

}

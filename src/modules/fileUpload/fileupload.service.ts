import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fs from 'fs'
@Injectable()
export class FileUploadService {

    constructor() { }

    async uploadFiles(files) {

        let promises = [];

        for (let file of files) {
            promises.push(this.uploadFileToFirebase(file));
        }

        try {
            let names = await Promise.all(promises);

            // promises = [];
            // for(let fileName of names){
            //     promises.push(this.getFileUrl(fileName));
            // }
            // let signedUrls = await Promise.all(promises);
            return {
                status: 'success',
                data: names
            };
        }
        catch (err) {
            return {
                status: 'error',
                message: err.message
            }
        }

    }

    async getFileUrl(filenames: string[]) {
        if (filenames.length === 0) {
            return {
                status: "error",
                message: 'No files found'
            }
        }
        let urls = [];
        for (let filename of filenames) {
            let bucket = admin.storage().bucket(process.env.BUCKET_NAME);
            let oneday = new Date(Date.now() + 24 * 60 * 60 * 1000);

            urls.push((await bucket.file(filename).getSignedUrl({
                action: 'read',
                expires: oneday.getTime()
            }))[0]);
        }
        return {
            status: 'success',
            urls
        };

    }

    async uploadFileToFirebase(file) {

        let filename = Date.now().toString() + file.name;
        let bucket = admin.storage().bucket(process.env.BUCKET_NAME);
        await bucket.file(filename).save(file.data);
        return filename;
    }

    async deleteFiles(filenames: string[]) {
        if (filenames.length === 0) {
            return {
                status: "error",
                message: 'No files found '
            }
        }
        let urls = [];
        let promise = [];
        for (let filename of filenames) {
            let bucket = admin.storage().bucket(process.env.BUCKET_NAME);

            promise.push(bucket.file(filename).delete());
        }
        try {
            await Promise.all(promise);
            return {
                status: 'success',
                message: "files deleted successfully"
            };
        }
        catch(err){
            return{
                status:'error',
                message:err.message
            }
        }
        

    }
}

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { AuthGuard } from 'src/auth.gaurd';
import { validEmail } from 'src/common/common.service';
import { DBHelper } from 'src/common/helpers/db.helpers';

@Injectable()
export class AuthService {

    constructor(
        private readonly dbHelper: DBHelper,
        private readonly gaurdService: AuthGuard
    ){}

    async signupWithEmail(data: {
        email: string,
        password: string,
        name?: string,

    }) {

        if (!validEmail(data.email)) {
            return {
                status: "error",
                message: 'Invalid email!'
            }
        }

        if (!data.name) {
            data.name = data.email.split('@')[0];
        }

        let auth = admin.auth();
        try{
            let userDetail = await auth.createUser({
                email: data.email,
                emailVerified: false,
                password: data.password,
                displayName: data.name,
                disabled: false,
            })

            await this.dbHelper.updateById('users',userDetail.uid,{
                usedData: 0,
                totalCards: 0,
                email: data.email,
                displayName: data.name,
            })

            return{
                status:'success',
                message:'user added successfully',
            }
        }
        catch(err){
            return{
                status:'error',
                message:err.message
            }
        }
       
    }

    async signInUsingToken(accessToken) {

        let tokenRes = await this.gaurdService.verifyGoogleToken(accessToken);
        if (tokenRes['status'] === 'error') {
            return tokenRes;
        }
        else {

            let user = await this.dbHelper.getDataById('users',tokenRes['uid']);

            if(user['status'] === 'error'){
              
                await this.dbHelper.addById('users',tokenRes['uid'],{
                    usedData: 0,
                    totalCards: 0,
                    email: tokenRes['email'],
                    displayName: tokenRes['name'],
                });
                return{
                    status:'success',
                    message:'user added successfully',
                }
            }
            return{
                status:'success',
                message:'user already exist',
            }
        }
    }
   
}

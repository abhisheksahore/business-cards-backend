import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { validEmail } from 'src/common/common.service';
import { DBHelper } from 'src/common/helpers/db.helpers';
import { getAuth } from 'firebase-admin/auth'
@Injectable()
export class AuthService {

    constructor(
        private readonly dbHelper: DBHelper
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

            let db = admin.firestore();

            await db.collection("users").doc(userDetail.uid).set({
                usedData: 0,
                totalCards: 0,
                email: data.email,
                displayName: data.name,
            })
            return{
                status:'success',
                message:'user added successfully'
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

        let tokenRes = await this.verifyGoogleToken(accessToken);
        if (tokenRes['status'] === 'error') {
            return tokenRes;
        }
        else {

            let auth = admin.auth();

            // auth.getUser();
            
          
        }
    }

    async verifyGoogleToken(token: string) {
        try {
            let x = await getAuth()
                .verifyIdToken(token);
            console.log(x.uid);
            return x;

        }
        catch (error) {
            return{
                status:'error',
                message:error.message
            }
        }
    }
}

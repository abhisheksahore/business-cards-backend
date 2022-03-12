import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'
import { validEmail } from 'src/common/common.service';
import { DBHelper } from 'src/common/helpers/db.helpers';
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
}

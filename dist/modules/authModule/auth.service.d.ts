import * as admin from 'firebase-admin';
import { AuthGuard } from 'src/auth.gaurd';
import { DBHelper } from 'src/common/helpers/db.helpers';
import { FastifyRequest } from "fastify";
export declare class AuthService {
    private readonly dbHelper;
    private readonly gaurdService;
    private readonly request;
    constructor(dbHelper: DBHelper, gaurdService: AuthGuard, request: FastifyRequest);
    signupWithEmail(data: {
        email: string;
        password: string;
        name?: string;
    }): Promise<{
        status: string;
        message: any;
    }>;
    signInUsingToken(accessToken: any): Promise<import("firebase-admin/auth").DecodedIdToken | {
        status: string;
        message: any;
    }>;
    getUserDetails(): Promise<{
        status: string;
        data: admin.firestore.DocumentData;
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    }>;
}

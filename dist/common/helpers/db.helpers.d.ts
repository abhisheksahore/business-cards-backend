import * as admin from 'firebase-admin';
export declare class DBHelper {
    getData(collection: string, where?: Record<string, {
        opr: FirebaseFirestore.WhereFilterOp;
        value: string;
    } | any>): Promise<any>;
    getDataById(collection: string, id: string): Promise<admin.firestore.DocumentData>;
    addRow(collection: string, data: Record<string, any>): Promise<string | {
        status: string;
        message: any;
    }>;
    deleteById(collection: string, id: string): Promise<admin.firestore.WriteResult>;
    updateById(collection: string, id: string, data: Record<string, any>): Promise<admin.firestore.WriteResult>;
    addById(collection: string, id: string, data: Record<string, any>): Promise<admin.firestore.WriteResult>;
}

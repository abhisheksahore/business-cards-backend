"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBHelper = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
let DBHelper = class DBHelper {
    async getData(collection, where = {}) {
        let firestore = admin.firestore();
        try {
            let query = await firestore.collection(collection);
            let whereCondition = null;
            for (const key in where) {
                if (where.hasOwnProperty(key)) {
                    const value = where[key];
                    if (Array.isArray(value)) {
                        whereCondition = query.where(key, 'in', value);
                    }
                    else if (typeof value === 'object') {
                        whereCondition = query.where(key, value.opr, value.value);
                    }
                    else {
                        whereCondition = query.where(key, '==', value);
                    }
                }
            }
            if (whereCondition) {
                let x = await whereCondition.get();
                return x.docs.map(doc => {
                    return Object.assign({ id: doc.id }, doc.data());
                });
            }
            else {
                let x = await query.get();
                return x.docs.map(doc => {
                    return Object.assign({ id: doc.id }, doc.data());
                });
            }
        }
        catch (Err) {
            console.log(Err);
            return {
                status: "error",
                message: Err.message
            };
        }
    }
    async getDataById(collection, id) {
        let firestore = admin.firestore();
        try {
            let x = await firestore.collection(collection).doc(id).get();
            if (!x.exists) {
                return {
                    status: "error",
                    message: "invalid id"
                };
            }
            return x.data();
        }
        catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async addRow(collection, data) {
        let firestore = admin.firestore();
        try {
            let x = await firestore.collection(collection).add(data);
            return x.id;
        }
        catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: err.message
            };
        }
    }
    async deleteById(collection, id) {
        let firestore = admin.firestore();
        return await firestore.collection(collection).doc(id).delete();
    }
    async updateById(collection, id, data) {
        let firestore = admin.firestore();
        return await firestore.collection(collection).doc(id).set(data, { merge: true });
    }
    async addById(collection, id, data) {
        let firestore = admin.firestore();
        return await firestore.collection(collection).doc(id).set(data);
    }
};
DBHelper = __decorate([
    (0, common_1.Injectable)()
], DBHelper);
exports.DBHelper = DBHelper;
//# sourceMappingURL=db.helpers.js.map
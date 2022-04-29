"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = exports.validNumber = exports.validEmail = void 0;
const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
exports.validEmail = validEmail;
const validNumber = (number, length = 10) => {
    const value = new RegExp('^[0-9]{' + length + '}$');
    return value.test(number);
};
exports.validNumber = validNumber;
const removeDuplicates = (arr) => {
    let obj = {};
    let ret_arr = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (let key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
};
exports.removeDuplicates = removeDuplicates;
//# sourceMappingURL=common.service.js.map
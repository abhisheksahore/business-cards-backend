"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_module_1 = require("./modules/authModule/auth.module");
const card_module_1 = require("./modules/cardModule/card.module");
const fileUpload_module_1 = require("./modules/fileUpload/fileUpload.module");
exports.routes = [
    {
        path: '/user',
        children: [
            {
                path: '/fileupload',
                module: fileUpload_module_1.FileUploadModule
            },
            {
                path: '/auth',
                module: auth_module_1.AuthModule
            },
            {
                path: '/card',
                module: card_module_1.CardModule
            },
        ]
    },
];
//# sourceMappingURL=app.routes.js.map
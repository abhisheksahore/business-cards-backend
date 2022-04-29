"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const common_1 = require("@nestjs/common");
exports.Files = (0, common_1.createParamDecorator)((_data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const files = req['incomingFiles'];
    return files;
});
//# sourceMappingURL=file.decorator.js.map
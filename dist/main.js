"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("./swagger");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const fastify_file_upload_1 = require("fastify-file-upload");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const adminConfig = {
        "projectId": process.env.FIREBASE_PROJECT_ID,
        "privateKey": process.env.FIREBASE_PRIVATE_KEY
            .replace(/\\n/g, '\n'),
        "clientEmail": process.env.FIREBASE_CLIENT_EMAIL,
    };
    admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        databaseURL: process.env.DB_URL,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    (0, swagger_1.setupSwagger)(app);
    const port = Number(process.env.PORT) || 3000;
    app.register(fastify_file_upload_1.default);
    app.enableCors();
    await app.listen(port, '0.0.0.0');
    const url = await app.getUrl();
    console.log("running on ", url);
}
bootstrap();
//# sourceMappingURL=main.js.map
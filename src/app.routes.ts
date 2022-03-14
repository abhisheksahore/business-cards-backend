import { AuthModule } from "./modules/authModule/auth.module";
import { CardModule } from "./modules/cardModule/card.module";
import { FileUploadModule } from "./modules/fileUpload/fileUpload.module";

export const routes = [
    {
        path:'/user',
        children:[
            {
                path:'/fileupload',
                module:FileUploadModule
            },
            {
                path:'/auth',
                module:AuthModule
            },
            {
                path:'/card',
                module:CardModule
            },
        ]
    },
];
import { FileUploadModule } from "./modules/fileUpload/fileUpload.module";
export declare const routes: {
    path: string;
    children: {
        path: string;
        module: typeof FileUploadModule;
    }[];
}[];

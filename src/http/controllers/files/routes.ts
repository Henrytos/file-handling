import { FastifyInstance } from "fastify";
import { uploadFile } from "./upload";
import { uploadFiles } from "./uploads";
import { downloadFiles } from "./downloads";
import { downloadFile } from "./download";

export async function fileRoutesApp(app:FastifyInstance){
    app.post('/files/upload/:foldername',uploadFile)
    app.get('/files/download/:filename',downloadFile)
    app.post('/files/uploads/:foldername',uploadFiles)
    app.get('/files/downloads/:foldername',downloadFiles)
}
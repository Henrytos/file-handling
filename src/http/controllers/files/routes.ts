import { FastifyInstance } from "fastify";
import { uploadFile } from "./upload";
import { downloadFile } from "./dowload";
import { uploadFiles } from "./uploads";

export async function fileRoutesApp(app:FastifyInstance){
    app.post('/files/upload',uploadFile)
    app.get('/files/download/:filename',downloadFile)
    app.post('/files/uploads',uploadFiles)
}
import { FastifyInstance } from "fastify";
import { uploadFile } from "./upload";
import { downloadFile } from "./dowload";

export async function fileRoutesApp(app:FastifyInstance){
    app.post('/files',uploadFile)
    app.get('/files/:filename',downloadFile)
}
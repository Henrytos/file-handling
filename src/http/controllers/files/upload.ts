import { FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import path, { dirname } from "path";
export async function uploadFile(req:FastifyRequest,reply:FastifyReply){
    const data = await req.file();
    
    if (!data) {
        return reply.status(400).send({ message: 'No file uploaded' });
    }

    const { filename, mimetype, file } = data ;
    const dirname = path.resolve(__dirname,'../../../../')
    const folder = 'uploads'

    const uploadPath = path.join(dirname,folder,filename)

    const writeStream = fs.createWriteStream(uploadPath);
    file.pipe(writeStream);
  
    writeStream.on('finish', () => {
      return reply.send({ message: 'File uploaded successfully' });
    });
  
    writeStream.on('error', (err) => {
      return reply.code(500).send(err);
    });
}
import { FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import { getPathToFiles } from "@/utils/get-path-to-files";
import { getPathToFolder } from "@/utils/get-path-to-folder";
import { createFolderIfNotExists } from "@/utils/create-folder-if-not-exits";
export async function uploadFile(req:FastifyRequest,reply:FastifyReply){
    const data = await req.file();
    
    if (!data) {
        return reply.status(400).send({ message: 'No file uploaded' });
    }

    const { filename,  file } = data ;
    
    const foldername = 'images'
    const uploadPath = getPathToFiles(filename,foldername)
    const folderPath = getPathToFolder(foldername)

    createFolderIfNotExists(folderPath)

    const writeStream = fs.createWriteStream(uploadPath);
    file.pipe(writeStream);
  
    writeStream.on('finish', () => {
      return reply.send({ message: 'File uploaded successfully' });
    });
  
    writeStream.on('error', (err) => {
      return reply.code(500).send(err);
    });
}
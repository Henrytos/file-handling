import { FastifyReply, FastifyRequest } from "fastify";
import { createReadStream } from "fs";
import path from "path";
import { z } from "zod";
import fs from "fs";

export async function downloadFile(req:FastifyRequest,reply:FastifyReply){
    
    const downloadFileSchema = z.object({
        filename: z.string()
    
    })

    const {filename} = downloadFileSchema.parse(req.params)
    const dirname = path.resolve(__dirname,'../../../../')
    const folder = 'uploads'

    const filePath = path.join(dirname,folder,filename);
    const isFileExist = fs.existsSync(filePath)

    if (!isFileExist){
        return reply.status(404).send({message:"File not found"})
    }

    
    const readStream = createReadStream(filePath)

    return reply.type('application/octet-stream').send(readStream)
}
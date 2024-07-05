import { FastifyReply, FastifyRequest } from "fastify";
import { createReadStream } from "fs";
import path from "path";
import { z } from "zod";
import fs from "fs";
import { getPathToFiles } from "@/utils/get-path-project";

export async function downloadFile(req:FastifyRequest,reply:FastifyReply){
    
    const downloadFileSchema = z.object({
        filename: z.string()
    
    })

    const {filename} = downloadFileSchema.parse(req.params)
    const downloadPath = getPathToFiles(filename)
    const isFileExist = fs.existsSync(downloadPath)

    if (!isFileExist){
        return reply.status(404).send({message:"File not found"})
    }

    
    const readStream = createReadStream(downloadPath)

    return reply.type('application/octet-stream').send(readStream)
}
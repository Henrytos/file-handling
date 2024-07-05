import { FastifyReply, FastifyRequest } from "fastify";
import fs from 'fs'
import { getPathToFiles } from "@/utils/get-path-to-files";

export async function uploadFiles(req:FastifyRequest,reply:FastifyReply){
    const parts = req.files()

    if (!parts){
        return reply.status(400).send({message:"No files uploaded"})
    }

    for await(const part of parts ){
        const { file, filename } = part
        const uploadPath = getPathToFiles(filename)
        const writeStream = fs.createWriteStream(uploadPath)

        file.pipe(writeStream)
    }

    return reply.send({message:"Files uploaded successfully"})
}
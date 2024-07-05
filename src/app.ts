import fastify from "fastify";
import { fileRoutesApp} from "./http/controllers/files/routes";
import fastifyMultipart from '@fastify/multipart'
export const app = fastify({
    logger:true
})

app.register(fastifyMultipart)
app.register(fileRoutesApp)


app.listen({
    port:3333,

}).then(()=>{
    console.log("🚀🚀🚀 Server running  🚀🚀🚀")
})
import 'dotenv/config.js'
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from 'cors'
import './config/database.js'

const server = express();

server.use(cors())
server.use(express.json())
server.use('/api', indexRouter)


server.get('/', (req,res,next) => {
    res.send("Bienvenido a mi servidor")
})



server.listen(process.env['PORT'], () =>{ console.log("servidor 3000")})
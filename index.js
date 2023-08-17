import express from "express";

const server = express();

server.get('/', (req, res, next) => {})



server.listen(50, () =>{ console.log("servidor 50")})
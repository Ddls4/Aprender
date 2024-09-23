import express from "express"
import hbs from "hbs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const server = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


server.set("puerto", process.env.PORT || 90)
server.listen(server.get("puerto"))

server.use(express.json()) // frontent con json
server.use(express.static(`${__dirname}/views`)) //para usar el CSS
server.set('view engine', 'hbs') // Para que funcione hbs | como se renderisa
hbs.registerPartials(`${__dirname}/views/partials`) // donde estan las partes de hbs

export{
    server
}






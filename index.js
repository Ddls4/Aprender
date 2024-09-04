/*       npm init --yes 
npm i express nodemon hbs | install = i 
express - para server | nodemon - para guardar y cargar | hbs - para el "html" 

nodemon index.js   
node_modules no subir al proyecto

para copiar y vercionar las app
git comandos
git config --global user.name "nombre"
git config --global user.email "correo"
git init
git add 
.gitignore para lo que no quiero
git commit -m "mensaje"
*/

// Las dependencias estas estan en package.json/node_module
const express = require("express")
const server = express()
const hbs = require("hbs")

// Configure
server.listen(90) // Este es el puerto
server.use(express.static(`${__dirname}/views`)) //para usar el CSS
server.set('view engine', 'hbs') // Para que funcione hbs | como se renderisa
hbs.registerPartials(`${__dirname}/views/partials`) // donde estan las partes de hbs

// get post put delete | get puede traer la base de datos
//.status(404)
server.get("/", (req,res)=>{
    res.render("index.hbs",{nombre:"Diego"})
})
server.get("/menu", (req,res)=>{
    res.render("menu.hbs")
    //res.status(404).send(`Hola`)
})
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
git --checkout --.
*/

// Las dependencias estas estan en package.json/node_module
import { server } from "./config.js"

// get post put delete | get puede traer la base de datos
//.status(404)
server.get("/", (req,res)=>{
    res.render("index.hbs",{nombre:"Diego"})
})
server.get("/login", (req,res)=>{
    res.render("login.hbs")
})
server.post("/login",(req,res)=>{
    console.log(req.body)
})
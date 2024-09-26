import bcrypt from "bcryptjs"
import mysql from "mysql2/promise"; // Usando la versión Promise de mysql2
import {} from 'dotenv/config' // module

const ip = process.env.S_IP;
const usuario = process.env.S_USER;
const db = process.env.S_DB;

const conexion = await mysql.createConnection({
    host: ip,
    user: usuario,
    database: db
});

const encriptar_contra = (contra) =>{
    let salt = bcrypt.genSaltSync(10);
    contra = bcrypt.hashSync(contra, salt)
    return contra
}


const guardar_db = async (Usuario, Contraseña) => {
        try {
            const query = 'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)';
            await conexion.execute(query, [Usuario, Contraseña]);
            console.log("Datos guardados en la base de datos");
        } catch (error) {
            console.error("Error al guardar en la base de datos:", error);
        }
};




export {
    encriptar_contra,
    guardar_db
}
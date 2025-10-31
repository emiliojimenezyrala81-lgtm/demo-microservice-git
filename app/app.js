import express from "express";

const app = express();


app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola soy el BARTO3" });
});


app.get("/api/usuarios", (_req, res) => {
    const usuarios = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Emilio" },
        { id: 3, nombre: "Carlos" }
    ];
    res.json(usuarios);
});


app.get("/api/productos", (_req, res) => {
    const productos = [
        { id: 100, nombre: "Laptop", stock: 15 },
        { id: 101, nombre: "Teclado", stock: 30 }
    ];
    res.json(productos);
});


app.get("/api/usuarios/:id", (req, res) => {
    const idBuscado = req.params.id; 

    
    res.json({ 
        buscando_usuario_con_id: idBuscado,
        nombre: "Usuario de Ejemplo"
    });
});


export default app;
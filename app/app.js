import express from "express";

const app = express();


//app.get("/", (_req, res) => {
  //  res.json({ status: "ok", service: "Hola soy el BARTO2" });
//});


app.get("/api/usuarios", (_req, res) => {
    const usuarios = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Emilio" },
        { id: 3, nombre: "Carlos" }
    ];
    res.json(usuarios); 
});


export default app;
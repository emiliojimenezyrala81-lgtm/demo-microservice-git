import express from "express";

const app = express();


const ALL_USERS = [
    { id: 1, nombre: "Jhon" },
    { id: 2, nombre: "Yacke" },
    { id: 3, nombre: "Carlos" }
];

const ALL_PRODUCTS = [
    { id: 100, nombre: "Laptop", stock: 15 },
    { id: 101, nombre: "Teclado", stock: 30 }
];

app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola soy el BARTO3" });
});


app.get("/api/usuarios", (_req, res) => {
    res.json(ALL_USERS); 
});


app.get("/api/productos", (_req, res) => {
    res.json(ALL_PRODUCTS); 
});


app.get("/api/usuarios/:id", (req, res) => {
    const idBuscado = req.params.id; 
    
    
    res.json({ 
        buscando_usuario_con_id: idBuscado,
        nombre: "Usuario de Ejemplo"
    });
});


app.get("/api/resumen", (_req, res) => {
    res.json({
        resumen_general: "Datos combinados y listos",
        usuarios_activos: ALL_USERS.length,
        total_productos: ALL_PRODUCTS.length,
        listas_completas: {
            usuarios: ALL_USERS,
            productos: ALL_PRODUCTS
        }
    });
});


export default app; 
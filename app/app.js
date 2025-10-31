import express from "express";

const app = express();

// RUTA BÁSICA
app.get("/", (_req, res) => {
    // Asegúrate de cambiar el BARTO3 a tu mensaje actual si lo modificaste.
    res.json({ status: "ok", service: "Hola soy el BARTO3" }); 
});

// LISTA DE USUARIOS
app.get("/api/usuarios", (_req, res) => {
    const usuarios = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Emilio" },
        { id: 3, nombre: "Carlos" }
    ];
    // ¡La coma es crucial aquí!
    res.json(usuarios); 
});

// LISTA DE PRODUCTOS
app.get("/api/productos", (_req, res) => {
    const productos = [
        { id: 100, nombre: "Laptop", stock: 15 },
        { id: 101, nombre: "Teclado", stock: 30 }
    ];
    // ¡La coma es crucial aquí!
    res.json(productos);
});

// OBTENER USUARIO POR ID (con parámetro dinámico)
app.get("/api/usuarios/:id", (req, res) => {
    const idBuscado = req.params.id; 
    
    res.json({ 
        buscando_usuario_con_id: idBuscado,
        nombre: "Usuario de Ejemplo"
    });
});
app.get("/api/resumen", (_req, res) => {
    // 1. Define o importa los datos que ya tienes
    const usuarios = [
        { id: 1, nombre: "Yeicot" },
        { id: 2, nombre: "Emi" },
        { id: 3, nombre: "Carlos" }
    ];
    const productos = [
        { id: 100, nombre: "Laptop", stock: 15 },
        { id: 101, nombre: "Teclado", stock: 30 }
    ];

    // 2. Combina ambos en un único JSON
    res.json({
        resumen_general: "Datos combinados y listos",
        usuarios_activos: usuarios.length,
        total_productos: productos.length,
        listas_completas: {
            usuarios: usuarios,
            productos: productos
        }
    });
});
export default app;
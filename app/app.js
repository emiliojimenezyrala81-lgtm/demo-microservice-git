import express from "express";

const app = express();

// --- 1. DEFINICIÓN DE DATOS CENTRALIZADA ---
// Modifica los nombres o la lista aquí, y se actualizará en todos los endpoints
const ALL_USERS = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Emilio" },
    { id: 3, nombre: "Carlos" }
];

const ALL_PRODUCTS = [
    { id: 100, nombre: "Laptop", stock: 15 },
    { id: 101, nombre: "Teclado", stock: 30 }
];
// ----------------------------------------


// --- 2. RUTAS DE LA API (Endpoints) ---

// RUTA BÁSICA (Root)
app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola soy el BARTO3" });
});

// LISTA DE USUARIOS
app.get("/api/usuarios", (_req, res) => {
    res.json(ALL_USERS); // Usa los datos centrales
});

// LISTA DE PRODUCTOS
app.get("/api/productos", (_req, res) => {
    res.json(ALL_PRODUCTS); // Usa los datos centrales
});

// OBTENER USUARIO POR ID (con parámetro dinámico)
app.get("/api/usuarios/:id", (req, res) => {
    const idBuscado = req.params.id; 
    
    // Aquí buscarías el usuario en la lista central (ALL_USERS) si fuera necesario.
    res.json({ 
        buscando_usuario_con_id: idBuscado,
        nombre: "Usuario de Ejemplo"
    });
});

// ENDPOINT DE RESUMEN (Combina todos los datos)
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


export default app; // Siempre al final
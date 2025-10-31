import express from "express";

const app = express();

// --- 1. DEFINICIÓN DE DATOS CENTRALIZADA ---
// Si modificas un nombre aquí, se actualiza en todas las rutas y pruebas.
const ALL_USERS = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Emili" },
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
    res.json(ALL_USERS); 
});

// LISTA DE PRODUCTOS
app.get("/api/productos", (_req, res) => {
    res.json(ALL_PRODUCTS);
});

// OBTENER USUARIO POR ID (con parámetro dinámico)
app.get("/api/usuarios/:id", (req, res) => {
    const idBuscado = req.params.id; 
    
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
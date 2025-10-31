import express from "express";

const app = express();

// Tu endpoint actual
app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola soy el BARTO2" });
});

// --- AÑADE ESTO ---
// Nuevo endpoint GET para una lista de usuarios
app.get("/api/usuarios", (_req, res) => {
    const usuarios = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Emilio" },
        { id: 3, nombre: "Carlos" }
    ];
    res.json(usuarios); // Devuelve la lista como JSON
});
// --- FIN DE LO NUEVO ---

export default app;
import app from "./app.js";

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // <--- AÑADE ESTA LÍNEA

const server = app.listen(PORT, HOST, () => { // <--- AÑADE EL HOST AQUÍ
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`); // (Añade esto para saber que funcionó)
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));

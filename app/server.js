import app from "./app.js";

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 

const server = app.listen(PORT, HOST, () => { 
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`); 
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));

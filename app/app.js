import express from "express";

const app = express();

app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola Microservicio 2" });
});

export default app;
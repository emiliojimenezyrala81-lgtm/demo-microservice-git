import express from "express";

const app = express();

app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "Hola soy el BARTO2" });
});

export default app;
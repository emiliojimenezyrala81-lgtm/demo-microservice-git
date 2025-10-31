import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import app from "../app.js"; 

// Función auxiliar para hacer la solicitud HTTP de prueba
const makeRequest = (port, path) => {
    return new Promise((resolve, reject) => {
        http
          .get({ hostname: "127.0.0.1", port, path }, (res) => {
            let data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => resolve(data));
          })
          .on("error", reject);
    });
};

// -----------------------------------------------------------
// 1. PRUEBA BÁSICA: RUTA RAÍZ (/)
// -----------------------------------------------------------
test("GET / responde con el JSON esperado", async () => {
  const server = app.listen(0);
  const { port } = server.address();
  
  const body = await makeRequest(port, "/");

  await new Promise((r) => server.close(r));

  const parsed = JSON.parse(body);
  assert.equal(parsed.status, "ok");
  assert.equal(parsed.service, "Hola soy el BARTO3"); 
});

// -----------------------------------------------------------
// 2. PRUEBA: LISTA DE USUARIOS (/api/usuarios)
// -----------------------------------------------------------
test("GET /api/usuarios devuelve una lista de 3 usuarios", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/usuarios");

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.ok(Array.isArray(parsed), "La respuesta debe ser un Array"); 
    assert.equal(parsed.length, 3, "El Array debe contener 3 usuarios"); 
    assert.equal(parsed[0].nombre, "Ana", "El primer usuario debe ser Ana");
});

// -----------------------------------------------------------
// 3. PRUEBA: LISTA DE PRODUCTOS (/api/productos)
// -----------------------------------------------------------
test("GET /api/productos devuelve una lista de 2 productos", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/productos");

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.ok(Array.isArray(parsed), "La respuesta debe ser un Array"); 
    assert.equal(parsed.length, 2, "El Array debe contener 2 productos"); 
    assert.equal(parsed[1].nombre, "Teclado", "El segundo producto debe ser Teclado");
});

// -----------------------------------------------------------
// 4. PRUEBA: OBTENER POR ID (/api/usuarios/:id)
// -----------------------------------------------------------
test("GET /api/usuarios/:id responde con el ID buscado", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    // Probamos con un ID cualquiera
    const body = await makeRequest(port, "/api/usuarios/99"); 

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.equal(parsed.buscando_usuario_con_id, "99", "Debe reflejar el ID solicitado");
});
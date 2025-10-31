import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import app from "../app.js"; 


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




test("GET / responde con el JSON esperado", async () => {
  const server = app.listen(0);
  const { port } = server.address();
  
  const body = await makeRequest(port, "/");

  await new Promise((r) => server.close(r));

  const parsed = JSON.parse(body);
  assert.equal(parsed.status, "ok");
  
  assert.equal(parsed.service, "Hola soy el BARTO3"); 
});




test("GET /api/usuarios devuelve una lista de 3 usuarios", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/usuarios");

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.ok(Array.isArray(parsed), "La respuesta debe ser un Array"); 
    assert.equal(parsed.length, 3, "El Array debe contener 3 usuarios"); 
});




test("GET /api/productos devuelve una lista de 2 productos", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/productos");

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.ok(Array.isArray(parsed), "La respuesta debe ser un Array"); 
    assert.equal(parsed.length, 2, "El Array debe contener 2 productos"); 
});




test("GET /api/usuarios/:id responde con el ID buscado", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/usuarios/99"); 

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    assert.equal(parsed.buscando_usuario_con_id, "99", "Debe reflejar el ID solicitado");
});




test("GET /api/resumen devuelve datos combinados con conteos correctos", async () => {
    const server = app.listen(0);
    const { port } = server.address();
    
    const body = await makeRequest(port, "/api/resumen");

    await new Promise((r) => server.close(r));

    const parsed = JSON.parse(body);
    
    
    assert.ok(parsed.hasOwnProperty('usuarios_activos'), "Falta la clave usuarios_activos");
    assert.ok(parsed.hasOwnProperty('total_productos'), "Falta la clave total_productos");
    
    
    assert.equal(parsed.usuarios_activos, 3, "El conteo de usuarios debe ser 3");
    assert.equal(parsed.total_productos, 2, "El conteo de productos debe ser 2");
    
    
    assert.ok(Array.isArray(parsed.listas_completas.usuarios), "Debe incluir la lista de usuarios");
});
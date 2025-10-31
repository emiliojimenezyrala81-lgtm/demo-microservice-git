import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import app from "../app.js";

test("GET / responde con el JSON esperado", async () => {
  const server = app.listen(0);
  const { port } = server.address();

  const body = await new Promise((resolve, reject) => {
    http
      .get({ hostname: "127.0.0.1", port, path: "/" }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });

  await new Promise((r) => server.close(r));

  const parsed = JSON.parse(body);
  assert.equal(parsed.status, "ok");
  assert.equal(parsed.service, "Hola soy el BARTO2");
});
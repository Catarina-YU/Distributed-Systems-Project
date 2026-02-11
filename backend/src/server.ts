import app from "./app";
import { pool } from "./database";

const PORT = 3333;

async function start() {
  while (true) {
    try {
      await pool.query("SELECT 1");
      console.log("✅ MySQL conectado");
      break;
    } catch (err) {
      console.log("⏳ Aguardando MySQL...");
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on http://0.0.0.0:${PORT}`);
  });
}

start();

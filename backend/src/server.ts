import app from "./app";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
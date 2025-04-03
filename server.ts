import express from "express";
import studentRoutes from "./src/routes/studentRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


//general index para els ervidor :P
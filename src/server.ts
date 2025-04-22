import express from "express";
import studentRoutes from "./routes/studentroute";

const app = express();
const PORT = 3000;
//osea la parte principal va a ser api, despues se va a student routes y 
//esa es otra aprte
app.use(express.json());
app.use("/api", studentRoutes);
//api/students
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



//CAROLINA DE JESUS ORTEGA CEPEDA A01282386
//ACTIVIDAD DE ESTUDIANTES SOBRE BASE DE DATOS /SI PASAN O NO
//ACTIVIDAD EN CLASE :P (3 DE ABRIL)


//general index para els ervidor :P

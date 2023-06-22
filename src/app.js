import express from "express";
import router from "./routes/roles.routes.js";
import rolesRutas from "./Services/roles/routes.js";

const app = express();
app.use(express.json());

// Configuración de CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use('/apiCar', router);
app.use('/apiCar', rolesRutas);

// Static FOLDER

app.use('/img/autos', express.static('./img/autos'))

export default app;

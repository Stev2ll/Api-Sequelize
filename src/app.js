import express from "express";
import router from "./routes/roles.routes.js";
import rolesRutas  from "./Services/roles/routes.js";


const app = express();
app.use(express.json());

app.use('/apiCar', router);
app.use('/apiCar', rolesRutas);
export default app;
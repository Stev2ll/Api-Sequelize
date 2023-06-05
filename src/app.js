import express from "express";
import router from "./routes/roles.routes.js";


const app = express();
app.use(express.json());

app.use('/apiCar', router);
export default app;
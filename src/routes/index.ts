import express from "express";

import CarRoutes from "./api/car.routes";

const routes = express();

routes.use("/car", CarRoutes);

export default routes;

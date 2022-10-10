import { Router } from "express";

import CarRoutes from "./api/car.routes";

const routes = Router();

routes.use("/car", CarRoutes);

export default routes;

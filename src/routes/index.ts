import { Router } from "express";

import CarRoutes from "./api/car.route";
import MotorycleRoutes from "./api/motorcycle.route";

const routes = Router();

routes.use("/car", CarRoutes);
routes.use("/motorcycle", MotorycleRoutes);

export default routes;

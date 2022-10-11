import { Router } from "express";

import CarRoutes from "./api/car.route";

const routes = Router();

routes.use("/car", CarRoutes);

export default routes;

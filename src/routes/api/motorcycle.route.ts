import { Router } from "express";

import { fetchMotorcycleBrandsController } from "@usecases/fetch-motorcycle-brands";
import { fetchMotorcycleModelsByBrandController } from "@usecases/fetch-motorcycle-models-by-brand";

const MotorcycleRoutes = Router();

MotorcycleRoutes.get("/", (request, response) =>
	fetchMotorcycleBrandsController.handle(request, response),
);
MotorcycleRoutes.get("/:brand", (request, response) =>
	fetchMotorcycleModelsByBrandController.handle(request, response),
);

export default MotorcycleRoutes;

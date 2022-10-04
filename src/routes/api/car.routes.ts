import { Router } from "express";

import { fetchCarBrandsController } from "@usecases/fetch-car-brands";
import { fetchCarModelsByBrandController } from "@usecases/fetch-car-models-by-brand";

const CarRoutes = Router();

CarRoutes.get("/", (request, response) =>
	fetchCarBrandsController.handle(request, response),
);
CarRoutes.get("/:brand", (request, response) =>
	fetchCarModelsByBrandController.handle(request, response),
);

export default CarRoutes;

import { Router } from "express";

import { fetchBrandsController } from "@usecases/fetch-brands";
import { fetchModelsByBrandController } from "@usecases/fetch-models-by-brand";

const CarRoutes = Router();

CarRoutes.get("/", (request, response) =>
	fetchBrandsController.handle(request, response),
);
CarRoutes.get("/:brand", (request, response) =>
	fetchModelsByBrandController.handle(request, response),
);

export default CarRoutes;

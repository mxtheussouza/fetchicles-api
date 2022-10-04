import { Router } from "express";

const router = Router();

import { fetchBrandsController } from "@usecases/fetch-brands";
import { fetchModelsByBrandController } from "@usecases/fetch-models-by-brand";

router.get("/brands", (request, response) =>
	fetchBrandsController.handle(request, response),
);
router.get("/brands/:brand", (request, response) =>
	fetchModelsByBrandController.handle(request, response),
);

export { router };

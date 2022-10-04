import { Router } from "express";

const router = Router();

import { fetchBrandsController } from "@usecases/fetch-brands";
import { fetchModelsByBrandsController } from "@usecases/fetch-models-by-brands";

router.get("/brands", (request, response) =>
	fetchBrandsController.handle(request, response),
);

router.get("/brands/:brand", (request, response) =>
	fetchModelsByBrandsController.handle(request, response),
);

export { router };

import { Router } from "express";

const router = Router();

import { fetchBrandsController } from "@usecases/fetch-brands";

router.get("/brands", fetchBrandsController.handle);

export { router };

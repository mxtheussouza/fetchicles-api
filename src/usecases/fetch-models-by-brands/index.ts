import { BrandsImplementation } from "@repositories/implementations/brands.implementation";
import { FetchModelsByBrandsService } from "./fetch-models-by-brands";
import { FetchModelsByBrandsController } from "./fetch-models-by-brands.controller";

const brandsRepository = new BrandsImplementation();

const fetchModelsByBrandsService = new FetchModelsByBrandsService(
	brandsRepository,
);

export const fetchModelsByBrandsController = new FetchModelsByBrandsController(
	fetchModelsByBrandsService,
);

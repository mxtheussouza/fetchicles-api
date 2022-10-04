import { BrandsImplementation } from "@repositories/implementations/brands.implementation";
import { FetchModelsByBrandService } from "./fetch-models-by-brand";
import { FetchModelsByBrandController } from "./fetch-models-by-brand.controller";

const brandsRepository = new BrandsImplementation();

const fetchModelsByBrandService = new FetchModelsByBrandService(
	brandsRepository,
);

export const fetchModelsByBrandController = new FetchModelsByBrandController(
	fetchModelsByBrandService,
);

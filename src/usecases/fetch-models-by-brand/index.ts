import { CarBrandsImplementation } from "@repositories/implementations/car-brands.implementation";
import { FetchModelsByBrandService } from "./fetch-models-by-brand";
import { FetchModelsByBrandController } from "./fetch-models-by-brand.controller";

const brandsRepository = new CarBrandsImplementation();

const fetchModelsByBrandService = new FetchModelsByBrandService(
	brandsRepository,
);

export const fetchModelsByBrandController = new FetchModelsByBrandController(
	fetchModelsByBrandService,
);

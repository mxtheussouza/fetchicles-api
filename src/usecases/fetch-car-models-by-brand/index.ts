import { CarBrandsImplementation } from "@repositories/implementations/car-brands.implementation";
import { FetchCarModelsByBrandService } from "./fetch-car-models-by-brand";
import { FetchCarModelsByBrandController } from "./fetch-car-models-by-brand.controller";

const brandsRepository = new CarBrandsImplementation();

const fetchCarModelsByBrandService = new FetchCarModelsByBrandService(
	brandsRepository,
);

export const fetchCarModelsByBrandController =
	new FetchCarModelsByBrandController(fetchCarModelsByBrandService);

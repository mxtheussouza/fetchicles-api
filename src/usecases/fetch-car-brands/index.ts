import { CarBrandsImplementation } from "@repositories/implementations/car-brands.implementation";
import { FetchCarBrandsService } from "./fetch-car-brands";
import { FetchCarBrandsController } from "./fetch-car-brands.controller";

const brandsRepository = new CarBrandsImplementation();

const fetchCarBrandsService = new FetchCarBrandsService(brandsRepository);

export const fetchCarBrandsController = new FetchCarBrandsController(
	fetchCarBrandsService,
);

import { CarBrandsImplementation } from "@repositories/implementations/car-brands.implementation";
import { FetchBrandsService } from "./fetch-brands";
import { FetchBrandsController } from "./fetch-brands.controller";

const brandsRepository = new CarBrandsImplementation();

const fetchBrandsService = new FetchBrandsService(brandsRepository);

export const fetchBrandsController = new FetchBrandsController(
	fetchBrandsService,
);

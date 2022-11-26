import { MotorcycleBrandsImplementation } from "@repositories/implementations/motorcycle-brands.implementation";
import { FetchMotorcycleBrandsService } from "./fetch-motorcycle-brands";
import { FetchMotorcycleBrandsController } from "./fetch-motorcycle-brands.controller";

const brandsRepository = new MotorcycleBrandsImplementation();

const fetchMotorcycleBrandsService = new FetchMotorcycleBrandsService(
	brandsRepository,
);

export const fetchMotorcycleBrandsController =
	new FetchMotorcycleBrandsController(fetchMotorcycleBrandsService);

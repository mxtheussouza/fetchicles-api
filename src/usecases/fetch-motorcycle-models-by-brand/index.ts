import { MotorcycleBrandsImplementation } from "@repositories/implementations/motorcycle-brands.implementation";
import { FetchMotorcycleModelsByBrandService } from "./fetch-motorcycle-models-by-brand";
import { FetchMotorcycleModelsByBrandController } from "./fetch-motorcycle-models-by-brand.controller";

const brandsRepository = new MotorcycleBrandsImplementation();

const fetchMotorcycleModelsByBrandService =
	new FetchMotorcycleModelsByBrandService(brandsRepository);

export const fetchMotorcycleModelsByBrandController =
	new FetchMotorcycleModelsByBrandController(
		fetchMotorcycleModelsByBrandService,
	);

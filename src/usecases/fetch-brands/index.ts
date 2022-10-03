import { FetchBrandsService } from "./fetch-brands";
import { FetchBrandsController } from "./fetch-brands.controller";

export const fetchBrandsController = new FetchBrandsController(
	new FetchBrandsService(),
);

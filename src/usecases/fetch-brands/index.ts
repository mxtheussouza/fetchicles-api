import { BrandsRepositoryImplementation } from "@repositories/implementations/brands-repository-implementation";
import { FetchBrandsService } from "./fetch-brands";
import { FetchBrandsController } from "./fetch-brands-controller";

const brandsRepository = new BrandsRepositoryImplementation();

const fetchBrandsService = new FetchBrandsService(brandsRepository);

const fetchBrandsController = new FetchBrandsController(fetchBrandsService);

export { fetchBrandsController };

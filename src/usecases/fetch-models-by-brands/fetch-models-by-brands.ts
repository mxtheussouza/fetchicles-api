import { BrandsRepository } from "@repositories/brands.repository";

export class FetchModelsByBrandsService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(brand: string) {
		const brands = await this.brandsRepository.fetchBrands();

		const models = brands.filter(({ name }) => name === brand)[0]["models"];

		return models;
	}
}

import { BrandsRepository } from "@repositories/brands.repository";

export class FetchCarModelsByBrandService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(brand: string) {
		const brands = await this.brandsRepository.fetchBrands();

		const models = Object.entries(brands).filter(
			element => element[0] === brand,
		)[0][1];

		return models;
	}
}

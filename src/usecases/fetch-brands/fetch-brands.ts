import { BrandsRepository } from "@repositories/brands.repository";

export class FetchBrandsService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute() {
		const brands = await this.brandsRepository.fetchBrands();

		return brands;
	}
}

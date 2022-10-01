import { IBrandsRepository } from "@repositories/brands-repository";

export class FetchBrandsService {
	constructor(private brandsRepository: IBrandsRepository) {}

	async execute() {
		const brands = await this.brandsRepository.fetchBrands();

		return brands;
	}
}

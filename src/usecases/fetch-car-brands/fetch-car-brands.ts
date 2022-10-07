import { BrandsRepository } from "@repositories/brands.repository";

export class FetchCarBrandsService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(): Promise<string[]> {
		const data = await this.brandsRepository.fetchBrands();

		return Object.keys(data);
	}
}

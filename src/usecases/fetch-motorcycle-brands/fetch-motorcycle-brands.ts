import { BrandsRepository } from "@repositories/brands.repository";

export class FetchMotorcycleBrandsService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(): Promise<string[]> {
		const data = await this.brandsRepository.fetchBrands();

		return Object.keys(data);
	}
}

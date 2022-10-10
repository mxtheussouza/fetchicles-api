import { BrandsRepository } from "@repositories/brands.repository";

export class FetchCarModelsByBrandService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(brand: string): Promise<string[]> {
		const data = await this.brandsRepository.fetchBrands();

		const brandModels: [string, any] | undefined = Object.entries(data).find(
			e => e[0].toLowerCase() === brand.toLowerCase(),
		);

		return !!brandModels && brandModels[1]["models"];
	}
}

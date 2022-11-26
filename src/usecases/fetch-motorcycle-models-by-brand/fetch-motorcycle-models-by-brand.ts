import { BrandsRepository } from "@repositories/brands.repository";

export class FetchMotorcycleModelsByBrandService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(brand: string): Promise<string[]> {
		const data = await this.brandsRepository.fetchBrands();

		const brandModels: [string, any] | undefined = Object.entries(data).find(
			e => e[0].toLowerCase() === brand.toLowerCase(),
		);

		if (!brandModels) {
			throw new Error("This model does not exist this brand.");
		}

		if (!!brandModels && !brandModels[1]["models"].length) {
			throw new Error("There are no registered models for this brand yet.");
		}

		return !!brandModels && brandModels[1]["models"];
	}
}

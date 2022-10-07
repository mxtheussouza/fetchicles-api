import { BrandsRepository } from "@repositories/brands.repository";

export class FetchCarModelsByBrandService {
	constructor(private brandsRepository: BrandsRepository) {}

	async execute(brand: string): Promise<string[]> {
		const data = await this.brandsRepository.fetchBrands();

		const brandModels: [string, object][] = Object.entries(data).filter(
			e => e[0].toLowerCase() === brand,
		);

		const [, models] = brandModels[0];

		return Object.values(models)[0];
	}
}

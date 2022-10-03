import { BrandsRepository } from "@repositories/brands.repository";
import { db } from "@database";

export class BrandsImplementation implements BrandsRepository {
	private db: any = db;

	async fetchBrands(): Promise<[]> {
		const brands = this.db.data.brands;

		return brands;
	}
}

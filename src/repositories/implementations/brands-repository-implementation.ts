import { IBrandsRepository } from "@repositories/brands-repository";
import { db } from "@database";

export class BrandsRepositoryImplementation implements IBrandsRepository {
	private db: any = db;

	async fetchBrands(): Promise<[]> {
		const brands = this.db.data.brands;

		return brands;
	}
}

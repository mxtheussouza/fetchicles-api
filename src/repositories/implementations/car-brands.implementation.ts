import { BrandsRepository } from "@repositories/brands.repository";
import { join } from "path";
import fs from "fs";

export class CarBrandsImplementation implements BrandsRepository {
	private file = join(__dirname, "..", "..", "database/data-car.json");

	async fetchBrands(): Promise<object> {
		let response = {};

		await new Promise(resolve => {
			fs.readFile(this.file, "utf-8", (error, data) => {
				if (error) throw error;

				response = JSON.parse(data);

				resolve(response);
			});
		});

		return response;
	}
}

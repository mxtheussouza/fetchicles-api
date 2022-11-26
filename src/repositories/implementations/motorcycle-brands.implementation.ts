import { BrandsRepository } from "@repositories/brands.repository";
import { join } from "path";
import fs from "fs";

export class MotorcycleBrandsImplementation implements BrandsRepository {
	private file = join(__dirname, "..", "..", "database/motorcycle.json");

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

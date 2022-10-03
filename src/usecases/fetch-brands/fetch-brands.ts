import { join } from "path";
import { readFile } from "fs/promises";

export class FetchBrandsService {
	private file = join(__dirname, "../database/data-car.json");

	async execute() {
		const data = await readFile(this.file);

		return data;
	}
}

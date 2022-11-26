import { Request, Response } from "express";
import { FetchMotorcycleBrandsService } from "./fetch-motorcycle-brands";

export class FetchMotorcycleBrandsController {
	constructor(
		private fetchMotorcycleBrandsService: FetchMotorcycleBrandsService,
	) {}

	async handle(_: Request, response: Response): Promise<Response> {
		try {
			const data = await this.fetchMotorcycleBrandsService.execute();

			return response.status(200).send(data);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

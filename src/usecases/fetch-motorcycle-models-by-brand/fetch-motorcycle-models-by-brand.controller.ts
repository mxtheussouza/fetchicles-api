import { Request, Response } from "express";
import { FetchMotorcycleModelsByBrandService } from "./fetch-motorcycle-models-by-brand";

export class FetchMotorcycleModelsByBrandController {
	constructor(
		private fetchMotorcycleModelsByBrandService: FetchMotorcycleModelsByBrandService,
	) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { brand } = request.params;

			const data = await this.fetchMotorcycleModelsByBrandService.execute(
				brand,
			);

			return response.status(200).send(data);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

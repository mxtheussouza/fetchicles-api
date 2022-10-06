import { Request, Response } from "express";
import { FetchCarModelsByBrandService } from "./fetch-car-models-by-brand";

export class FetchCarModelsByBrandController {
	constructor(
		private fetchCarModelsByBrandService: FetchCarModelsByBrandService,
	) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { brand } = request.params;

			const result = await this.fetchCarModelsByBrandService.execute(brand);

			return response.status(200).send(result);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

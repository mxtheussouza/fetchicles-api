import { Request, Response } from "express";
import { FetchModelsByBrandService } from "./fetch-models-by-brand";

export class FetchModelsByBrandController {
	constructor(private fetchModelsByBrandService: FetchModelsByBrandService) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { brand } = request.params;

			const result = await this.fetchModelsByBrandService.execute(brand);

			return response.status(200).send(result);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

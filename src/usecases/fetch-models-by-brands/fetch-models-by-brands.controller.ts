import { Request, Response } from "express";
import { FetchModelsByBrandsService } from "./fetch-models-by-brands";

export class FetchModelsByBrandsController {
	constructor(private fetchModelsByBrandsService: FetchModelsByBrandsService) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { brand } = request.params;

			const result = await this.fetchModelsByBrandsService.execute(brand);

			return response.status(200).send(result);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

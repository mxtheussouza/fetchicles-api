import { Request, Response } from "express";
import { FetchBrandsService } from "./fetch-brands";

export class FetchBrandsController {
	constructor(private fetchBrandsService: FetchBrandsService) {}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const result = await this.fetchBrandsService.execute();

			return response.status(201).send(result);
		} catch (error: any) {
			return response.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}

import { Low, JSONFile } from "lowdb";
import path from "path";

export const db = async () => {
	const file = path.join(__dirname, "./json/data-car.json");

	const adapter = new JSONFile(file);

	const db = new Low(adapter);

	await db.read();

	db.data ||= { brands: [] };

	return db;
};

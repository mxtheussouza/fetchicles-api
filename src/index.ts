import express from "express";
import { router } from "./routes";

const server = express();

server.use(express.json());
server.use(router);

server.listen(5151, () => console.log(`✅ Server is running on port 5151.`));

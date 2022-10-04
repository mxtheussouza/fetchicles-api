import express from "express";
import cors from "cors";
import routes from "./routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/brands", routes);

server.listen(5151, () => console.log(`✅ Server is running on port 5151.`));

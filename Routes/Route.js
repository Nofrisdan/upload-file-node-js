import express from "express";
import { api, form, upload_file } from "../Controllers/User.js";
const route = express.Router();

route.get("/", form);

route.post("/upload_file", upload_file);

route.get("/api", api);

export default route;

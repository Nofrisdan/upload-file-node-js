import express from "express";
import { form } from "../Controllers/User.js";
const route = express.Router();

route.get("/", form);

export default route;

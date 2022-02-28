import express from "express";
import Route from "./Routes/Route.js";
const app = express();
const port = 3000;

// set
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(Route());

app.listen(port, () => console.log(`Server Listen port ${port}`));

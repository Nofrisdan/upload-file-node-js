import express from "express";
const app = express();
const port = 3000;

// set
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
// app.use()

app.listen(port, () => console.log(`Server Listen port ${port}`));

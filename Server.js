import express from "express";
import Route from "./Routes/Route.js";
import fileUpload from "express-fileupload";
import Swal from "sweetalert2";
const app = express();
const port = 3000;

// set
app.set("view engine", "ejs");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

// app.post("/upload_file", (req, res) => {
//   if (req.files) {
//     // console.log(req.files);
//     // res.json({ file: req.files });

//     const file = req.files.gambar;
//     const filename = file.name;
//     file.mv("./uploads/" + filename, function (err) {
//       if (err) {
//         console.log(err);
//         res.send(err);
//       } else {
//         res.send("File Uploaded");
//       }
//     });
//   }
// });

// routes
app.use(Route);

app.listen(port, () => console.log(`Server Listen port ${port}`));

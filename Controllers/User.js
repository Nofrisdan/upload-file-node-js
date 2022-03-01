// controller

import Swal from "sweetalert2";

export const form = (req, res) => {
  res.render("index");
};

export const upload_file = (req, res) => {
  if (req.files) {
    // console.log(req.files);
    const file = req.files.gambar;
    const filename = file.name;
    // const dest = __dirname + "/../Public/";

    // moving file
    file.mv("./uploads/" + filename, (err) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send("Success Uploaded");
      }
    });
  } else {
    console.log("error");
    res.json({ error: "Error" });
  }
};

export const api = (req, res) => {
  res.json({ status: 200, msg: "Sukses Load Data" });
};

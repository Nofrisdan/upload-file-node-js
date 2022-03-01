// controller
import formidable from "formidable";
import mv from "mv";
import Swal from "sweetalert2";
import fs from "fs";

export const form = (req, res) => {
  res.render("index");
};

export const upload = (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({ err });
    } else {
      const temp = files.gambar.filepath;
      const dest = "../Public/File_upload/" + files.gambar.originalFilename;

      //   res.json({ dest });
      fs.rename(temp, dest, function (e) {
        if (e) {
          console.log(e);
          res.json({ error: e });
        } else {
          Swal.fire("Berhasil", "File Berhasil di upload", "success");

          res.redirect("/");
        }
      });

      //   mv(temp, dest, function (err) {
      //     if (err) {
      //       // err
      //       res.json({ err });
      //     } else {
      //       Swal.fire("Berhasil", "File Berhasil di upload", "success");

      //       res.redirect("/");
      //     }
      //   });
    }
  });
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
        Swal.fire("Berhasil", "File Berhasil Di upload", "success");
        res.redirect("/");
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

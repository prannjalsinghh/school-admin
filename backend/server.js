const express = require('express');
const bodyParser = require('body-parser')
const app= express();
const mongoose = require("mongoose")
const cors=  require('cors')
const multer = require("multer");

const {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
} = require("firebase/storage");
const storage = require("./firebase");


mongoose.connect("mongodb+srv://pranjalsingh:Pranshu2001@cluster0.yvugcq2.mongodb.net/?retryWrites=true&w=majority")
app.use(cors());
app.use(bodyParser.json());

app.use("/",require('./route/adminRoute'))

const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });


app.post("/addPicture", upload.single("pic"), async (req, res) => {
    const file = req.file;
    const imageRef = ref(storage, file.originalname);
    const metatype = { contentType: file.mimetype, name: file.originalname };
    await uploadBytes(imageRef, file.buffer, metatype)
      .then((snapshot) => {
        res.send("uploaded!");
      })
      .catch((error) => console.log(error.message));
  });

  app.get("/pictures", async (req, res) => {
    const listRef = ref(storage);
    let productPictures = [];
    await listAll(listRef)
      .then((pics) => {
        productPictures = pics.items.map((item) => {
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${item._location.bucket}/o/${item._location.path_}?alt=media`;
          return {
            url: publicUrl,
            name: item._location.path_,
          };
        });
        res.send(productPictures);
      })
      .catch((error) => console.log(error.message));
  });

  app.delete("/delete", async (req, res) => {
    const deletePic = req.body.name;
    const deleteRef = ref(storage, deletePic);
    await deleteObject(deleteRef)
      .then(() => {
        res.send("deleted");
      })
      .catch((error) => console.log(error.message));
  });




app.listen(process.env.PORT ||4000);

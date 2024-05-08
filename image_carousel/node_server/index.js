import express from 'express';
import cors from 'cors';
import { connectToMongoose } from './configurations/mongoose.config.js';
import {addImagesData, addNewImage, deleteImageData, getAllImages } from './controllers/user.controller.js';
const app = express();

app.use(cors());


app.use(express.json());
app.post("/home", (req, res) => {
    addImagesData(req, res);
});

app.delete("/delete/:imageId", async (req, res) => {
    deleteImageData(req, res);
    });

app.post("/addImage", async (req, res) => {
    addNewImage(req, res);
    
});

app.get("/getImages", async (req, res) => {
    getAllImages(req, res);
   
  });


app.listen(7000, () => {
    connectToMongoose();
    console.log("server is started on port 7000");

})


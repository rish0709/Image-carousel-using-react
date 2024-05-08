import mongoose from "mongoose";
import { model } from "../models/image.model.js";

export const storeImagesDataInDatabase = async(imageData) => {
    for(var i = 0; i < imageData.length; i++){
        const image = new model({id:imageData[i].id, title:imageData[i].title, url:imageData[i].url});
        await image.save();
    }
    return true;

}

export const addImageInDatabase = async(id, title, url) => {
  console.log(id, "id in repo");
  console.log("in add image repo");
    try {
        const newImage = new model({ id, title, url });
        await newImage.save();
        const images = model.find();
        return images;
        } catch (error) {
        console.error("Error adding image:", error);
        return false;
        }
} 

export const getAllImagesFromDatabase = async() => {
    try {
        const images = await model.find();
        return images;
      } catch (error) {
        console.error("Error fetching images:", error);
        return false;
      }
}
export const deleteImage = async(imageId) => {
    try {
        await model.findOneAndDelete({ id: imageId });
        return true;
      } catch (error) {
        console.error("Error deleting image:", error);
        return false;
      }

}
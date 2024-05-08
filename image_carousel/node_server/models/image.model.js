import mongoose from "mongoose";
// import { images } from "../../image_carousel_react/src/images_data";
const Image = new mongoose.Schema({

    id: Number,
    title: String,
    url: String,
})

export const model = mongoose.model("Images", Image);

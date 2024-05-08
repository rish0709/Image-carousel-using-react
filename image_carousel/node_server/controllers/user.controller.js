import { storeImagesDataInDatabase, deleteImage, addImageInDatabase, getAllImagesFromDatabase } from "../repositories/user.repo.js";

export const addImagesData = async(req, res) => {
    const {imageData} = req.body;
    console.log(imageData, "image data in controller");
    const result = await storeImagesDataInDatabase(imageData);
    console.log("data stored in database succesfully");
    res.send("data stored successfully");


}

export const addNewImage = async(req, res) => {
    const {id, title, url } = req.body;
    console.log(id, title, url, "title", "url");
    const result = await addImageInDatabase(id, title, url);
    if (result){
        console.log(result, "Result");
        res.send(result);
    }
    else{
        res.send("error adding image");
    }
}

export const getAllImages = async(req, res) => {
    const result = await getAllImagesFromDatabase();
    console.log(result, "all images in controller");
    if (result){
        res.json(result);

    } 
    else{
        res.json({message: "Error fetching images"});
    }

}

export const deleteImageData = async(req, res) => {
    const imageId = req.params.imageId;
    const result = deleteImage(imageId);
    if (result){
        res.send("image deleted successfully");

    }
    else{
        res.send("error deleting image");
    }
}



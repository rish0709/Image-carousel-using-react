import React, { useEffect, useState } from "react";
import { images } from "../images_data.js";
import { ImageCard } from "./imageCard.js";
import Carousel from "react-multi-carousel";
import styles from "../css Files/home.module.css";
import "react-multi-carousel/lib/styles.css";
function Home() {
  const [imageData, setImageData] = useState(images);
  const [autoPlayTime, setAutoPlayTime] = useState(1000);
  const [leftToRight, setImageSequence] = useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    const titleInput = prompt("Enter the image title:");
    const urlInput = prompt("Enter the image URL:");

    if (titleInput && urlInput) {
      console.log(imageData.length, "image data length");
      console.log(imageData, "image data in function");
      try {
        const response = await fetch("http://localhost:7000/addImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id:imageData.length + 1,
            title: titleInput,
            url: urlInput,
          }),
        });
        const data = await response.json();
        setImageData([...imageData, data]); 
        window.alert("image added succesfully");
      } catch (error) {
        console.error("Error adding image:", error);
      }
    }
  };

  const handleDelete = async (imageId) => {
    
    setImageData(imageData.filter((image) => image.id !== imageId));

    try {
      
      const response = await fetch(`http://localhost:7000/delete/${imageId}`, {
        method: "DELETE",
      });

      window.alert("image has been deleted successfully");

      
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleToggle = async() => {
    const time = prompt("enter the time in miliseconds");
    console.log(time, "time given by user");
    setAutoPlayTime(time);

    
  }
  const handleChangeOrder = async() => {
    setImageSequence(!leftToRight);
    const reversedArray = imageData.slice().reverse();
    setImageData(reversedArray);

  }

  useEffect(() => {
    const fetchImageData = async () => {
      
      try {
        const response = await fetch("http://localhost:7000/getImages"
          
        );
        const data = await response.json();
        console.log(data, "whole fetched data");
        setImageData(data);
        
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <>
        <Carousel responsive={responsive} autoPlay = {true} autoPlaySpeed={autoPlayTime}>
          {imageData.map((image, index) => (

                  <ImageCard key={image.id} actualData={image} onDelete={handleDelete}/>
            
              ))}
       </Carousel>

      <button className = {styles.button} onClick={(e) => handleAddImage(e)}>Add Image</button>
      <button className = {styles.toggleButton} onClick={(e) => handleToggle(e)}>Set Images sliding Time</button>
      <button className = {styles.changeImagesOrdersButton} onClick = {(e) => handleChangeOrder(e)}>{leftToRight?"Show Images left to right": "Show Images right to left"}</button>
    </>
  );
}

export default Home;
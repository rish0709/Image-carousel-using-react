import React, { useState } from "react";
import styles from "../css Files/imageCard.module.css";
import { FaTrash } from "react-icons/fa"; // Import the delete icon from react-icons library

export const ImageCard = ({ actualData, onDelete }) => {
  const [hovered, setHovered] = useState(false); // State to track hover state

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
    >
      <div className={styles.wrapper}>
        <div className={styles.banner_image}>
          <figure>
            <img src={actualData.url} alt="image not found" />
            
            {hovered && (
              <div className={styles.delete_icon} onClick = {() => onDelete(actualData.id)}>
                <FaTrash />
              </div>
            )}
          </figure>
        </div>
        <h1>{actualData.title}</h1>
      </div>
    </div>
  );
};
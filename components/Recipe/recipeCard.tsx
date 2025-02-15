"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button/button";
import styles from "../Recipe/recipe.module.css";
import { FaHeart } from "react-icons/fa";

interface Props {
  imageUrl: string;
  title: string;
}

const RecipeCard: React.FC<Props> = ({ imageUrl, title }) => {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    // setLiked((Like) => !Like); // Toggle the like state

    setLiked((like) => {
      //Checks the conditions
      if (like) {
        return false;
      } else {
        return true;
      }
    });
  }
  return (
    <div>
      <div className={styles.card}>
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className={styles.imageUrl}
        />
        <div>
          <div className={styles.cardTitle}>
            <h3>{title}</h3>
            <Button />
          </div>
        </div>
        <button onClick={handleClick} className={styles.heartIcon}>
          <FaHeart
            className={styles.heart}
            style={{
              color: liked ? "rgba(255, 99, 99, 1)" : "rgba(219, 226, 229, 1)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

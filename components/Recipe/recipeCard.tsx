"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button/button";
import styles from "../Recipe/recipe.module.css";
import { FaHeart } from "react-icons/fa";
import { useCounter } from "@/context/themeContext";

interface Props {
  imageUrl: string;
  title: string;
}

const RecipeCard: React.FC<Props> = ({ imageUrl, title }) => {
  const [liked, setLiked] = useState(false);
  const {counter, increment, decrement} = useCounter();

  function handleClick() {
    if(liked){
      decrement();
    }else{
      increment();
    }
     setLiked((Like) => !Like); // Toggle the like state
    
  }
  return (
    <div>
      <h1>Count:{counter}</h1>
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


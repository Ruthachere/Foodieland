"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button/button";
import styles from "../Recipe/recipe.module.css";
import { FaHeart } from "react-icons/fa";
import { useCounter } from "@/context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/GlobalRedux/Features/CounterSlice";
import { RootState } from "@/app/GlobalRedux/store";

interface Props {
  imageUrl: string;
  title: string;
}

const RecipeCard: React.FC<Props> = ({ imageUrl, title }) => {
  const [liked, setLiked] = useState(false);
  // const {counter, increment, decrement} = useCounter();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // Load liked state from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "{}");
    if (savedLikes[title]) {
      setLiked(true);
    }
  }, [title]);

  //Handle click button
  function handleClick() {
    const newLiked = !liked;

    setLiked(newLiked);

    if (newLiked) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
    // setLiked((Like) => !Like); // Toggle the like state

    // Save the new liked state to local storage
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "{}");
    savedLikes[title] = newLiked;
    localStorage.setItem("likedItems", JSON.stringify(newLiked));
  }
  return (
    <div>
      <h1>Count:{count}</h1>
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

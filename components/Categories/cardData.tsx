import React from "react";
import Cards from "@/components/Categories/Cards";
import styles from "@/components/css/style.module.css";
import breakfastImg from "@/public/images/image 25.png";
import VeganImg from "@/public/images/Group 879.png";
import MeatImg from "@/public/images/image 21.png";
import dessertImg from "@/public/images/image 22.png";
import lunchImg from "@/public/images/image 23.png";
import chocolateImg from "@/public/images/image 24.png";

const Card = () => {
  interface data {
    imageUrl: string;
    title: string;
  }
  let cardsData: data[] = [
    {
      imageUrl: breakfastImg.src,
      title: "Breakfast",
    },

    {
      imageUrl: VeganImg.src,
      title: "Vegan",
    },

    {
      imageUrl: MeatImg.src,
      title: "Meat",
    },

    {
      imageUrl: dessertImg.src,
      title: "Dessert",
    },

    {
      imageUrl: lunchImg.src,
      title: "Lunch",
    },

    {
      imageUrl: chocolateImg.src,
      title: "Chocolate",
    },
  ];
  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Cards key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default Card;

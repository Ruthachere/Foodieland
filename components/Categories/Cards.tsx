import React from "react";
import Image from "next/image";

import styles from "@/components/css/style.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Cards: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt="image title"
        width={100}
        height={100}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Cards;

{
  /* <div className={styles.card}>
      <Image 
      src={breakfastImg}
      alt= 'image title' 
      className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Breakfast</h2>
      </div>
    </div>

    <div className={styles.card}>
      <Image 
      src={VeganImg}
      alt= 'image title' 
      className="card-image"
      width={100} />
      <div className="card-content">
        <h2 className="card-title">Vegan</h2>
      </div>
    </div>

    <div className={styles.card}>
      <Image 
      src={MeatImg}
      alt= 'image title' 
      className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Meat</h2>
      </div>
    </div>

    <div className={styles.card}>
      <Image 
      src={dessertImg}
      alt= 'image title' 
      className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Dessert</h2>
      </div>
    </div>

    <div className={styles.card}>
      <Image 
      src={lunchImg}
      alt= 'image title' 
      className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Lunch</h2>
      </div>
    </div>

    <div className={styles.card}>
      <Image 
      src={chocolateImg}
      alt= 'image title' 
      className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Chocolate</h2>
      </div>
    </div>
    </div> */
}

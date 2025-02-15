import React from "react";
import Image from "next/image";
import styles from "./recipe.module.css";
import advertisementImg from "@/public/images/advert.png";

const Advertisement = () => {
  return (
    <div>
      <div className={styles.adContainer}>
        <h3>
          Don't forget to eat <br /> healthy food
        </h3>
        <Image
          src={advertisementImg}
          alt="Advertisement image of foodieland"
          width={250}
          height={250}
        />
        <span>www.foodieland.com</span>
      </div>
    </div>
  );
};

export default Advertisement;

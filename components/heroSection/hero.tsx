import React from "react";
import Button from "../Button/button";
import styles from "@/components/css/style.module.css";
import Image from "next/image";
import Foodplate from "@/public/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png";
import { FaPlayCircle } from "react-icons/fa";
import recipe from "@/public/images/recipe.png";

const HeroSection = () => {
  let style = {
    fontSize: "20px",
    color: "White",
  };
  return (
    <>
      <section className={styles.HeroSection}>
        <div className={styles.heroContent}>
          {/* Title */}
          <div className={styles.heroBody}>
            <div>
              <button className={styles.hotrecipeBtn}>
                <Image src={recipe} alt="Recipe page" width={28} height={28} />
                <span>Hot Recipes</span>
              </button>
            </div>

            <div className={styles.titleContent}>
              <h1>Spicy Delicious Chicken Wings</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
              <Button />
            </div>

            {/* //Profile */}
            <div className={styles.profileContent}>
              <div className={styles.profile}>
                <Image
                  className={styles.profileImage}
                  src={Foodplate}
                  alt="Food plate"
                  width={40}
                  height={40}
                />
                <div>
                  <span>John Smith</span>
                  <p>15 March 2022</p>
                </div>
              </div>

              <div>
                <button className={styles.recipeBtn}>
                  <span>View Recipes</span>
                  <FaPlayCircle style={style} />
                </button>
              </div>
            </div>
          </div>

          {/* Image */}

          <Image
            className={styles.foodplate}
            src={Foodplate}
            alt="Food plate"
            max-width={700}
            height={0}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import chef from "@/public/images/Group 880.png";
import styles from "@/components/css/style.module.css";

const Feature = () => {
  return (
    <section>
      <div className={styles.featureContainer}>
        <div className={styles.featureTitle}>
          <div>
            <h2>
              Everyone can be a <br /> chef in their own kitchen
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>

          <div>
            <button className={styles.learnMoreBtn}>Learn more</button>
          </div>
        </div>

        <Image
          src={chef}
          alt=" chef showing ingredients"
          width={670}
          height={0}
        />
      </div>
    </section>
  );
};

export default Feature;

import React from "react";
import styles from "@/components/css/style.module.css";
import Cards from "@/components/Categories/Cards";
import Card from "./cardData";

const Categories = () => {
  return (
    <>
      <section>
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <div className={styles.category}>
              <h2>Categories</h2>
            </div>
            <div>
              <button className={styles.viewBtn}>View All Categories</button>
            </div>
          </div>

          <div>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

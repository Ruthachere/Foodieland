import React from "react";
import styles from "./recipe.module.css";
import RecipeCard from "../Recipe/recipeCard";

export interface RecipeData2 {
  imageUrl: string;
  title: string;
}

type props = {
  recipeData: RecipeData2[];
};

const Recipes: React.FC<props> = ({ recipeData }) => {
  return (
    <>
      <section>
        <div className={styles.recipeContainer}>
          <div className={styles.recipeHeader}>
            <h2>
              Try this delicious recipe <br />
              to make your days
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut
              enim ad minim
            </p>
          </div>
          <div className={styles.recipesCard}>
            {recipeData.map((card, index) => (
              <RecipeCard
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
              />
            ))}
            {/* <RecipesData recipeData={recipeData} /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;

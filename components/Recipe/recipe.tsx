import React from "react";
import styles from "@/components/Recipe/recipe.module.css";
import RecipeCard from "./recipeCard";
import Advertisement from "./adCard";

interface RecipeData2 {
  imageUrl: string;
  title: string;
}

// type props = {
//   data:RecipeData2[]
// }

const Recipe = ({ data }: { data: RecipeData2[] }) => {
  return (
    <>
      <section>
        <div className={styles.recipeContainer}>
          <div className={styles.recipeHeader}>
            <h2>Simple and tasty recipes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut
              enim ad minim
            </p>
          </div>
          <div>
            <div className={styles.recipeCard}>
              {data.map((card, index) => (
                <RecipeCard
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                />
              ))}
              <Advertisement />
            </div>
            {/* <RecipeData data={data}/> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;

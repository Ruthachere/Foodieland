
import Navigation from "@/components/navbar/Navbar";
import HeroSection from "@/components/heroSection/hero";
import Categories from "@/components/Categories/categories";
import Recipe from "@/components/Recipe/recipe";
import Feature from "@/components/features/feature";
import Recipes from "@/components/Recipes/recipes";
import Inbox from "@/components/inboxSection/inbox";

import Tropical_salad from "@/public/images/image 26 (8).png";
import Beef from "@/public/images/image 26 (9).png";
import Fried_rice from "@/public/images/image 26 (10).png";
import Walnut from "@/public/images/image 26 (11).png";
import Chicken_salad from "@/public/images/image 26 (12).png";
import Wraps from "@/public/images/image 26 (14).png";
import Sandwiches from "@/public/images/image 26 (13).png";
import Mushroom from "@/public/images/image 26 (15).png";

import Burger from "@/public/images/Burger.png";
import Salmon from "@/public/images/Salmon.png";
import Pancake from "@/public/images/Pancake.png";
import Salad from "@/public/images/Salad.png";
import ChickenMeatballs from "@/public/images/Chicken meat balls.png";
import Fruitypancake from "@/public/images/Fruity pancake.png";
import Chicken from "@/public/images/Chicken and rice.png";
import Pasta from "@/public/images/Pasta.png";


let data = [
  {
    imageUrl: Burger.src,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
  },
  {
    imageUrl: Salmon.src,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
  },
  {
    imageUrl: Pancake.src,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
  },
  {
    imageUrl: Salad.src,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
  },
  {
    imageUrl: ChickenMeatballs.src,
    title: "Chicken Meatballs with Cream Cheese",
  },
  {
    imageUrl: Fruitypancake.src,
    title: "Fruity Pancake with Orange & Blueberry",
  },
  {
    imageUrl: Chicken.src,
    title: "The Best Easy One Pot Chicken and Rice",
  },
  {
    imageUrl: Pasta.src,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
  },
];

let recipeData = [
  {
    imageUrl: Tropical_salad.src,
    title: "Mixed Tropical Fruit Salad with Superfood Boots",
  },
  {
    imageUrl: Beef.src,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
  },
  {
    imageUrl: Fried_rice.src,
    title: "Healthy Japanese Fried Rice with Asparagus",
  },
  {
    imageUrl: Walnut.src,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
  },
  {
    imageUrl: Chicken_salad.src,
    title: "Rainbow Chicken Honey Mustard Dressing",
  },
  {
    imageUrl: Sandwiches.src,
    title: "Barbeque Spicy Sandwiches with chips",
  },
  {
    imageUrl: Wraps.src,
    title: "Firecracker Vegan Lettuce Wraps-Spicy!",
  },
  {
    imageUrl: Mushroom.src,
    title: "Chicken Ramen Soup with Mushroom",
  },
];

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <HeroSection />
      <Categories />
      <Recipe data={data} />
      <Feature />

      <Recipes recipeData={recipeData} />
      <Inbox />
      {/* <Footer /> */}
    </>
  );
}

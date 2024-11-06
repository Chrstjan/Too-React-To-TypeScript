import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "./LandingPage";

export const RecipesPage = () => {
  const { mealType } = useParams();

  const { data, isLoading, error } = useFetch<Product>(
    `https://dummyjson.com/recipes/meal-type/${mealType}`
  );

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch</h2>;
  }

  return <div>RecipesPage</div>;
};

import { useFetch } from "../hooks/useFetch";

interface Product {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
}

export const LandingPage = () => {
  const { data, isLoading, error } = useFetch<Product>(
    "https://dummyjson.com/recipes"
  );

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch</h2>;
  }

  return <div>LandingPage</div>;
};

import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Recipe } from "../components/Recipe/Recipe";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { CategoryMenu } from "../components/CategoryMenu/CategoryMenu";

interface ProductData {
  limit: number;
  recipes: Product[];
  skip: number;
  total: number;
}

export interface Product {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
}

export const LandingPage = () => {
  const [featuredRecipes, setFeaturedProducts] = useState<Product[]>([]);
  const { data, isLoading, error } = useFetch<ProductData[]>(
    "https://dummyjson.com/recipes?skip=0"
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      const featuredArray = [];
      featuredArray.push(
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)],
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)],
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)],
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)],
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)],
        data[0].recipes[Math.floor(Math.random() * data[0].recipes.length)]
      );
      setFeaturedProducts(featuredArray);
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch</h2>;
  }

  return (
    <>
      <h2>Featured Products</h2>
      {data ? <CategoryMenu data={data[0].recipes} /> : null}
      <Wrapper type="productGrid">
        {featuredRecipes && !isLoading && !error ? (
          <Recipe data={featuredRecipes} />
        ) : null}
      </Wrapper>
    </>
  );
};

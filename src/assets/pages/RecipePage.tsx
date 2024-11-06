import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "./LandingPage";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Recipe } from "../components/Recipe/Recipe";

export const RecipePage = () => {
  const { mealID } = useParams();

  const { data, isLoading, error } = useFetch<Product | Product[]>(
    `https://dummyjson.com/recipes/${mealID}`
  );

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch</h2>;
  }

  return (
    <Wrapper>
      {data && !isLoading && !error ? <Recipe data={data} /> : null}
    </Wrapper>
  );
};

import { useParams } from "react-router-dom";

export const RecipesPage = () => {
  const { mealType } = useParams();
  return <div>RecipesPage</div>;
};

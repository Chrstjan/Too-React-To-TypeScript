import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const { mealID } = useParams();
  return <div>RecipePage</div>;
};

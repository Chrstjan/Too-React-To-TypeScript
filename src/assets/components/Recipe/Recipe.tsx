import { useNavigate } from "react-router-dom";
import { Product } from "../../pages/LandingPage";
import s from "./Recipe.module.scss";

interface RecipeProps {
  data: Product[];
}

export const Recipe = ({ data }: RecipeProps) => {
  const navigate = useNavigate();

  const handleRecipeClick = (item: Product) => {
    navigate(`/recipe/${item.id}`);
  };

  return (
    <>
      {data.map((item) => {
        return (
          <figure className={s.recipeStyling} key={item.id}>
            <h2 onClick={() => handleRecipeClick(item)}>{item.name}</h2>
          </figure>
        );
      })}
    </>
  );
};

import { Product } from "../../pages/LandingPage";
import s from "./Recipe.module.scss";

interface RecipeProps {
  data: Product[];
}

export const Recipe = ({ data }: RecipeProps) => {
  return (
    <>
      {data.map((item) => {
        return (
          <figure className={s.recipeStyling} key={item.id}>
            <h2>{item.name}</h2>
          </figure>
        );
      })}
    </>
  );
};

import { useNavigate } from "react-router-dom";
import { Product } from "../../pages/LandingPage";
import s from "./Recipe.module.scss";
import { Button } from "../Button/Button";

interface RecipeProps {
  data: Product[];
  infoHeader?: boolean;
  mealType?: boolean;
  cuisine?: boolean;
}

export const Recipe = ({
  data,
  infoHeader,
  cuisine,
  mealType,
}: RecipeProps) => {
  const navigate = useNavigate();

  const handleRecipeClick = (item: Product) => {
    navigate(`/recipe/${item.id}`);
  };

  const handleIngredients = () => {};

  const handleInstructions = () => {};

  return (
    <>
      {data.map((item, index) => {
        return (
          <figure className={s.recipeStyling} key={index}>
            <header onClick={() => handleRecipeClick(item)}>
              <img src={item.image} />
              {infoHeader ? (
                <div className={s.infoHeaderStyling}>
                  <p>{item.rating} Stars</p>
                  <p>Prep: {item.prepTimeMinutes} Min</p>
                  <p>Cook: {item.cookTimeMinutes} Min</p>
                  <p>Servings: {item.servings}</p>
                </div>
              ) : null}
              <h3>{item.name}</h3>
            </header>
            {!infoHeader ? (
              <span className={s.infoStyling}>
                <p>{item.rating} Stars</p>
                <p>{item.reviewCount} reviews</p>
              </span>
            ) : null}
            <figcaption>
              <span>
                {!infoHeader ? <p>Servings: {item.servings}</p> : null}
                <p>Difficulty: {item.difficulty}</p>
                {infoHeader ? (
                  <p>{item.caloriesPerServing} kcal. per serving</p>
                ) : null}
              </span>
              {infoHeader ? (
                <span>
                  <Button
                    action={() => handleIngredients()}
                    text="Ingredients"
                  />
                  <Button
                    action={() => handleInstructions()}
                    text="Instructions"
                  />
                </span>
              ) : null}
              {cuisine ? <h4>Cuisine: {item.cuisine}</h4> : null}
              {mealType ? <h4>Meal Type: {item.mealType}</h4> : null}
              <div className={s.tagsStyling}>
                <p>Tags:</p>
                <span>
                  {item.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </span>
              </div>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
};

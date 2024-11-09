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
      {data.map((item, index) => {
        return (
          <figure className={s.recipeStyling} key={index}>
            <header onClick={() => handleRecipeClick(item)}>
              <img src={item.image} />
              <h3>{item.name}</h3>
            </header>
            <span className={s.infoStyling}>
              <p>{item.rating} Stars</p>
              <p>{item.reviewCount} reviews</p>
            </span>
            <figcaption>
              <p>Servings: {item.servings}</p>
              <p>Difficulty: {item.difficulty}</p>
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

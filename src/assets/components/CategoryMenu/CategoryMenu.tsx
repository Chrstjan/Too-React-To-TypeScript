import { useEffect, useState } from "react";
import { Product } from "../../pages/LandingPage";
import { NavLink } from "react-router-dom";
import s from "./CategoryMenu.module.scss";

enum MealType {
  Dinner = "Dinner",
  Lunch = "Lunch",
  SideDish = "Side Dish",
  Appetizer = "Appetizer",
  Snacks = "Snacks",
  Breakfast = "Breakfast",
  Beverage = "Beverage",
  Dessert = "Dessert",
}

interface CategoryProps {
  data: Product[];
}

export const CategoryMenu = ({ data }: CategoryProps) => {
  const [mealsCategory, setMealsCategory] = useState([]);

  const getMealCategories = (items: Product[]): Set<MealType> => {
    const categoryMealType = new Set<MealType>();
    items.forEach((item: Product) => {
      item.mealType.forEach((mealType: MealType) => {
        categoryMealType.add(mealType);
      });
    });
    return categoryMealType;
  };

  useEffect(() => {
    const mealCategories = getMealCategories(data);
    const mealCategoriesArray = Array.from(mealCategories);
    setMealsCategory(mealCategoriesArray);
  }, [data]);

  return (
    <ul className={s.navStyling}>
      {mealsCategory.map((item) => {
        return (
          <NavLink key={item} to={`/recipes/${item}`}>
            {item}
          </NavLink>
        );
      })}
    </ul>
  );
};

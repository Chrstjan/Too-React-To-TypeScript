import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { MainLayout } from "../layout/MainLayout";
import { LandingPage } from "../pages/LandingPage";
import { RecipesPage } from "../pages/RecipesPage";
import { RecipePage } from "../pages/RecipePage";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={routes.recipes} element={<RecipesPage />} />
        <Route path={routes.recipe} element={<RecipePage />} />
      </Route>
    </Routes>
  );
};

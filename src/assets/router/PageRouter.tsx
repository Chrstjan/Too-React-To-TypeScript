import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { LandingPage } from "../pages/LandingPage";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

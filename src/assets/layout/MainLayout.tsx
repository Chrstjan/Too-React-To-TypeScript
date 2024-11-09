import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { FaReact } from "react-icons/fa";
import { Searchbar } from "../components/Searchbar/Searchbar";

export const MainLayout = () => {
  return (
    <>
      <Header>
        <FaReact />
        <Link to="/">
          <h1>Too React To TypeScript</h1>
        </Link>
        <Searchbar />
      </Header>
      <Outlet />
    </>
  );
};

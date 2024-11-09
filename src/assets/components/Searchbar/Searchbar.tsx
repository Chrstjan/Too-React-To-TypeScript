import { CiSearch } from "react-icons/ci";
import s from "./Searchbar.module.scss";

type SearchbarType = {};

export const Searchbar = ({}: SearchbarType) => {
  const handleSearch = () => {
    console.log("lol");
  };

  return (
    <>
      <input
        className={s.searchbarStyling}
        type="text"
        id="searchbar"
        name="searchbar"
        defaultValue="Pizza"
      />
      <CiSearch onClick={() => handleSearch()} />
    </>
  );
};

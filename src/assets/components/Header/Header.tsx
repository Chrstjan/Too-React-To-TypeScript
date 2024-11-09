import { ReactNode } from "react";
import s from "./Header.module.scss";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <header className={s.headerStyling}>{children}</header>;
};

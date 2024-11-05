import { ReactNode } from "react";
import s from "./Wrapper.module.scss";

type WrapperProps = {
  title?: string;
  children: ReactNode;
  type?: string;
};

export const Wrapper = ({ title, children, type }: WrapperProps) => {
  return (
    <section className={`${s.wrapperStyling} ${type ? s[type] : ""}`}>
      {title ? <h2 className={s.wrapperTitle}>{title}</h2> : null}
      {children}
    </section>
  );
};

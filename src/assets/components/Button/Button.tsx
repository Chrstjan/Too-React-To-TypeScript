import { MouseEventHandler } from "react";

type ButtonProps = {
  action: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

export const Button = ({ action, text }: ButtonProps) => {
  return <button onClick={action}>{text}</button>;
};

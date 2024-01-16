import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

export const Container = ({ children }: TContainer) => {
  return <div className="max-w-6xl mx-auto border">{children}</div>;
};

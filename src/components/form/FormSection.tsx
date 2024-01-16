import { useContext } from "react";
import { FormElementContext, TContext } from ".";

export const FormSection = () => {
  const { double } = useContext(FormElementContext) as TContext;
  console.log({ double });
  return <div></div>;
};

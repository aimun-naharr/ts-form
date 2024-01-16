import { ReactNode, createContext } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TContext = {
  double: boolean;
};

type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};
export const FormElementContext = createContext<TContext | null>(null);

export const Form = ({ children, onSubmit, double = true }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormElementContext.Provider>
  );
};

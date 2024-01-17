import { useContext } from "react";
import { FormElementContext, TContext } from ".";
import { cn } from "../../utils";
import { Container } from "../layouts";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext) as TContext;
  console.log({ double });
  return (
    <>
      <Container>
        {/* form container */}
        <div
          className={cn("py-8 grid grid-cols-1 gap-4  mx-auto px-4 md:px-0", {
            "max-w-5xl md:grid-cols-2 ": double,
            "max-w-md grid-cols-1 ": !double,
          })}
        >
          {children}
        </div>
        {/* form container */}
      </Container>
    </>
  );
};

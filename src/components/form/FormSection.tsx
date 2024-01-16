import { useContext } from "react";
import { FormElementContext, TContext } from ".";
import { cn } from "../../utils";
import { Container } from "../layouts";

export const FormSection = () => {
  const { double } = useContext(FormElementContext) as TContext;
  console.log({ double });
  return (
    <>
      <Container>
        {/* form container */}
        <div
          className={cn("py-8 grid grid-cols-1 max-w-[500px] gap-4  mx-auto", {
            "max-w-5xl md:grid-cols-2 ": double,
          })}
        >
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input className="w-full" type="text" name="name" id="name" />
          </div>
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input className="w-full" type="text" name="name" id="name" />
          </div>
        </div>
        {/* form container */}
      </Container>
    </>
  );
};

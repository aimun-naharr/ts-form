import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { Form, FormSection } from "./components/form";
import { cn } from "./utils";
import InputField from "./components/ui/InputField";

const App = () => {
  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <InputField
            register={{ ...register("name") }}
            id="name"
            label="Name"
          />
          <button type="submit">submit</button>
        </FormSection>
      </Form>
    </div>
  );
};

export default App;

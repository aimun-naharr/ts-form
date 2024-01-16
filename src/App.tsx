import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { Form, FormSection } from "./components/form";

const App = () => {
  const { handleSubmit, errors } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="">
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection></FormSection>
      </Form>
    </div>
  );
};

export default App;

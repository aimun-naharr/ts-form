import { FieldValues, UseFormRegister } from "react-hook-form";

type TInputField = {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
};

const InputField = ({ id, label, type = "text", register }: TInputField) => {
  return (
    <div>
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input className="w-full" type={type} id={id} {...register} />
    </div>
  );
};

export default InputField;

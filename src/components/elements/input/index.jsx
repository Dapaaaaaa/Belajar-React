import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      {/* Disebut self closing tag ( < /> ) */}
      <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
    </div>
  );
});
export default InputForm;

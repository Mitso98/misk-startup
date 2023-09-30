import React from "react";
import FormGroup from "../questionsComponents/FormGroup";
import { FormData } from "../../utils/formData";

interface FormContainerProps {
  formData: FormData[];
}

const FormContainer: React.FC<FormContainerProps> = ({ formData }) => {
  return (
    <form className="w-full px-8 mt-5">
      {formData.map((field, idx) => (
        <FormGroup
          key={idx}
          title={field.title}
          type={field.type}
          subtitle={field.subtitle}
          toggleOptions={field.toggleOptions}
          checkBoxOption={field.checkBoxOption}
        />
      ))}
    </form>
  );
};

export default FormContainer;

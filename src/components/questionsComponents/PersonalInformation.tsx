import React from "react";
import FormGroup from "./FormGroup";
import QuestionContainer from "./QuestionContainer";
import { personalInfo } from "../../utils/formData";

const PersonalInformation: React.FC = () => {
  return (
    <QuestionContainer title="Personal Information">
      <form className="w-full px-8 mt-5">
        {personalInfo.map((field, idx) => (
          <FormGroup
            key={idx}
            title={field.title}
            type={field.type}
            subtitle={field.subtitle}
            rightDiv={field.rightDiv}
          />
        ))}
      </form>
    </QuestionContainer>
  );
};

export default PersonalInformation;

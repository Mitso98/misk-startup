import React from "react";
import QuestionContainer from "./QuestionContainer";
import { personalInfo } from "../../utils/formData";
import FormContainer from "../layouts/FormContainer";

const PersonalInformation: React.FC = () => {
  return (
    <QuestionContainer title="Personal Information">
      <FormContainer formData={personalInfo}></FormContainer>
    </QuestionContainer>
  );
};

export default PersonalInformation;

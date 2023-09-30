import { profileData } from "../../utils/formData";
import FormContainer from "../layouts/FormContainer";

import QuestionContainer from "./QuestionContainer";

const Profile: React.FC = () => {
  return (
    <QuestionContainer title="Personal Information">
      <FormContainer formData={profileData}></FormContainer>
    </QuestionContainer>
  );
};
export default Profile;

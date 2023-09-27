import { profileData } from "../../utils/formData";
import FormGroup from "./FormGroup";
import QuestionContainer from "./QuestionContainer";

const Profile: React.FC = () => {
  return (
    <QuestionContainer title="Personal Information">
      <form className="w-full px-8 mt-5">
        {profileData.map((field, idx) => (
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
export default Profile;

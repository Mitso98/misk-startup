import UploadCoverImage from "../questionsComponents/UploadCoverImage";
import PersonalInformation from "../questionsComponents/PersonalInformation";
import Profile from "../questionsComponents/Profile";

const Questions: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 mt-initial-mt mx-auto md:ml-initial-ml mb-10">
      <UploadCoverImage />
      <PersonalInformation />
      <Profile />
    </div>
  );
};
export default Questions;

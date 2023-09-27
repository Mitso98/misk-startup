import QuestionContainer from "./QuestionContainer";

const UploadCoverImage: React.FC = () => {
  return (
    <QuestionContainer title="Upload cover image">
      <div className="w-[90%]  h-[150px]  flex flex-col items-center justify-center border border-dotted border-black rounded-md my-12 cursor-pointer">
        <p className="text-[10px] md:text-sm font-semibold">
          Upload cover image
        </p>
        <p className="text-[#979797] md:text-sm text-[10px] font-medium">
          16:9 ratio is recommended. Max image size 1mb
        </p>
      </div>
    </QuestionContainer>
  );
};
export default UploadCoverImage;

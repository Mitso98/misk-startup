import { ReactNode } from "react";

interface QuestionContainerProps {
  title: string;
  children: ReactNode;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div
      style={{ boxShadow: " 3px 3px 14px rgba(190.19, 190.19, 190.19, 0.30)" }}
      className="sm:w-[300px] md:w-[596px] flex flex-col  items-center rounded-lg font-poppins "
    >
      <h1 className="w-full bg-[#D0F7FA] font-semibold text-sm md:text-2xl pl-8 py-4 rounded-t-lg">
        {title}
      </h1>
      {children}
    </div>
  );
};
export default QuestionContainer;

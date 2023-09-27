import Questions from "./Questions";
import TopBar from "./TopBar";

const AppForm: React.FC = () => {
  return (
    <div className="w-full">
      <TopBar />
      <Questions />
    </div>
  );
};
export default AppForm;

import CheckAndToggleButtons from "../layouts/CheckAndToggleButtons";

interface FormGroupProps {
  title: string;
  type: string;
  subtitle: null | string;
  toggleOptions: null | { trueOption: string; falseOption: string };
  checkBoxOption: null | string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  title,
  type,
  subtitle,
  toggleOptions,
  checkBoxOption,
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label
        htmlFor={title}
        className="font-semibold text-mobile-text md:text-xl flex justify-between "
      >
        <div>
          {title}
          <span className="text-mobile-text md:text-sm font-normal">
            {subtitle || ""}
          </span>
        </div>
        <div>
          <CheckAndToggleButtons
            checkBoxOption={checkBoxOption}
            toggleOptions={toggleOptions}
          ></CheckAndToggleButtons>
        </div>
      </label>
      <input
        id={title}
        type={type}
        className="border-b border-[#C4C4C4] outline-none"
      />
    </div>
  );
};
export default FormGroup;

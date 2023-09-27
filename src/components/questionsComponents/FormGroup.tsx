import Toggle from "../Toggle";
import { ToggleProbs } from "../Toggle";

interface FormGroupProps {
  title: string;
  type: string;
  subtitle: null | string;
  rightDiv: null | ToggleProbs;
}

const FormGroup: React.FC<FormGroupProps> = ({
  title,
  type,
  subtitle,
  rightDiv,
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
            {" "}
            {subtitle || ""}
          </span>
        </div>
        {rightDiv && (
          <div>
            <Toggle
              checkBoxOption={rightDiv?.checkBoxOption}
              toggleOptions={rightDiv?.toggleOptions}
            ></Toggle>
          </div>
        )}
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

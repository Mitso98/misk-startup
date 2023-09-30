import { useState } from "react";
import CheckBox from "../CheckBox";
import Toggle from "../Toggle";

export interface CheckAndToggleButtonsProbs {
  toggleOptions: null | { trueOption: string; falseOption: string };
  checkBoxOption: null | string;
}

const CheckAndToggleButtons: React.FC<CheckAndToggleButtonsProbs> = ({
  toggleOptions,
  checkBoxOption,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleButtonHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-6 items-stretch">
      {/* Check box */}
      {checkBoxOption && <CheckBox title={checkBoxOption} />}

      {/* Toggle box */}
      {toggleOptions && (
        <Toggle
          toggleOptions={toggleOptions}
          toggleButtonHandler={toggleButtonHandler}
          isSelected={isSelected}
        />
      )}
    </div>
  );
};

export default CheckAndToggleButtons;

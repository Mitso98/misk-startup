interface ToggleProbs {
  toggleOptions: null | { trueOption: string; falseOption: string };
  toggleButtonHandler: () => void;
  isSelected: boolean;
}

const Toggle: React.FC<ToggleProbs> = ({
  toggleOptions,
  toggleButtonHandler,
  isSelected,
}) => {
  return (
    <div className="w-28 flex gap-3 items-center">
      <svg
        className=" cursor-pointer"
        width="51"
        height="26"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleButtonHandler}
      >
        <rect
          x="1"
          y="1"
          width="49"
          height="24"
          rx="12"
          fill={isSelected ? "green" : "white"}
          stroke="#CCCCCC"
          style={{
            transition: "fill 0.4s ease",
          }}
        />
        <rect
          x={isSelected ? "5" : "29"}
          y="4"
          width="18"
          height="18"
          rx="9"
          fill={isSelected ? "white" : "#F4F4F4"}
          stroke="#CCCCCC"
          style={{
            transition: "x 0.4s ease",
            transform: isSelected ? "translateX(0)" : "translateX(29)",
          }}
        />
      </svg>
      <p className="text-[#666666] font-normal text-mobile-text md:text-lg font-noto-sans ">
        {isSelected ? toggleOptions?.trueOption : toggleOptions?.falseOption}
      </p>
    </div>
  );
};

export default Toggle;

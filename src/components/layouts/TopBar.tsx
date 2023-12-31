import { useState } from "react";

const TopBar: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<null | string>(
    "Application Form"
  );

  //list items
  const listItems: string[] = [
    "Program Details",
    "Application Form",
    "Workflow",
    "Preview",
  ];

  // styles
  const style: string =
    " w-1/4 py-5 flex items-center justify-center relative cursor-pointer ";
  const selected: string = " bg-[#00635B] text-white h-32 ";
  const border: string = "border-r border-[#C4C4C4]";
  // arrow shape
  const arrow: JSX.Element = (
    <svg
      className=" w-7 h-10 absolute top-1/2 left-full transform -translate-y-1/2 md:-translate-x-0  -translate-x-1/3 -z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 21L0 42L-2.09101e-06 0L21 21Z" fill="#00635B" />
    </svg>
  );
  // handlers
  const stageHandler = (stage: string) => {
    setCurrentStage(stage);
  };

  return (
    <div
      className="h-32 mt-initial-mt flex items-center rounded-lg font-inter"
      style={{
        boxShadow: "0px 1px 18px rgba(0, 0, 0, 0.12)",
      }}
    >
      <ul className="w-full flex justify-between items-center font-medium text-center text-[10px] md:text-lg ">
        {listItems.map((itemName, idx) => (
          <li
            key={idx}
            className={
              // hide border and apply selected style when stage is active
              style +
              (currentStage !== itemName && border) +
              (currentStage === itemName && selected)
            }
            onClick={() => stageHandler(itemName)}
          >
            {
              // show arrow for selected stage unless it is last item hide it
              currentStage === itemName && idx < listItems.length - 1 && arrow
            }
            <p>{itemName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopBar;

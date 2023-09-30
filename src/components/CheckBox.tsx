type Props = {
  title: string;
};

const checkBox = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <input
        id={title}
        className="w-4 h-4 cursor-pointer   rounded-sm accent-[#087B2F]"
        type="checkbox"
      />
      <label
        className="font-normal text-mobile-text md:text-lg text-[#666666] "
        htmlFor={title}
      >
        {title || "Add title"}
      </label>
    </div>
  );
};

export default checkBox;

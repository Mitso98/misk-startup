import NavIcons from "../NavIcons";

const Navbar: React.FC = () => {
  return (
    <div className="w-24 flex flex-col justify-between h-screen sticky top-0">
      <NavIcons />

      <div
        className="
      w-16
      h-16 
      flex
      items-center 
      justify-center 
      text-white 
      font-semibold 
      font-poppins
      rounded-full 
      bg-[#1D4ED8] 
      mb-14 
      mx-auto 
      cursor-pointer"
      >
        <p>NT</p>
      </div>
    </div>
  );
};
export default Navbar;

import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="w-24 flex flex-col justify-between h-screen sticky top-0">
      <NavIcons />

      <div
        className="
      w-16 flex
      items-center 
      justify-center 
      text-white 
      font-medium 
      h-16 
      rounded-full 
      bg-[#1D4ED8] 
      mb-14 
      mx-auto 
      cursor-pointer"
      >
        NT
      </div>
    </div>
  );
};
export default Navbar;

import { FavoriteBorder, Search } from "@mui/icons-material";

interface MenuProps {
  isOpen: boolean;
}

const HamburgerMenu: React.FC<MenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        !isOpen ? "h-[0px] overflow-hidden" : "h-screen "
      } transition-height ease transform duration-300 bg-[#f8f7f0] text-[19.5px]`}
    >
      <div className=" flex justify-end items-center gap-3   my-2">
     
      
      <div className="flex w-100 flex-[5] bg-white overflow-hidden items-center justify-between p-2 h-8 rounded-[20px]">
        <input
          placeholder="Search..."
          type="text "
          className=" w-100 p-2"
        />
        <Search />  
        </div> 
        <> <FavoriteBorder /></>
      </div>
      <ul className="mt-3 flex flex-col justify-between w-100 gap-5">
        <li className="relative hover:text-white cursor-pointer">Explore</li>
        <li>Learn</li>
        <li>Shop</li>
        <li>Jobs</li>
      </ul>
    </div>
  );
};
export default HamburgerMenu;

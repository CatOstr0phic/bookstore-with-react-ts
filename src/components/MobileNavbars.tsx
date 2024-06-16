import Container from "../layouts/Container";
import { AddShoppingCart } from "@mui/icons-material";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

export default function MobileNavbars() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-zinc-700 transition ease transform duration-300`;
  return (
    <>
      <nav
        className={` ${
          isOpen && "sticky"
        } order-2 top-0 z-20 sm:hidden bg-[#f8f7f0]`}
      >
        <Container>
          <div className="items-center flex sm: justify-between pt-3">
            
                <button
                  className=" flex flex-col h-5 w-4 mt-[3px] rounded "
                  onClick={handleClick}
                >
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "rotate-45 translate-y-1.5 group-hover:opacity-100"
                        : "opacity- group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen ? "opacity-0" : " group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "-rotate-45 -translate-y-2 group-hover:opacity-100"
                        : " group-hover:opacity-100"
                    }`}
                  />
                </button>
          
            <Logo />
            <div>
              <AddShoppingCart />
            </div>
          </div>
          <HamburgerMenu isOpen={isOpen} />
        </Container>
      </nav>
    </>
  );
}

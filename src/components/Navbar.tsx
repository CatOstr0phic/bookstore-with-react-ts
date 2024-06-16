// import myImage from '../assets/24260983_6902302.jpg';
import styled from "styled-components";
import { FavoriteBorder, ShoppingBasketOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useStateValue } from "../redux/StateProvider";
import Register from "./Register";
import Container from "../layouts/Container";

const Category = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  color: #525250;
`;
interface MotionProps {
  text: string;
}
const Motion: React.FC<MotionProps> = ({ text }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};

interface Categories {
  value: string;
  id: number;
  link: string;
  bool: boolean;
}

const items: Categories[] = [
  {
    id: 1,
    value: "Category",
    link: "/genres",
    bool: false,
  },
  {
    id: 2,
    value: "Home",
    link: "/",

    bool: false,
  },
  {
    id: 3,
    value: "Bestseller",
    link: "/",

    bool: false,
  },
  {
    id: 4,
    value: "Author",
    link: "#here",

    bool: false,
  },
];

// interface Item {
//   index: number;
//   prevItems: string;
// }

export default function Navbar() {
  const [selectedItems, setSelectedItems] = useState(items.map(() => false));
  const [{ boolModal }, dispatch] = useStateValue();

  const handlefocusClick = (index: number) => {
    setSelectedItems((prevItems) => {
      const newItems = prevItems.map((_isSelected, i) => {
        return i === index ? !prevItems[index] : false;
      });
      return newItems;
    });
  };

  console.log(boolModal);
  return (
    <>
      <nav className="sticky order-1 top-0 z-10 w-full pt-6">
        <Container>
          <div className="w-100 flex gap-5  justify-between">
            <div className="flex-[2] hidden sm:block ">
              {/* Logo must here */}
              <Logo />
            </div>
            <div
              className="lg:flex-[2] flex-[4]
           flex justify-center 
           items-center flex-col"
            >
              <div
                className="w-full bg-white px-2 py-1 shadow-md
           flex items-center justify-between rounded-md"
              >
                <input type="text" className="mr-2 w-[100%]" />
                <span className="cursor-pointer px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="grey"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>
              <div className="flex w-full items-center justify-evenly  my-4">
                {items.map((item, index) => (
                  <Link to={item.link}>
                    <Category
                      key={index}
                      style={{
                        color: selectedItems[index] ? "#00bcb5" : "#525250",
                      }}
                      onClick={() => handlefocusClick(index)}
                    >
                      <Motion text={item.value} />
                      <hr
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          borderColor: selectedItems[index] && "#00bcb5",
                          backgroundColor: selectedItems[index] && "#00bcb5",
                        }}
                      />
                    </Category>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className="flex-[2] justify-end gap-5
         text-[#525250]  hidden sm:flex"
            >
              <Link to={`/basket`}>
                <ShoppingBasketOutlined />
              </Link>
              <Link to={`/favourite`}>
                <FavoriteBorder />
              </Link>
              <div
                onClick={() =>
                  dispatch({ type: "OPEN_MODAL", item: !boolModal })
                }
                className="w-9 h-9 -mt-2 border rounded-full"
              >
                <Avatar
                  alt="Cindy Baker"
                  sx={{ width: 35, height: 35 }}
                  src="/static/images/avatar/3.jpg"
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
      {boolModal && (
        <>
          <Container>
            <Register />
          </Container>
        </>
      )}
    </>
  );
}

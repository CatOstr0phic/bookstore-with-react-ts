import Container from "../layouts/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "primereact/carousel";
// import { Link } from "react-router-dom";
// import { Card, Rating } from "@mui/material";
// import { FavoriteBorder } from "@mui/icons-material";
import SliderBooks from "../components/SliderBooks";

interface Book {
  title: string;
  image: string;
  rating: number;
  id: string;
  author: string;
}

// const SliderBooks = (book: Book) => {
//   return (
//     <Card
//       key={book.id}
//       variant="outlined"
//       className="w-full h-full"
//       style={{
//         boxShadow: "0px 0px 10px 1px #eee",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "0.5rem",
//         gap: 10,
//         fontSize: "90%",
//         borderRadius: "8px",
//         height: "absolute",
//         backgroundColor: "white",
//         position: "relative",
//       }}
//     >
//       <Link to={`/book/:${book.id}`}>
//         <>
//           <img
//             src={book.image}
//             className={`bg-gradient-to-r from-cyan-200 to-blue-300 w-fit h-100  max-h-[185px]  object-contain`}
//             alt="absent?"
//           />
//         </>
//       </Link>
//       <div className="h-full relative ml-4">
//         <div className="font-semibold leading-4 h-8 overflow-hidden text-md text-[#161617e5]">
//           {book.title}
//         </div>
//         <div className="flex justify-between">
//           <h5 className="text-xs text-zinc-600">By {book.author}</h5>
//         </div>

//         <div className="flex items-center text-sm ">
//           <Rating
//             name="half-rating-read"
//             defaultValue={book.rating}
//             precision={0.5}
//             readOnly
//             size="small"
//           />
//           <span className="text-sm ml-1">{book.rating}</span>
//         </div>
//       </div>{" "}
//       <div className="absolute  right-2 top-2 text-[#03c6bf] cursor-pointer">
//         <FavoriteBorder fontSize="small" />
//       </div>
//     </Card>
//   );
// };

const ProductTemplate = () => {
  return (
    <>
      <section className="w-100 flex flex-col p-5 my-10 gap-3 items-center justify-center">
        <div className="border rounded-full p-2 bg-zinc-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="grey"
            viewBox="0 0 16 16"
          >
            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-[#5e5555]">
          Your Basket is mt
        </div>
        <div className="font-semibold text-[#656262]">
          Check out the products below for some shopping inspiration!
        </div>
      </section>
    </>
  );
};

export default function Basket() {
  const [books, setBooks] = useState<Book[]>([]);
  const options = {
    method: "GET",
    url: "http://localhost:3000/data",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setBooks(response.data.other_books);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ProductTemplate />

      <div className="relative my-10">
        <Carousel
          value={books}
          numVisible={7}
          numScroll={1}
          itemTemplate={SliderBooks}
          circular
          autoplayInterval={4000}
        />
      </div>
    </Container>
  );
}

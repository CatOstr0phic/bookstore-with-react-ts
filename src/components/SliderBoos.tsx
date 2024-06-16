import { Link } from "react-router-dom";
import { Card, Rating } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

interface Book {
  title: string;
  images: string;
  rating: number;
  id: string;
  author: string;
}

const SliderBooks = (book:Book) => {
  return (
    <>
      <Card
      key={book.id}
      variant="outlined"
      className="w-full h-full"
      style={{
        boxShadow: "0px 0px 10px 1px #eee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        borderRadius: "8px",
        height: "absolute",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <Link
        to={`/book/:${book.id}`}
      >
        <>
          <img
            src={book.images}
            className="min-w-[85px] max-w-[125px] max-h-[185px] min-h-[125px] object-contain"
            alt="absent?"
          />
        </>
      </Link>
      <div className="h-full relative ml-4">
        <div className="font-semibold leading-4 h-8 overflow-hidden my-1 text-md text-[#161617e5]">
          {book.title}
        </div>
        <h5 className="text-sm text-zinc-600">By {book.author}</h5>
        <div className="flex items-center text-sm ">
          <Rating
            name="half-rating-read"
            defaultValue={book.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="text-sm ml-1">{book.rating}</span>
        </div>
      </div>

      <div className="absolute  right-5 bottom-5 text-[#03c6bf] cursor-pointer">
        <FavoriteBorder fontSize="small" />
      </div>
    </Card>
    </>
  );
}; export default SliderBooks;

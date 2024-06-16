import axios from "axios";
import { useState, useEffect } from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Container from "../layouts/Container";
import { Card } from "@mui/material";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { useStateValue } from "../redux/StateProvider";
import AnimationOn from "../layouts/AnimationOn";
interface Book {
  title: string;
  cover: string;
  rating: number;
  pages: number;
  plot: string;
  book_id: number;
  genres: [];
  _id: string;
  author: {
    first_name: string;
    last_name: string;
  };
  review: {
    name: string;
    body: string;
  };
}

const Info = styled.div`
  font-size: 80%;
  color: grey;
  margin-right: 6px;
`;

const InfoBook = styled.div`
  font-size: 80%;
  font-weight: 600;
  margin-right: 3px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px !important;
  width: 100%;
  font-weight: 600;
`;

export default function AboutBook() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const matches = useMediaQuery("(min-width:1024px)");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ page }, dispatch] = useStateValue();

  const options = {
    method: "GET",
    url: "http://localhost:3000/data",
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        setBooks(response.data.books);
      } catch (error) {
        setError(error as Error); // Type assertion for safety
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error fetching books: {error.message}</p>;
  }

  const filteredBooks = books.slice(-4).reverse();
  const targetId = `${page}`;
  const filteredItems = books.filter((book: Book) => book._id === targetId);
  return (
    <Container>
      {" "}
      {filteredItems.map((book, i) => (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            className="flex gap-4 mb-5 "
            key={page}
          >
            <Card
              sx={{
                flex: "2",
                padding: "2%",
              }}
            >
              <img src={book.cover} className="w-100 h-[100]" alt="" />
            </Card>
            <Card
              sx={{
                flex: "7",
                padding: "2%",
                display: "flex",
                gap: "4px",
                flexDirection: "column",
              }}
            >
              <div className="text-2xl ">
                <motion.strong
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                >
                  {book.title}
                </motion.strong>
              </div>

              <Div>
                <Info>autohor: </Info>
                <InfoBook>
                  {book.author.first_name} {book.author.last_name}
                </InfoBook>
              </Div>

              <Div>
                <Info>genres: </Info>

                {book.genres.map((value) => (
                  <>
                    <> {value} ,</>
                  </>
                ))}
              </Div>
              <Div>
                <Info>cost:</Info>
                <span className="text-sky-600 text-lg">$ {book.book_id}</span>
              </Div>
              <Div>
                <Info>pages:</Info>
                <span className="text-sky-600 text-lg"> {book.pages}</span>
              </Div>
              <Div>
                <Rating
                  name="half-rating-read"
                  defaultValue={book.rating}
                  precision={0.5}
                />
                <InfoBook>{book.rating}</InfoBook>
              </Div>
              {matches && (
                <>
                  <div>{book.plot}</div>
                </>
              )}
            </Card>
          </motion.div>{" "}
          {!matches && (
            <AnimationOn>
              <Card
                sx={{
                  padding: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <>
                  <div>
                    <span className="text-lg font-semibold text-gray-500">
                      Description:{" "}
                    </span>
                    {book.plot}
                  </div>
                </>
              </Card>
            </AnimationOn>
          )}
        </>
      ))}
      <AnimationOn>
        <Card>
          {filteredItems.map((book) => (
            <div className="p-5 ">
              <h2 className="text-xl  text-center font-semibold">
                {book.review.name}
              </h2>
              <div className="text-lg">{book.review.body}</div>
              <div className="w-100 text-right ">
                <button className="btn h-10 w-24 text-[#eee] bg-sky-700 border rounded-md shadow-[inset_3px_3px_8px_#d7d7d7,inset_-3px_-3px_8px_#e9e9e9;]">
                  Read full
                </button>
              </div>
            </div>
          ))}
        </Card>
      </AnimationOn>
      <div
        className="my-10 grid grid-cols-2 
      md:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {filteredBooks.map((book) => (
          <AnimationOn>
            <Card
              key={book.book_id}
              style={{
                display: "flex",
                padding: "1rem",
                borderRadius: "8px",
                height: "100%",
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <Link to="/">
                <>
                  <img
                    src={book.cover}
                    className="w-[85px] h-[125px]  object-contain"
                    alt="absent?"
                  />
                </>
              </Link>
              <div className="h-full relative ml-4">
                <div className="font-semibold leading-4 my-1 text-md text-[#161617e5]">
                  {book.title}
                </div>
                <h5 className="text-sm text-zinc-600">
                  By {book.author.first_name} {book.author.last_name}
                </h5>
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
                <div className="absolute bottom-0 left-0 text-lg ">
                  <strong>{book.pages} $</strong>
                </div>
              </div>
              <div className="absolute right-5 bottom-5 text-[#03c6bf] cursor-pointer">
                <FavoriteBorder fontSize="small" />
              </div>
            </Card>
          </AnimationOn>
        ))}
      </div>
    </Container>
  );
}

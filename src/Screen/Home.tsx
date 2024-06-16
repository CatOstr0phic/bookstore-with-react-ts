import Container from "../layouts/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { CircularProgress } from "@mui/material";
import AnimationOn from "../layouts/AnimationOn";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import BooksCard from "../components/BooksCard";
import SliderBooks from "../components/SliderBooks";
import { ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";
interface Book {
  title: string;
  cover: string;
  rating: number;
  pages: number;
  book_id: number;
  _id: string;
  author: {
    first_name: string;
    last_name: string;
  };
}

const Strong = styled.div`
  margin: 20px 0px;
  font-weight: 700;
`;

// import LogoFSite from "../assets/—Pngtree—bookstore book decoration illustration_4564324.png";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [aboutProfit, setAboutProfit] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<Book[]>([]);
  const matches = useMediaQuery("(max-width:526px)");
  const [genres, setGenres] = useState([]);
  console.log(products);

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
        setProducts(response.data.for_you);
        setGenres(response.data.other_books);
        setAboutProfit(response.data.money);
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
    return (
      <section
        className="w-screen h-screen flex
       items-center -mt-[10%] gap-3 justify-center "
      >
        <CircularProgress />
        <p>Loading books...</p>
      </section>
    );
  }

  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  interface BannerProps {
    id: number;
    bg: string;
    text: string;
  }

  interface AuthorProps {
    author: string;
  }

  const banners: BannerProps[] = [
    {
      id: 1,
      bg: "assets/strawberry-chocolate-morph-animation.svg",
      text: "Books are free tickets to travel to other country, world or dimension",
    },
    {
      id: 2,
      bg: "assets/character-relaxing-on-airplane.svg",
      text: "Where you want and whenever you want it depends on you",
    },
  ];

  const productTemplate = (banner: BannerProps) => {
    return (
      <>
        <div
          className="relative text-lg rounded-lg overflow-hidden max-h-44  md:max-h-72 
         w-[130%] md:min-h-60 h-72 flex items-center justify-center"
        >
          <img
            className="h-72 max-h-44 md:max-h-72 md:min-h-60 object-fill rounded-lg overflow-hidden"
            alt=""
            src={`${banner.bg}`}
            style={{
              width: "100%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
          <div
            style={{
              marginLeft: "-55%",
              fontSize: "80%",
              fontWeight: "800",
              maxWidth: "30%",
              textShadow: "0 1px 2px #fff",
              color: "purple",
            }}
          >
            {banner.text}
          </div>
        </div>
      </>
    );
  };

  const filteredAuthors = aboutProfit.filter(
    (book: AuthorProps) => book.author
  );

  // const text = "Framer Motion is a really cool tool".split(" ");

  return (
    <Container>
      {/* {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))} */}
      <AnimationOn>
        <div className="block md:flex rounded-lg w-full h-44 md:h-72 md:min-h-60 gap-5 ">
          <div className="relative flex-[7]">
            <div className=" shadow-lg rounded-lg overflow-hidden">
              <Carousel
                value={banners}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                circular
                autoplayInterval={3000}
              />
            </div>
          </div>

          <div className="flex-[3] hidden h-full lg:flex flex-col gap-5">
            <div className="h-full shadow-lg rounded-md overflow-hidden">
              <img
                src="/assets/00002454.webp"
                alt=""
                className="h-full w-full  min-h-100 object-fill"
              />
            </div>
            <div className="h-full  shadow-lg rounded-md overflow-hidden">
              <img
                src="/assets/00002493.webp"
                alt=""
                className="h-full w-full  min-h-100 object-fill"
              />
            </div>
          </div>
        </div>
      </AnimationOn>
      <div className="flex gap-4">
        <div className="flex-[7]">
          <Strong>Popular</Strong>
          <div
            className={`grid  ${
              matches ? "grid-cols" : "grid-cols-2"
            }  md:grid-cols-3  gap-3 mt-2`}
          >
            {books.map((book) => (
              <AnimationOn>
                <>
                  <BooksCard
                    loading={true}
                    title={book.title}
                    cover={book.cover}
                    rating={book.rating}
                    pages={book.pages}
                    book_id={book.book_id}
                    _id={book._id}
                    author={book.author}
                  />
                </>
              </AnimationOn>
            ))}
          </div>
        </div>
        <div className="w-[30%] hidden lg:block">
          <Strong>Authors</Strong>
          <AnimationOn>
            <div
              className="w-full bg-white mb-2 pl-2 p-1 shadow-md
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
          </AnimationOn> <AnimationOn>
          <ul className="max-h-[300px] overflow-hidden overflow-y-scroll">       
            {filteredAuthors.map((author: AuthorProps) => (
      
                <li
                  key={author.author}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="flex items-center gap-3 my-[7px]">
                    <Avatar
                      alt={author.author}
                      sx={{ width: 35, height: 35 }}
                      src="/static/images/avatar/3.jpg"
                    />
                    <span>{author.author}</span>
                  </div>
                  <div className="">
                    <span className="text-sm mx-2 text-sky-500">
                      <strong>{75}</strong>
                    </span>
                    
                      <ArrowForwardIos
                        sx={{
                          cursor: "pointer",
                        }}
                        fontSize="small"
                      />
                  </div>
                </li>
     
            ))}         
          </ul></AnimationOn>
        </div>
      </div>

      <section className="relative my-5">
        <AnimationOn>
          <Strong>Personal Improvements</Strong>
          <Carousel
            value={genres}
            numVisible={7}
            numScroll={1}
            itemTemplate={SliderBooks}
            circular
          />
        </AnimationOn>
        <AnimationOn>
          <Strong>Some other books</Strong>
          <Carousel
            value={aboutProfit}
            numVisible={7}
            numScroll={1}
            itemTemplate={SliderBooks}
            circular
          />
        </AnimationOn>
      </section>
    </Container>
  );
}

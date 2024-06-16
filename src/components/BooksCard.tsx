/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { Card, Rating } from "@mui/material";
import { useStateValue } from "../redux/StateProvider";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { FavoriteBorder, ShoppingBasket } from "@mui/icons-material";
import { VariantType, useSnackbar } from "notistack";
import { useState } from "react";

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
  loading: boolean;
}

const BooksCard: React.FC<Book> = ({
  title,
  cover,
  rating,
  pages,
  book_id,
  _id,
  author,
  loading,
}) => {
  const [{ page }, dispatch] = useStateValue("");
  const [isSigned, setIsSigned] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    variant === "success"
      ? enqueueSnackbar("Added successfully!", { variant })
      : enqueueSnackbar("Please sign in!", { variant });
  };

  const sign = isSigned ? "success" : "default";

  return (
    <>
      <Card
        key={book_id}
        variant="outlined"
        style={{
          boxShadow: "0px 0px 10px 1px #eee",
          display: "flex",
          padding: "1rem",
          borderRadius: "8px",
          height: "absolute",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <>
          {!loading ? (
            <Skeleton
              sx={{ height: 125, width: 85 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <Link
              onClick={() =>
                dispatch({
                  type: "SHOW_BOOK",
                  item: _id,
                })
              }
              to={`/book/:${_id}`}
            >
              <div className="relative ">
                <Skeleton
                  sx={{ height: 125, width: 85, position: "absolute" }}
                  animation="wave"
                  variant="rectangular"
                />
                <>
                  <img
                    src={cover}
                    alt=""
                    className="w-[85px] h-[125px]  object-fill z-10"
                  />
                </>
              </div>
            </Link>
          )}
          <div className="h-full relative ml-4">
            <div className="font-semibold leading-4 my-1 text-md text-[#161617e5]">
              {loading ? (
                <> {title}</>
              ) : (
                <Typography component="div">
                  <Skeleton />
                </Typography>
              )}
            </div>
            {loading ? (
              <h5 className="text-sm text-zinc-600">
                By {author.first_name} {author.last_name}
              </h5>
            ) : (
              <Typography component="div">
                <Skeleton />
              </Typography>
            )}

            {loading ? (
              <div className="flex items-center text-sm ">
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="text-sm ml-1">{rating}</span>
              </div>
            ) : (
              <Typography component="div">
                <Skeleton />
              </Typography>
            )}

            {loading ? (
              <div className="left-0  text-lg ">
                <span>{pages} $</span>
              </div>
            ) : (
              <Typography component="div">
                <Skeleton />
              </Typography>
            )}
          </div>
          <div className="absolute  right-5 bottom-5 text-[#03c6bf] cursor-pointer">
            <FavoriteBorder
              fontSize="small"
              sx={{
                marginRight: "10px",
              }}
            />
            <ShoppingBasket
              onClick={handleClickVariant(sign)}
              fontSize="small"
            />
          </div>
        </>
      </Card>
      <></>
    </>
  );
};
export default BooksCard;

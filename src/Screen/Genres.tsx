import Container from "../layouts/Container";
import { motion } from "framer-motion";


const genres = [
  { genre: "Education", color: "#ff70ab" },
  { genre: "Science", color: "#c65bcf" },
  { genre: "Encyclopedia", color: "#c5ff95" },
  { genre: "Poetry", color: "#59d5e0" },
  { genre: "Economics", color: "#ffc94a" },
  { genre: "Biography", color: "#15f5ba" },
  { genre: "Psychology", color: "#ffdb5c" },
  { genre: "Medicine", color: "#f26137" },
  { genre: "Tourism", color: "#c40c0c" },
  { genre: "Detective", color: "#b7fc95" },
  { genre: "Bussiness", color: "#ff34ab" },
  { genre: "Management", color: "#c634cf" },
  { genre: "Classic Literature", color: "#b1595" },
  { genre: "Education", color: "#c5cf86" },
  { genre: "Bussiness", color: "#fab0ab" },
  { genre: "Management", color: "#c40bcf" },
  { genre: "Fantastic Literature", color: "#a5ff65" },
];

export default function Genres() {
  return (
    <Container>
      <ul className="grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-2">
        {genres.map((genre) => (
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 1 }}
            key={genre.genre}
            className={`bg-[${genre.color}] 
             border-pink-300 cursor-pointer
             text-lg font-semibold
             tracking-widest p-5 h-100 w-100 flex
              justify-center items-center rounded-lg shadow-lg text-white`}
          >
            <span className="py-5 text-inherit drop-shadow-[0_1px_1px_grey]">
              {genre.genre}
            </span>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
}

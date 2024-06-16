import LogoFSite from "../assets/—Pngtree—bookstore book decoration illustration_4564324.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={`/`}>
      <div className="inline-flex items-center border p-1 rounded-md border-[#00c1ba]">
        <img src={LogoFSite} alt="" className="w-auto  max-h-[30px] h-100" />
        <strong>
          <span className="text-[#ffdb5e]">Book</span>
          <span className="text-[#00c1ba]">Warm</span>
        </strong>{" "}
      </div>{" "}
    </Link>
  );
}

import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-40 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <span className="text-4xl">Gr</span>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/gaurangi-rane-8b762a92/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/gaurangirane" target="_blank"><FaSquareGithub /></a>
    </div>
  </nav>;
};

export default Navbar;

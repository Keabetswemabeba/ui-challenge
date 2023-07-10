import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <img src="./logo.png" />
     <nav ref={navRef}>
     <a href="/#">About</a>
      <a href="/#">Isme</a>
      <a href="/#">Developer</a>
      <a href="/#">Resources
      <FaAngleDown />
      </a>
      </nav>
      <button>
        Launch App
      </button>
   </header>
  )
}

export default Navbar
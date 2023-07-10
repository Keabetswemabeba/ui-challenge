import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

function Navbar2() {
  const navRef = useRef();

  const showNavbar2 = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="divi">
      <header className="he">
        <img src="./logo.png" />
        <nav className="navi" ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Blockchain</a>
          <a href="/#">Wallets</a>
          <a href="/#">Exchanges</a>
          <a href="/#">Blog</a>
        </nav>
        <button className="button1">Documentation</button>
      </header>
      <div className="p-alignment">
        <p className="pp">Copyright 2022 NFT3 All Rights Reserved</p>
        <p className="ptext">Terms Agreements<p className="para">Private Policy</p></p>
      </div>
    </div>
  );
}

export default Navbar2;

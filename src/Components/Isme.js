import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Isme() {
  const ismeRef = useRef();

  const showIsme = () => {
    ismeRef.current.classList.toggle("responsive_isme");
  };
  return (
    <div className="isme">
      <h1>
        <b>NFT3 The First</b>
      </h1>
      <h1>Unified Virtual Identity Network For Web3</h1>
      <p>
        Your NFT3 acts as a unified identity across all Web3 application layers
        and a pathway toward enabling personal monetization.
      </p>
      <div className="tag">
        <button className="tn">Browse NFTs Now</button>
        <button className="bt">
          <FaPlay />
        </button>
        <p className="t">Play Video</p>
      </div>
      <div className="body">
        <img className="photo" src="./image.jpg" />
        <div>
          <h1 className="bold">Watch The Future Of Web3</h1>
          <p className="text">
            your NFT3 as a unified identity across all Web3 application layers
            and a pathway toward enabling personal monetization.
          </p>
          <a className="arrow" href="#">
            Watch Full Video
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="content">
        <header className="topic">
          <h1 className="heading">DID-Wrapped NFTs To Allow Staked Identity</h1>
        </header>
      </div>
      <div className="card_maintainer">
        <div className="card1">
          <div className="card-container">
            <img className="pic" src="./icon.png" />
            <h2 className="card-title">The First</h2>
            <p className="card-description">
              Unified identity platform and network to engineer a staked
              incentivization model to apply to the identity problem, creating
              the concept of NFT3 it is pseudonymous autonomous.
            </p>
            <div className="ar">
              <a href="#">
                Learn More
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="card-container">
            <img className="pic" src="./icon2.png" />
            <h2 className="card-title">DAO-Governance</h2>
            <p className="card-description2">
              direct monetization path for individuals in Web3 and provides an
              infrastructural component for compositelevel creations and
              innovations for Web3 applications
            </p>
            <div className="ar">
              <a href="#">
                Learn More
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card-container">
            <img className="pic" src="./icon3.png" />
            <h2 className="card-title">The First Aggregation</h2>
            <p className="card-description">
              Technological innovation to conceivably (architecturally) invert
              current massified internet monetization models that fleece
              individuals informational and identical value
            </p>
            <div className="ar">
              <a href="#">
                Learn More
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="card-container">
            <img className="pic" src="./icon4.png" />
            <h2 className="card-title">On-chain Credit System</h2>
            <p className="card-description2">
              platform to utilize DID to create a comprehensive Web3 world
              passport, it will also create a user's personal credit scoring
              system for the Web3 world.
            </p>
            <div className="ar">
              <a href="#">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Isme;

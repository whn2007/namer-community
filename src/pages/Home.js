import React from "react";
import { Link } from "react-router-dom";
import HSymbol from "../assets/H.png";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="heading">
        <h1>
          A HANDSHAKE IMPROVEMENT PROPOSAL TO FIX <span>TOKEN ECONOMICS</span>
        </h1>
      </div>

      <div className="container main-action">
        <div className="text-intro">
          <strong>The Power for Change</strong>
          <h3>
            16 Directors working
            <br />
            Full-Time on Handshake
          </h3>
          <p>
            A dedicated community to give Handshake the love &amp; attention it
            deserves.
          </p>
          <Link to="/about">
            <button>Meet the Founders {">"}</button>
          </Link>
        </div>
        <div className="text-right">
          <h2 className="transform-right">
            Welcome to the upgraded Namer Community!
          </h2>
        </div>
      </div>

      <div className="text-intro text-intro-center">
        <img src={HSymbol} className="icon" alt="icon" />
        <h2>Our Mission</h2>
        <p>
          Working for the net-positive sake of Handshake is paramount, and above
          all else, no matter our personal differences, we will not encroach on
          the integrity of Handshake.
        </p>
        <Link to="/mission">
          <button>Read More {">"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

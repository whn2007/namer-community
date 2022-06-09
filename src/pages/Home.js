import React from "react";
import { Link } from "react-router-dom";
import secondBlockImage from "../assets/secondBlock.png";
import security from "../assets/security.png";
import HSymbol from "../assets/h.png";
import Symbol1 from "../assets/symbol1.png";
import Symbol2 from "../assets/symbol2.png";
import Symbol3 from "../assets/symbol3.png";
import HomeBottom from "../assets/homeBottom.png";
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
          <strong>Change is coming</strong>
          <h3>
            Supported by the <br /> Handshake founders
          </h3>
          <p>
            Handshake is the world's most powerful <br />
            peer to peer root naming system.
          </p>
          <Link to="/mission">
            <button>Get Involved {">"}</button>
          </Link>
        </div>
        <div>
          <h2>
            PEER-TO-PEER <br /> ROOT NAMING <br /> SYSTEM
          </h2>
        </div>
      </div>

      <div className="text-intro text-intro-center">
        <img src={HSymbol} className="icon" alt="icon" />
        <h2>Time to give Handshake the attention it deserves</h2>
        <p>
          Handshake is the world's most powerful peer-to-peer root naming
          system.
        </p>
        <Link to="/mission">
          <button>Get Involved {">"}</button>
        </Link>
      </div>

      <div
        className="secondBlock"
        style={{
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="firstContainer">
          <div className="firstHalf">
            <h1>A REALLY AWESOME HEADING</h1>
            <p>
              Handshake is the world's most <br />
              powerful peer-to-peer root naming <br />
              system. Time to give Handshake <br />
              the attention it deserves.
            </p>
          </div>
          <div className="secondHalf">
            <img src={secondBlockImage} alt="grunge" />
          </div>
        </div>

        <div className="secondContainer">
          <div className="firstHalf">
            <img src={security} alt="" />
          </div>
          <div className="secondHalf">
            <h1>AWESOME HEADING</h1>
            <p>
              Handshake is the world's most <br />
              powerful peer-to-peer root naming <br />
              system. Time to give Handshake <br />
              the attention it deserves.
            </p>
          </div>
        </div>

        <div className="thirdContainer">
          <div className="block">
            <img src={Symbol1} alt="grunge" />
            <h1>AWESOME HEADER</h1>
            <p>
              Handshake is the world's most <br />
              powerful peer-to-peer root naming <br />
              system. Time to give Handshake <br />
              the attention it deserves.
            </p>
          </div>
          <div className="block">
            <img src={Symbol2} alt="grunge" />
            <h1>AWESOME HEADER</h1>
            <p>
              Handshake is the world's most <br />
              powerful peer-to-peer root naming <br />
              system. Time to give Handshake <br />
              the attention it deserves.
            </p>
          </div>
          <div className="block">
            <img src={Symbol3} alt="grunge" />
            <h1>AWESOME HEADER</h1>
            <p>
              Handshake is the world's most <br />
              powerful peer-to-peer root naming <br />
              system. Time to give Handshake <br />
              the attention it deserves.
            </p>
          </div>
        </div>
      </div>

      <div
        className="thirdBlock"
        style={{ backgroundImage: `url(${HomeBottom})` }}
      >
        <img src={HSymbol} alt="" />
        <h1>
          Time to give Handshake the attention
          <br />
          it deserves
        </h1>
        <h2>
          Handshake is the world's most powerful peer-
          <br />
          to-peer root naming system.
        </h2>
        <Link to="/mission">
          <button>Get Involved {">"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

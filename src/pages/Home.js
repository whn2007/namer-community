import React from "react";
import { Link } from "react-router-dom";
import HSymbol from "../assets/h.png";
import Symbol1 from "../assets/symbol1.png";
import Symbol2 from "../assets/symbol2.png";
import Symbol3 from "../assets/symbol3.png";
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
          <h2 className="transform-right">
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

      <div className="container text-intro text-intro-simple text-intro-with-image">
        <div className="content">
          <h3>A REALLY AWESOME HEADING</h3>
          <p>
            Handshake is the world's most powerful peer-to-peer root naming
            system. Time to give Handshake the attention it deserves.
          </p>
        </div>
        <div className="image halfmoon">
          <div className="transform-right">Distribution</div>
        </div>
      </div>

      <div className="container text-intro text-intro-simple text-intro-with-image mb-0">
        <div className="image swoosh">
          <div className="transform-left">Security</div>
        </div>
        <div className="content">
          <h3>A REALLY AWESOME HEADING</h3>
          <p>
            Handshake is the world's most powerful peer-to-peer root naming
            system. Time to give Handshake the attention it deserves.
          </p>
        </div>
      </div>

      <div className="bg-wrapper-secondary">
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={Symbol1} alt="n icon" className="icon" />
              <h3>AWESOME HEADER</h3>
              <p>
                Handshake is the world's most powerful peer-to-peer root naming
                system. Time to give Handshake the attention it deserves.
              </p>
            </div>
            <div className="card">
              <img src={Symbol2} alt="h icon" className="icon" />
              <h3>AWESOME HEADER</h3>
              <p>
                Handshake is the world's most powerful peer-to-peer root naming
                system. Time to give Handshake the attention it deserves and
                make it even better.
              </p>
            </div>
            <div className="card">
              <img src={Symbol3} alt="s icon" className="icon" />
              <h3>AWESOME HEADER</h3>
              <p>
                Handshake is the world's most powerful peer-to-peer root naming
                system. Time to give Handshake the attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

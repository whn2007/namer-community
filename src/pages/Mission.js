import React from "react";
import Symbol1 from "../assets/symbol1.png";
import Symbol2 from "../assets/symbol2.png";
import Symbol3 from "../assets/symbol3.png";
import HSymbol from "../assets/H.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="mission">
      <div className="heading">
        <h1>
          OUR <span>MISSION</span>
        </h1>
      </div>
      <div className="container text-intro text-intro-simple text-intro-with-image">
        <div className="content">
          <h3>STRIKING GOLD</h3>
          <p>
            Striking gold is unimportant, but if we don't strike gold, Handshake
            will be unable to sustain itself and will die. So, in order to avoid
            that gut-wrenching alternate reality, we will make our best and
            honest effort, not be distracted by all the inevitable wen moon and
            green lambo sentiments, and just focus on doing things with
            integrity. — <b> johnnywu/</b>
          </p>
        </div>
        <div className="image halfmoon">
          <div className="transform-right">FOCUS &amp; INTEGRITY</div>
        </div>
      </div>

      <div className="container text-intro text-intro-simple text-intro-with-image mb-0">
        <div className="image swoosh">
          <div className="transform-left">
            Sustainability, Coin Distribution, Name Reservations,...
          </div>
        </div>
        <div className="content">
          <h3>PREPARING A HARD FORK</h3>
          <p>
            We think of the last 2 years as Handshake's beta stage, and we're
            prepping for a January 1st, 2024, true, mainnet launch. We will work
            on and implement the solutions to all the learnings we've gathered
            for the last 2 years.
          </p>
        </div>
      </div>

      <div className="text-intro text-intro-center">
        <img src={HSymbol} className="icon" alt="icon" />
        <h2>People who currently trust johnnywu/ to lead</h2>
        <p>
          <b>Matthew Zipkin</b>, no introduction needed
          <br />
          <b>Andrew Lee (CEO, purse.io)</b>, creator of Handshake
          <br />
          <b>Richard Kirkendall</b>, CEO of Namecheap
          <br />
          <b>Chris Moos</b>, CTO of Namebase
          <br />
          <b>Kyokan</b>, creator of Bob Wallet
          <br />
          <b>Mike Michelini</b>, founder of skyinclude/
          <br />
          <b>Ken Sheng</b>, CTO of Goldshell
          <br />
          <b>Mike Carson</b>, founder of Impervious
          <br />
          <b>Tom Barrett</b>, founder of Encirca
          <br />
          <b>Kiba Gateaux</b>, founder of HNS Development fund and XNHNS
          <br />
          <b>Jehan Chu</b>, founder of dWeb Foundation
          <br />
          <b>Brandon Dees</b>, first mod of NamerCommuntiy/
          <br />
          <b>Joseph Poon</b>, creator of Handshake
          <br />
          <b>Tieshun Roquerre</b>, founder of Namebase
          <br />
          <b>Jothan Frakes</b>, founder of NamesCon
          <br />
          <br />
          <i>
            Most of these individuals do NOT endorse any facet of Johnnys plan
            but trust him 100%.
          </i>
        </p>
      </div>

      <div className="bg-wrapper-secondary">
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={Symbol2} alt="n icon" className="icon" />
              <h3>DIRECTORS</h3>
              <p>
                While anyone can be a "Director of Handshake", we ask Namers in
                the NamerCommunity/ to reserve calling themselves Directors
                until they've already taken the lead on an effort that's
                directly contributing to the growth of Handshake.
              </p>
            </div>
            <div className="card">
              <img src={Symbol1} alt="h icon" className="icon" />
              <h3>CREATORS</h3>
              <p>
                Creators are Directors who have created something we can use
                with our Handshake names. In other words, they're responsible
                for the literal existence of Handshake.
              </p>
            </div>
            <div className="card">
              <img src={Symbol3} alt="s icon" className="icon" />
              <h3>FOUNDERS</h3>
              <p>
                16 Directors working Full-Time on Handshake. A dedicated
                community to give Handshake the love & attention it deserves.
              </p>
              <Link to = "/about">
                <button>Meet the Founders {">"}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

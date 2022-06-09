import React from 'react'
import { Link } from 'react-router-dom'
import firstBlockImage from '../assets/firstBlock.png'
import secondBlockImage from '../assets/secondBlock.png'
import security from '../assets/security.png'
import HSymbol from '../assets/h.png'
import Symbol1 from '../assets/symbol1.png'
import Symbol2 from '../assets/symbol2.png'
import Symbol3 from '../assets/symbol3.png'
import HomeBottom from '../assets/homeBottom.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div
        className="firstBlock"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(${firstBlockImage})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="firstContainer">
          <h1>
            A HANDSHAKE IMPROVEMENT <br /> PROPOSAL TO FIX
          </h1>
          <h1>TOKEN ECONOMICS</h1>
        </div>

        <div className="secondContainer">
          <div className="firstHalf">
            <h1>Change is coming</h1>
            <h2>
              Supported by the <br /> Handshake founders
            </h2>
            <p>
              Handshake is the world's most powerful <br />
              peer to peer root naming system.
            </p>
            <Link to="/mission">
              <button>Get Involved {'>'}</button>
            </Link>
          </div>
          <div className="secondHalf">
            <h1>
              PEER-TO-PEER <br /> ROOT NAMING <br /> SYSTEM
            </h1>
          </div>
        </div>

        <div className="thirdContainer">
          <img src={HSymbol} alt="icon" />
          <h1>
            Time to give Handshake <br /> the attention it deserves
          </h1>
          <h2>
            Handshake is the world's most powerful peer-
            <br />
            to-peer root naming system.
          </h2>
          <Link to="/mission">
            <button>Get Involved {'>'}</button>
          </Link>
        </div>
      </div>

      <div
        className="secondBlock"
        style={{
          backgroundColor: 'black',
          backgroundRepeat: 'no-repeat'
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
          <button>Get Involved {'>'}</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

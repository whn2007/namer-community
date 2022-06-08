import React from 'react'
import {Link} from "react-router-dom"
import firstBlockImage from "../assets/firstBlock.png"
import "../styles/Home.css"


function Home() {
  return (
    <div className='firstBlock' 
      style={{
      backgroundColor: 'black',
      backgroundImage: `url(${firstBlockImage})`,
      backgroundRepeat: "no-repeat",
      }}>
        <div className='firstBlockContainer'>
          <h1>A HANDSHAKE IMPROVEMENT <br/> PROPOSAL TO FIX</h1>
          <h1>TOKEN ECONOMICS</h1>
        </div>

        <div className = "firstBlockSecondContainer">
          <div className='firstHalf'>
            <h1>Change is coming</h1>
            <h2>Supported by the <br/> Handshake founders</h2>
            <p>Handshake is the world's most powerful <br/>
             peer to peer root naming system.</p>
            <Link to = "/mission">
              <button>Get Involved {'>'}</button>
            </Link>
          </div>
          <div className='secondHalf'>
            <h1>PEER-TO-PEER <br/> ROOT NAMING <br/> SYSTEM</h1>
          </div>
        </div>

        <div className='firstBlockThirdContainer'>

        </div>
    </div>

  )
}

export default Home
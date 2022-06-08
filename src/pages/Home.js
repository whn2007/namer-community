import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/namebaselogo.png"
import "../styles/Home.css"


function Home() {
  return (
    <div className='home' 
      style={{backgroundImage: `url(${BannerImage})`,
      backgroundRepeat: "no-repeat",
      }}>
        <div className='headerContainer'>
          <Link to = "/mission">
            <button>OUR MISSION</button>
          </Link>
        </div>
    </div>
  )
}

export default Home
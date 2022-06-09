import React from 'react'
import {AboutList} from "../helpers/AboutList"
import AboutItem from "../components/AboutItem"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <div className='aboutHeader'>
          <h1>THE FOUNDERS</h1>
          <h2>Handshake is the world's most powerful
            peer-to-peer root naming system.</h2>
        </div>
        <div className='aboutList'>
            {AboutList.map((aboutItem, key) => {
                return <AboutItem
                  key = {key}
                  image={aboutItem.image}
                  name={aboutItem.name} 
                  description={aboutItem.description} 
                  link={aboutItem.link} 
                  />
            })}
        </div>
    </div>
  )
}

export default About
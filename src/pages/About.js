import React from 'react'
import {MenuList} from "../helpers/MenuList"
import MenuItem from "../components/MenuItem"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <h1 className='aboutTitle'>Our Team</h1>
        <div className='aboutList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem
                  key = {key}
                  image={menuItem.image}
                  name={menuItem.name} 
                  description={menuItem.description} 
                  link={menuItem.link} 
                  />
            })}
        </div>
    </div>
  )
}

export default About
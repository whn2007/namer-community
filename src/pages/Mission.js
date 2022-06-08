import React from 'react'
import {MenuList} from "../helpers/MenuList"
import MenuItem from "../components/MenuItem"
import "../styles/Mission.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>My Projects</h1>
        <div className='menuList'>
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

export default Menu
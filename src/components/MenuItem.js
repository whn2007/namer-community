import React from 'react'

function MenuItem({image, name, description, link}) {
  return (
    <a className='menuItem' href = {link} target = "_blank">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{description}</p>
    </a>
  )
}

export default MenuItem
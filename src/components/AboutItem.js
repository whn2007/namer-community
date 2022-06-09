import React from 'react'
import ProfileBG from '../assets/profileBG.png'
import TwitterIcon from '@material-ui/icons/Twitter'

function AboutItem({ image, name, description, link }) {
  return (
    <a className="aboutItem" href={link} target="_blank" rel="noreferrer">
      <img src={ProfileBG} alt="profile-bg"></img>
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <p>{description}</p>
      <TwitterIcon />
    </a>
  )
}

export default AboutItem

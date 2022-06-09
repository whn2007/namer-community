import React from "react";
import ProfileBG from "../assets/bg-profile.jpeg";
import TwitterIcon from "@material-ui/icons/Twitter";

function AboutItem({ image, name, description, link }) {
  return (
    <div className="aboutItem">
      <div className="profileBackground"
      style = {{backgroundImage: `url(${ProfileBG})`}} />
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <p>{description}</p>
      <a  href={link} target="_blank" rel="noreferrer"><TwitterIcon /></a>
    </div>
  );
}

export default AboutItem;

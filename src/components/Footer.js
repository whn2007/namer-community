import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="" target="_blank">
          <TwitterIcon />
        </a>
        <a href="" target="_blank">
          <InstagramIcon />
        </a>
        <a href="" target="_blank">
          <YouTubeIcon />
        </a>
      </div>
      <p>
        &copy; 2022 <strong>Namer Community</strong>
      </p>
    </div>
  );
}

export default Footer;

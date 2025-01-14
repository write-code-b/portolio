import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import profile from "../assets/images/profile.jpg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/write-code-b" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://github.com/slow-wave" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
          <h1>최민지</h1>
          <p>프론트엔드 개발자</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/write-code-b" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
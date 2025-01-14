import React from "react";
import mock01 from '../assets/images/mock01.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a href="https://conan-card.netlify.app" target="_blank" rel="noreferrer">
              <img src={mock01} className="zoom" alt="thumbnail" width="40%" />
            </a>
            <a href="https://github.com/write-code-b" target="_blank" rel="noreferrer">
              <h2>Conan TCG</h2>
            </a>
            <p>한국어로 번역한 코난 카드 정보를 확인할 수 있는 웹페이지.</p>
          </div>
        </div>
      </div>
    );
}

export default Project;
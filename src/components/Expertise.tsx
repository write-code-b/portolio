import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = ["React.js", "JavaScript", "HTML5", "CSS3", "SCSS"];

const labelsSecond = ["Express.js", "Node.js", "MySQL", "Postman", "Git"];

const labelsThird = ["python", "Pandas", "Selenium"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>프론트엔드 개발</h3>
            <p>React를 활용한 프론트엔드 개발을 합니다. 빠르게 실행하고 적용하며 배우는 것을 좋아하기 때문에 새로운 기술을 습득하는 것에도 자신있습니다.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>백엔드 개발</h3>
            <p>javascript 풀스택 개발을 좋아합니다.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>데이터 시각화</h3>
            <p>융합소프트웨어학부 전공 과정 중 데이터를 처리하고 시각화하는 캡스톤 프로젝트를 진행했습니다. 빅데이터분석기사 자격증을 보유하고 있습니다.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

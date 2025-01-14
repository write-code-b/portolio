import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }} contentArrowStyle={{ borderRight: "7px solid  white" }} date="2023.12 - present" iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">퍼블리싱, JS 개발</h3>
            <h4 className="vertical-timeline-element-subtitle">토브소프트</h4>
            <p>CSS Animation 속성을 활용해 인터랙션을 구현하고 Vanilla JS로 간단한 로직을 구현했습니다.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="2023.04 - 2023.07" iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">풀스택 개발</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>커머스 웹페이지와 백오피스를 자바스크립트 풀스택으로 개발했습니다.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

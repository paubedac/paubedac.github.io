import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineItem from "./TimelineItem";
import { timelineData } from "../data/timeline";
import "../assets/styles/Timeline.scss";

const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timelineData.map((item) => (
            <TimelineItem
              key={item.key}
              date={item.date}
              company={item.company}
              role={item.role}
              location={item.location}
              description={item.description}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;

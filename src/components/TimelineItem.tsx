import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

interface TimelineItemProps {
  date: string;
  company: string;
  role: string;
  location: string;
  description: string;
}

const TimelineItem = ({
  date,
  company,
  role,
  location,
  description,
}: TimelineItemProps) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      date={date}
      iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      <h3 className="vertical-timeline-element-title">{role}</h3>
      <h3 className="vertical-timeline-element-subtitle">{company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;

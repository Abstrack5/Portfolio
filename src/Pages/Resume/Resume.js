import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";

import "./Resume.css";

function Resume() {
  return (
    <div className="ResumeMainContainer">
      <h1 className="text-center">&lt;Resume /&gt;</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Critical Care Technician @University of Miami
          </h4>
          {/* <h4 className="vertical-timeline-element-subtitle">University of Miami</h4> */}
          <p>job description here</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Emergency Medical Technician @American Medical Response Ambulance
          </h4>
          {/* <h4 className="vertical-timeline-element-subtitle">American Medical Response Ambulance</h4> */}
          <p>job description here</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Chef de Parti @Ritz Carlton, Key Biscayne
          </h4>
          {/* <h4 className="vertical-timeline-element-subtitle">Ritz Carlton, Key Biscayne</h4> */}
          <p>job description here</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UM Coding Bootcamp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Full Stack Web Development
          </h4>
          <p>Course description</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2018 - 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Miami Dade College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EMS/Fire Academy
          </h4>
          <p>Course description</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2012 - 2014"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Le Cordon Bleu</h3>
          <h4 className="vertical-timeline-element-subtitle">Culinary Arts</h4>
          <p>Course description</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Resume;

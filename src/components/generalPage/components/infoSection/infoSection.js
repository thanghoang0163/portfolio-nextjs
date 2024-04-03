import Button from "~/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { infos } from "./index";

import "./infoSection.css";

export default function InfoSection() {
  return (
    <ul className="info-section">
      {infos.map((info, index) => {
        return (
          <li className="info-section__item" key={index}>
            <FontAwesomeIcon className="info-section__icon" icon={info.icon} />
            <div className="info-text-container">
              <span className="info-title">{info.title}</span>
              <span className="info-text">{info.text}</span>
            </div>
          </li>
        );
      })}
      <li className="info-section__item">
        <Button className="info-download-btn" textBtn={"Download Resume"}>
          <FontAwesomeIcon className="info-download-icon" icon={faCircleDown} />
        </Button>
      </li>
    </ul>
  );
}

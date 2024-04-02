import Button from "~/components/button/button";
import { infos } from "./index";

import "./infoSection.css";

export default function InfoSection() {
  return (
    <ul className="info-section">
      {infos.map((info, index) => {
        const Icon = info.icon;

        return (
          <li className="info-section-item" key={index}>
            <Icon />
            <div className="info-text-container">
              <span className="info-title">{info.title}</span>
              <span className="info-text">{info.text}</span>
            </div>
          </li>
        );
      })}
      <li className="info-section-item">
        <Button className="info-download-btn" textBtn={"Download  Resume"}>
          <i className="fa-regular fa-circle-down"></i>
        </Button>
      </li>
    </ul>
  );
}

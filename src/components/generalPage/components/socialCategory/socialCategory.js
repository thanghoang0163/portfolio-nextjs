import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "./index";

import "./socialCategory.css";

export default function SocialCategory() {
  return (
    <ul className="social-category">
      {socialIcons.map((icon, index) => {
        return (
          <li className="social-category__item" key={index}>
            <FontAwesomeIcon icon={icon} />
          </li>
        );
      })}
    </ul>
  );
}

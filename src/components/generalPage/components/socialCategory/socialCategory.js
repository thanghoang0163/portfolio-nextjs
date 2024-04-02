import { socialIcons } from "./index";

import "./socialCategory.css";

export default function SocialCategory() {
  return (
    <ul className="social-category">
      {socialIcons.map((Item, index) => {
        return (
          <li className="social-category-item" key={index}>
            <Item />
          </li>
        );
      })}
    </ul>
  );
}

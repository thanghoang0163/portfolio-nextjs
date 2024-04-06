import Image from "~/components/image/image";
import GeneralPage from "~/components/generalPage/generalPage";
import Category from "./category/category";
import { projects } from "./index";

import "./page.css";

export default function Resume() {
  return (
    <GeneralPage title={"Portfolio"}>
      <Category />
      <ul className="work__list">
        {projects.map((project, index) => (
          <li className="work__item" key={index}>
            <Image className="work__image" src={project.image} alt="" />
            <span className="work__title">{project.title}</span>
            <span className="work__text">{project.text}</span>
          </li>
        ))}
      </ul>
    </GeneralPage>
  );
}

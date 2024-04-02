"use client";

import Image from "~/components/image/image";
import GeneralPage from "~/components/generalPage/generalPage";
import Category from "./category/category";
import { projects } from "./index";

import "./page.css";

export default function Resume() {
  return (
    <GeneralPage title={"Portfolio"}>
      <Category />
      <ul className="work-list">
        {projects.map((project, index) => (
          <li className="work-item" key={index}>
            <Image className="work-image" src={project.image} alt="" />
            <span className="work-title">{project.title}</span>
            <span className="work-text">{project.text}</span>
          </li>
        ))}
      </ul>
    </GeneralPage>
  );
}

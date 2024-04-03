"use client";

import Button from "~/components/button/button";
import Title from "~/components/title/title";
import Input from "~/components/input/input";
import GeneralPage from "~/components/generalPage/generalPage";
import { infos } from "./index";

import "./page.css";

export default function Resume() {
  return (
    <GeneralPage title={"Contact"}>
      <ul className="contact__list">
        {infos.map((info, index) => {
          const Icon = info.icon;

          return (
            <li className="contact__item" key={index}>
              <Title className="contact__title" title={info.title}>
                <Icon />
              </Title>
              <span className="contact__text">{info.text}</span>
            </li>
          );
        })}
      </ul>
      <div className="contact__input-container">
        <span className="contact__big-text">
          I am always open to discussing{" "}
          <span>new projects, opportunities in tech world, partnerships</span>{" "}
          and more so <span>mentorship.</span>
        </span>
        <Input className="contact__input" title={"Name:"} />
        <Input className="contact__input" title={"Email:"} />
        <Input className="contact__input" title={"Message:"} />
        <Button className="contact__submit-btn" textBtn={"Submit"} />
      </div>
    </GeneralPage>
  );
}

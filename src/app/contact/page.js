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
      <ul className="contact-list">
        {infos.map((info, index) => {
          const Icon = info.icon;

          return (
            <li className="contact-item" key={index}>
              <Title className="contact-title" title={info.title}>
                <Icon />
              </Title>
              <span className="contact-text">{info.text}</span>
            </li>
          );
        })}
      </ul>
      <div className="contact-input-container">
        <span className="contact-big-text">
          I am always open to discussing{" "}
          <span>new projects, opportunities in tech world, partnerships</span>{" "}
          and more so <span>mentorship.</span>
        </span>
        <Input className="contact-input" title={"Name:"} />
        <Input className="contact-input" title={"Email:"} />
        <Input className="contact-input" title={"Message:"} />
        <Button className="contact-submit-btn" textBtn={"Submit"} />
      </div>
    </GeneralPage>
  );
}

import clsx from "clsx";
import Title from "~/components/title/title";
import GeneralPage from "~/components/generalPage/generalPage";
import { education, experience, workSkills, softSkills } from "./index";

import "./page.css";

export default function Resume() {
  const handleIcon = (icon) => {
    const Icon = icon;

    return <Icon />;
  };

  const handleSkills = (skills, className) => (
    <div>
      <span className="skill__title">{skills.title}</span>
      <ul className="skill__list">
        {skills.list.map((skill, index) => (
          <li className={clsx("skill__item", className)} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <GeneralPage title={"Resume"}>
      <ul className="resume__list experience__list">
        <li className="resume__item">
          <Title title={education.title}>{handleIcon(education.icon)}</Title>
          <ul>
            {education.experience.map((item, index) => (
              <li className="experience__item" key={index}>
                <span>{item.time}</span>
                <span>{item.major}</span>
                <span>{item.school}</span>
              </li>
            ))}
          </ul>
        </li>
        <li className="resume__item">
          <Title title={experience.title}>{handleIcon(experience.icon)}</Title>
          <ul>
            {experience.experience.map((item, index) => (
              <li className="experience__item" key={index}>
                <span>{item.time}</span>
                <span>{item.job}</span>
                <span>{item.company}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <ul className="resume__list">
        {handleSkills(workSkills)}
        {handleSkills(softSkills)}
      </ul>
    </GeneralPage>
  );
}

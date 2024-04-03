import Title from "~/components/title/title";
import GeneralPage from "~/components/generalPage/generalPage";
import { descriptions } from "./index";

import "./page.css";

export default function Home() {
  return (
    <GeneralPage title={"About me"}>
      <div className="home__description">
        Hello there! I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </div>
      <div className="general-title home__big-title">What I do!</div>
      <ul className="home__list">
        {descriptions.map((item, index) => {
          const Icon = item.icon;

          return (
            <li className="home__item" key={index}>
              <Title className="home__title" title={item.title}>
                <Icon />
              </Title>
              <span className="home__item-description">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </GeneralPage>
  );
}

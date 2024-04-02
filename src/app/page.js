import Title from "~/components/title/title";
import GeneralPage from "~/components/generalPage/generalPage";
import { descriptions } from "./index";

import "./page.css";

export default function Home() {
  return (
    <GeneralPage title={"About me"}>
      <div className="home-description">
        Hello there! I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </div>
      <div className="general-title home-big-title">What I do!</div>
      <ul className="home-list">
        {descriptions.map((item, index) => {
          const Icon = item.icon;

          return (
            <li className="home-item" key={index}>
              <Title className="home-title" title={item.title}>
                <Icon />
              </Title>
              <spam className="home-item-description">{item.text}</spam>
            </li>
          );
        })}
      </ul>
    </GeneralPage>
  );
}

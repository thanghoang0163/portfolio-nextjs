import Image from "~/components/image/image";
import SocialCategory from "../socialCategory/socialCategory";
import InfoSection from "../infoSection/infoSection";
import Avatar from "~/assets/images/avatar.jpg";

import "./leftSide.css";

export default function LeftSide() {
  return (
    <div className="left-side">
      <Image className="left-side-avatar" src={Avatar} alt="Avatar" />
      <div className="left-side-text-container">
        <span className="left-side-name">Hoang Anh Thang</span>
        <span className="left-side-text">Frontend Developer</span>
      </div>
      <SocialCategory />
      <InfoSection />
    </div>
  );
}

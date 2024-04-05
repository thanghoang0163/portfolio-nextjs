import Image from "~/components/image/image";
import SocialCategory from "../socialCategory/socialCategory";
import InfoSection from "../infoSection/infoSection";
import Avatar from "~/assets/images/avatar.jpg";

import "./leftSide.css";

export default function LeftSide() {
  return (
    <div
      className="left-side bg-white dark:bg-gray-700 dark:text-white"
      data-aos="fade-right"
    >
      <Image className="left-side__avatar" src={Avatar} alt="Avatar" />
      <div className="left-side__text-container">
        <span className="left-side__name">Hoang Anh Thang</span>
        <span className="left-side__text text-blur-text-color dark:text-dark-white">
          Frontend Developer
        </span>
      </div>
      <SocialCategory />
      <InfoSection />
    </div>
  );
}

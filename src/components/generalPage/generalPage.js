"use client";

import { useState } from "react";
import Image from "~/components/image/image";
import Button from "~/components/button/button";
import Category from "~/components/category/category";
import LeftSide from "./components/leftSide/leftSide";
import GeneralContent from "./components/generalContent/generalContent";
import BeatriceWambui from "~/assets/images/beatrice-wambui.png";

import "./generalPage.css";

export default function GeneralPage({ title, children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleChangeTheme = () =>
    isLightTheme ? setIsLightTheme(false) : setIsLightTheme(true);

  return (
    <main className="general-page">
      <div className="general-page-header">
        <Image
          className="general-page-image"
          src={BeatriceWambui}
          alt="Beatrice Wambui Text"
          priority={true}
        />
        <Button className="general-page-theme-btn" onClick={handleChangeTheme}>
          {isLightTheme ? (
            <i className="fa-regular fa-moon"></i>
          ) : (
            <i className="fa-regular fa-sun"></i>
          )}
        </Button>
      </div>
      <div className="general-page-content">
        <Category />
        <div className="general-page-detail">
          <LeftSide />
          <GeneralContent title={title}>{children}</GeneralContent>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "~/components/image/image";
import Button from "~/components/button/button";
import Category from "~/components/category/category";
import LeftSide from "./components/leftSide/leftSide";
import GeneralContent from "./components/generalContent/generalContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import BeatriceWambui from "~/assets/images/beatrice-wambui.png";

import "./generalPage.css";

export default function GeneralPage({ title, children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleChangeTheme = () =>
    isLightTheme ? setIsLightTheme(false) : setIsLightTheme(true);

  return (
    <main className="general-page">
      <div className="general-page__header">
        <Image
          className="general-page__image"
          src={BeatriceWambui}
          alt="Beatrice Wambui Text"
          priority={true}
        />
        <Button className="general-page__theme-btn" onClick={handleChangeTheme}>
          {isLightTheme ? (
            <FontAwesomeIcon
              className="general-page__theme-icon"
              icon={faMoon}
            />
          ) : (
            <FontAwesomeIcon
              className="general-page__theme-icon"
              icon={faSun}
            />
          )}
        </Button>
      </div>
      <div className="general-page__content">
        <Category />
        <div className="general-page__detail">
          <LeftSide />
          <GeneralContent title={title}>{children}</GeneralContent>
        </div>
      </div>
    </main>
  );
}

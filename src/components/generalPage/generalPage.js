"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
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
  const [theme, setTheme] = useState();

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <main className={clsx("general-page", theme, "dark:bg-slate-800")}>
      <div className="general-page__header">
        <Image
          className="general-page__image"
          src={BeatriceWambui}
          alt="Beatrice Wambui Text"
          priority={true}
        />
        <Button className="general-page__theme-btn" onClick={handleChangeTheme}>
          {theme === "light" ? (
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

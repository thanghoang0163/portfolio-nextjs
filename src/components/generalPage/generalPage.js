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

  const htmlElementClassList = () => document.documentElement.classList;

  const setDarkTheme = () => {
    localStorage.setItem("theme", "dark");
    htmlElementClassList().add("dark");
  };

  const setLightTheme = () => {
    localStorage.setItem("theme", "light");
    htmlElementClassList().remove("dark");
  };

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setDarkTheme();
    } else {
      setTheme("light");
      setLightTheme();
    }
  };

  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        setTheme("dark");
        htmlElementClassList().add("dark");
      } else {
        setTheme("light");
        htmlElementClassList().remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      setDarkTheme();
    } else {
      setTheme("light");
      setLightTheme();
    }
  }, []);

  return (
    <main className={clsx("general-page bg-dark-white", "dark:bg-slate-800")}>
      <div className="general-page__header" data-aos="fade-down">
        <Image
          className="general-page__image"
          src={BeatriceWambui}
          alt="Beatrice Wambui Text"
          priority={true}
        />
        <Button className="general-page__theme-btn" onClick={handleChangeTheme}>
          {theme === "dark" ? (
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
        <Category aos="zoom-in" />
        <div className="general-page__detail">
          <LeftSide />
          <GeneralContent title={title}>{children}</GeneralContent>
        </div>
      </div>
    </main>
  );
}

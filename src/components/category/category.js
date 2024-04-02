"use client";

import { useState } from "react";
import clsx from "clsx";
import { categories } from "./index";

import "./category.css";

export default function Category() {
  const [label, setLabel] = useState(categories[0].label);

  const handleClick = (label) => setLabel(label);

  return (
    <ul className="category">
      {categories.map((category, index) => {
        const Icon = category.icon;

        return (
          <li
            className={clsx(
              "category-item",
              label === category.label && "category-item--activated",
            )}
            onClick={() => handleClick(category.label)}
            key={index}
          >
            <Icon />
            <span className="category-label">{category.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

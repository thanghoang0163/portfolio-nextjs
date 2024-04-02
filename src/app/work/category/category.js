"use client";

import { useState } from "react";
import clsx from "clsx";
import { categories } from "./index";

import "./category.css";

export default function Category() {
  const [item, setItem] = useState(categories[0]);

  const handleItem = (item) => setItem(item);

  return (
    <ul className="work-category">
      {categories.map((category, index) => (
        <li
          className={clsx(
            "work-category-item",
            item === category && "work-category-item--activated",
          )}
          onClick={() => handleItem(category)}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

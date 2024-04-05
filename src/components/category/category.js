"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from "./index";

import "./category.css";

export default function Category({ aos }) {
  const pathName = usePathname();

  return (
    <ul className="category" data-aos={aos}>
      {categories.map((category, index) => {
        return (
          <Link
            className={clsx(
              "category__item",
              pathName === category.href && "category__item--activated",
            )}
            href={category.href}
            key={index}
          >
            <FontAwesomeIcon className="category__icon" icon={category.icon} />
            <span className="category__label">{category.label}</span>
          </Link>
        );
      })}
    </ul>
  );
}

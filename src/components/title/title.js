import clsx from "clsx";

import "./title.css";

export default function Title({ title, children, className }) {
  return (
    <div className={clsx("title-container", className)}>
      {children}
      <span className="title">{title}</span>
    </div>
  );
}

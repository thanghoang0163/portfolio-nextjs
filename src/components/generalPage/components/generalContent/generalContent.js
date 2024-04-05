import "./generalContent.css";
import clsx from "clsx";

export default function GeneralContent({ title, children, className }) {
  return (
    <div className={clsx("general-content", className)} data-aos="fade-left">
      <div className="general-content__header">
        <span className="general-content__title">{title}</span>
        <div className="general-content__line"></div>
      </div>
      {children}
    </div>
  );
}

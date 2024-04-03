import "./generalContent.css";

export default function GeneralContent({ title, children }) {
  return (
    <div className="general-content">
      <div className="general-content__header">
        <span className="general-content__title">{title}</span>
        <div className="general-content__line"></div>
      </div>
      {children}
    </div>
  );
}

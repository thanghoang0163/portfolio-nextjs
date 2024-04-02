import "./generalContent.css";

export default function GeneralContent({ title, children }) {
  return (
    <div className="general-content">
      <div className="general-content-header">
        <span className="general-content-title">{title}</span>
        <div className="general-content-line"></div>
      </div>
      {children}
    </div>
  );
}

import clsx from "clsx";

import "./input.css";

export default function Input({
  title,
  type = "text",
  placeholder,
  value,
  required = false,
  isDisabled,
  onChange = () => {},
  inputStyles,
  className,
  ...props
}) {
  return (
    <div className={clsx("input-container", className)}>
      <span className="input-title">{title}</span>
      <input
        className={clsx(
          "input",
          inputStyles,
          required ? "input-error-border" : "",
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        {...props}
      />
    </div>
  );
}

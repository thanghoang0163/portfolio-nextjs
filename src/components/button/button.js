import clsx from "clsx";
import Link from "next/link";

import "./button.css";

export default function Button({
  to,
  href,
  textBtn,
  children,
  onClick,
  isDisabled = false,
  isOpenOtherTab = false,
  className,
  textStyles,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };

  //Remove event listener when button is disabled
  if (isDisabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";

    if (isOpenOtherTab) {
      props.target = "_blank";
      props.rel = "noreferrer";
    }
  }

  return (
    <Comp className={clsx("button", className)} {...props}>
      {children}
      {textBtn && (
        <span className={clsx("button__text", textStyles)}>{textBtn}</span>
      )}
    </Comp>
  );
}

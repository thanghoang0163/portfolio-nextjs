"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import NoImage from "~/assets/images/no-image.png";

import "./image.css";

export default function ImageComponent({
  src,
  alt = "",
  fallback: customFallback = NoImage,
  className,
  priority = false,
  ...props
}) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <Image
      className={clsx("image", className)}
      src={fallback || src}
      alt={alt}
      priority={priority}
      {...props}
      onError={handleError}
    />
  );
}

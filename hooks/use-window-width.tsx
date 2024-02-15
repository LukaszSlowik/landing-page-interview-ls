"use client";

import { useEffect, useState } from "react";

function useWindowWidth() {
  const isClient = typeof window === "object";

  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0,
  );

  const [prevWidth, setPrevWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (Math.abs(newWidth - prevWidth) > 50) {
        setWindowWidth(newWidth);
        setPrevWidth(newWidth);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [prevWidth]);

  return { windowWidth };
}

export default useWindowWidth;

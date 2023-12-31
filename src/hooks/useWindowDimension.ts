import { useState, useEffect } from "react";

function getWindowDimensions() {

  if (typeof window !== "undefined") {
    // Client-side-only code
    const { innerWidth: width, innerHeight: height } = window;
  
    return {
      width,
      height,
    } as any ;
  } else {
    return {
      width: 0,
      height: 0,
    } as any ;
  }
  
}

/**
 * @function useWindowDimensions handle resize window
 * @return {width, height} number
 */

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


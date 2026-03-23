"use client";

import { useSplash } from "./SplashContext";
import Nav from "./Nav";

export default function NavWithSplash() {
  const { entered } = useSplash();

  if (!entered) return null;

  return <Nav />;
}

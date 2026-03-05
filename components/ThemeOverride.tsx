"use client";

import { useEffect } from "react";

/**
 * Overrides CSS custom properties on <body> while the component is mounted.
 * When unmounted (user navigates away), restores the original values.
 */
export default function ThemeOverride({
  overrides,
}: {
  overrides: Record<string, string>;
}) {
  useEffect(() => {
    const body = document.body;
    const originals: Record<string, string> = {};

    for (const [key, value] of Object.entries(overrides)) {
      originals[key] = body.style.getPropertyValue(key);
      body.style.setProperty(key, value);
    }

    return () => {
      for (const [key] of Object.entries(overrides)) {
        if (originals[key]) {
          body.style.setProperty(key, originals[key]);
        } else {
          body.style.removeProperty(key);
        }
      }
    };
  }, [overrides]);

  return null;
}

"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

type SplashContextType = {
  entered: boolean;
  enter: () => void;
};

const SplashContext = createContext<SplashContextType>({
  entered: true, // Default to true so SSR doesn't flash splash if we skip it
  enter: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(true); // default true for hydration mapping
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if we've already shown the splash in this session
    const hasEntered = sessionStorage.getItem("splashEntered");
    if (hasEntered === "true") {
      setEntered(true);
    } else {
      setEntered(false); // Enable it only if it's the first time
    }
    setIsReady(true);
  }, []);

  const enter = useCallback(() => {
    setEntered(true);
    sessionStorage.setItem("splashEntered", "true");
  }, []);

  // Avoid hydation mismatch by not changing state logic structurally 
  // before mounting
  if (!isReady) {
    return (
      <SplashContext.Provider value={{ entered: true, enter }}>
        {children}
      </SplashContext.Provider>
    );
  }

  return (
    <SplashContext.Provider value={{ entered, enter }}>
      {children}
    </SplashContext.Provider>
  );
}

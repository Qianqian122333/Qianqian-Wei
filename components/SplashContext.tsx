"use client";

import { createContext, useContext, useState, useCallback } from "react";

type SplashContextType = {
  entered: boolean;
  enter: () => void;
};

const SplashContext = createContext<SplashContextType>({
  entered: false,
  enter: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);
  const enter = useCallback(() => setEntered(true), []);

  return (
    <SplashContext.Provider value={{ entered, enter }}>
      {children}
    </SplashContext.Provider>
  );
}

"use client";

import { useEffect, useState } from "react";

export type HomeMode = "standard" | "console";

const STORAGE_KEY = "entraphy_home_mode";

export function useHomeMode() {
  const [mode, setMode] = useState<HomeMode>("standard");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedMode = window.localStorage.getItem(STORAGE_KEY);
    if (storedMode === "standard" || storedMode === "console") {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  return { mode, setMode };
}

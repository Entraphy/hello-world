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

    try {
      const storedMode = window.localStorage.getItem(STORAGE_KEY);
      if (storedMode === "standard" || storedMode === "console") {
        setMode(storedMode);
      } else {
        setMode("standard");
      }
    } catch {
      setMode("standard");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore storage failures and keep in-memory mode.
    }
  }, [mode]);

  return { mode, setMode };
}

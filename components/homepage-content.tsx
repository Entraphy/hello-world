"use client";

import { useEffect, useState } from "react";

import { ConsoleView } from "@/components/home/console-view";
import { HeroHeader } from "@/components/home/hero-header";
import { StandardView } from "@/components/home/standard-view";
import { PageWrap } from "@/components/ui";
import { useHomeMode } from "@/hooks/use-home-mode";

export function HomePageContent() {
  const { mode, setMode } = useHomeMode();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(query.matches);

    syncMotion();
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", syncMotion);

      return () => query.removeEventListener("change", syncMotion);
    }

    query.addListener(syncMotion);

    return () => query.removeListener(syncMotion);
  }, []);

  return (
    <PageWrap>
      <HeroHeader mode={mode} setMode={setMode} />

      {mode === "standard" ? (
        <>
          <div className="mt-6 rounded-xl border border-line/45 bg-fg/[0.02] px-5 py-4">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
            <p className="mt-1 text-sm text-muted">
              Trust Field Status: <span className="font-semibold text-fg">Stable</span>
            </p>
          </div>
          <StandardView />
        </>
      ) : (
        <ConsoleView reducedMotion={reducedMotion} />
      )}
    </PageWrap>
  );
}

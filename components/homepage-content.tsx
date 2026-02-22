"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";

import { ConsoleView } from "@/components/home/console-view";
import { ConstraintChips } from "@/components/home/constraint-chips";
import { HeroHeader } from "@/components/home/hero-header";
import { initialTrustFieldContext, resolveTrustFieldState, trustFieldReducer } from "@/components/home/trust-field-state";
import { StandardView } from "@/components/home/standard-view";
import { PageWrap } from "@/components/ui";
import { useHomeMode } from "@/hooks/use-home-mode";

export function HomePageContent() {
  const { mode, setMode } = useHomeMode();
  const [reducedMotion, setReducedMotion] = useState(false);
  const chamberRef = useRef<HTMLDivElement | null>(null);
  const [consoleVisible, setConsoleVisible] = useState(mode === "console");
  const [consoleFading, setConsoleFading] = useState(false);
  const [trustFieldContext, dispatchTrustField] = useReducer(trustFieldReducer, {
    ...initialTrustFieldContext,
    mode
  });

  const trustFieldState = useMemo(() => resolveTrustFieldState(trustFieldContext), [trustFieldContext]);

  useEffect(() => {
    dispatchTrustField({ type: "MODE_UPDATED", mode });
  }, [mode]);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncScrollDepth = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const depth = Math.min(window.scrollY / maxScroll, 1);

      dispatchTrustField({ type: "SCROLL_UPDATED", depth });
    };

    syncScrollDepth();
    window.addEventListener("scroll", syncScrollDepth, { passive: true });
    window.addEventListener("resize", syncScrollDepth);

    return () => {
      window.removeEventListener("scroll", syncScrollDepth);
      window.removeEventListener("resize", syncScrollDepth);
    };
  }, []);

  useEffect(() => {
    const chamber = chamberRef.current;

    if (!chamber || typeof window === "undefined") {
      return;
    }

    const syncDepthCenter = (x: number, y: number) => {
      const rect = chamber.getBoundingClientRect();
      const ratioX = ((x - rect.left) / Math.max(rect.width, 1)) * 100;
      const ratioY = ((y - rect.top) / Math.max(rect.height, 1)) * 100;

      const clampedX = Math.min(Math.max(ratioX, 10), 90);
      const clampedY = Math.min(Math.max(ratioY, 10), 90);

      chamber.style.setProperty("--depth-x", `${clampedX}%`);
      chamber.style.setProperty("--depth-y", `${clampedY}%`);
    };

    const handleMove = (event: MouseEvent) => syncDepthCenter(event.clientX, event.clientY);
    const handleResize = () => syncDepthCenter(window.innerWidth / 2, window.innerHeight / 2);

    handleResize();
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    if (mode === "console") {
      setConsoleVisible(true);
      setConsoleFading(false);
      return;
    }

    if (!consoleVisible) {
      return;
    }

    setConsoleFading(true);
    const fadeTimer = window.setTimeout(() => {
      setConsoleVisible(false);
      setConsoleFading(false);
    }, 300);

    return () => window.clearTimeout(fadeTimer);
  }, [consoleVisible, mode]);


  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleDoctrineHash = () => {
      if (window.location.hash !== "#doctrine") {
        return;
      }

      if (mode !== "standard") {
        setMode("standard");
      }

      window.requestAnimationFrame(() => {
        document.getElementById("doctrine-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    handleDoctrineHash();
    window.addEventListener("hashchange", handleDoctrineHash);

    return () => window.removeEventListener("hashchange", handleDoctrineHash);
  }, [mode, setMode]);

  const indicatorOpacityClass =
    trustFieldState === "calibrating"
      ? "opacity-45"
      : trustFieldState === "stable"
        ? "opacity-70"
        : trustFieldState === "inspecting"
          ? "opacity-80"
          : trustFieldState === "mapping"
            ? "opacity-85"
            : "opacity-100";

  const statusLabel = `${trustFieldState.slice(0, 1).toUpperCase()}${trustFieldState.slice(1)}`;

  const handlePanelChange = useCallback((panel: "understand" | "inspect" | "architecture" | "proof" | "adoption" | "coverage") => {
    dispatchTrustField({ type: "PANEL_UPDATED", panel });
  }, []);

  return (
    <PageWrap>
      <span id="doctrine" className="sr-only" />
      <div ref={chamberRef} className="depth-chamber control-grid">
        <div className="relative">
          <span className={`pointer-events-none absolute top-3 right-3 z-20 h-2 w-2 rounded-full bg-fg transition-opacity ${indicatorOpacityClass}`} />
          <HeroHeader mode={mode} setMode={setMode} trustFieldState={trustFieldState} reducedMotion={reducedMotion} />
        </div>
        {mode === "standard" ? (
          <section className="depth-panel border-l border-line/65 bg-fg/[0.015] px-8 py-10 md:px-12 md:py-12">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">Category Definition</p>
            <h2 className="mt-4 max-w-4xl text-2xl leading-tight font-semibold tracking-tight md:text-3xl">
              Reality-Bound Systems are systems where consequential action is impossible unless verification is satisfied at the moment of
              decision.
            </h2>
            <ConstraintChips authority="unknown" policy="unknown" time="unknown" className="mt-5" />
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-muted md:text-base">
              <p>Consequence is gated by authority, policy, and time.</p>
              <p>Proof is emitted with consequence.</p>
              <p>Trust follows verification.</p>
            </div>
          </section>
        ) : null}

        <div className="system-anchor-line" aria-hidden />

        <div
          role="tabpanel"
          id="home-standard-view"
          aria-labelledby="home-tab-standard"
          hidden={mode !== "standard"}
          aria-hidden={mode !== "standard"}
          className="space-y-6"
        >
          <div className="depth-panel rounded-xl border border-line/45 bg-fg/[0.02] px-6 py-5">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">System Status</p>
            <p className="mt-1 text-sm text-muted">
              Trust Field Status: <span className="font-semibold text-fg">{statusLabel}</span>
            </p>
          </div>

          <div className="system-anchor-line" aria-hidden />
          <StandardView />
        </div>

        <div
          role="tabpanel"
          id="home-console-view"
          aria-labelledby="home-tab-console"
          hidden={!consoleVisible}
          aria-hidden={!consoleVisible}
          className={`transition-opacity duration-300 ${mode === "console" ? "opacity-100" : consoleFading ? "opacity-60" : "opacity-0"}`}
        >
          <div className="system-anchor-line" aria-hidden />
          <ConsoleView
            reducedMotion={reducedMotion}
            trustFieldState={trustFieldState}
            onPanelChange={handlePanelChange}
            isActive={mode === "console"}
          />
        </div>
      </div>
    </PageWrap>
  );
}

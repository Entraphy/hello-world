"use client";

import { useEffect, useState } from "react";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import { PivotRing } from "@/components/pivot-ring";
import { TriadModel } from "@/components/triad-model";
import { PageWrap, PrimaryButton } from "@/components/ui";

type Mode = "idle" | "pivot" | "model" | "category" | "pause" | "cta";

type Drift = { far: number; mid: number; near: number };

const modeBySection: Record<string, Mode> = {
  pivot: "pivot",
  model: "model",
  category: "category",
  pause: "pause",
  cta: "cta"
};

const sectionCueClasses = "mb-9 h-px w-20 bg-line/65";

export function HomePageContent() {
  const [mode, setMode] = useState<Mode>("idle");
  const [drift, setDrift] = useState<Drift>({ far: 0, mid: 0, near: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(query.matches);

    syncMotion();
    query.addEventListener("change", syncMotion);

    return () => query.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const sectionIds = Object.keys(modeBySection);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    const intersectionRatios = new Map<string, number>();

    sections.forEach((section) => {
      intersectionRatios.set(section.id, 0);
    });

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectionRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const [activeSectionId, highestRatio] = Array.from(intersectionRatios.entries()).reduce<[string | null, number]>(
          (currentHighest, [id, ratio]) => {
            if (ratio > currentHighest[1]) {
              return [id, ratio];
            }

            return currentHighest;
          },
          [null, 0]
        );

        if (!activeSectionId || highestRatio === 0) {
          setMode("idle");
          return;
        }

        setMode(modeBySection[activeSectionId] ?? "idle");
      },
      {
        rootMargin: "-28% 0px -36% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setDrift({ far: 0, mid: 0, near: 0 });
      return;
    }

    let frame = 0;
    const update = () => {
      const limit = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / limit, 0), 1);

      setDrift({
        far: progress * 9,
        mid: progress * 5,
        near: progress * 3
      });
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  return (
    <PageWrap>
      <section className="relative flex min-h-[84vh] items-center overflow-hidden py-[92px] md:min-h-[92vh] md:py-[140px]">
        <ConstraintFieldBackground mode={mode} drift={drift} reducedMotion={reducedMotion} />

        <div className="w-full -translate-y-6">
          <h1 className="max-w-6xl text-[56px] leading-[0.92] font-semibold tracking-tight sm:text-[66px] md:text-[84px] lg:text-[96px]">
            <span className="block">MACHINES NOW DECIDE</span>
            <span className="mt-4 block text-[40px] leading-[1.02] sm:text-[44px] md:text-[48px] lg:text-[52px]">IN ZERO TIME</span>
          </h1>

          <div className="mt-10 space-y-6">
            <p className="text-lg text-muted md:text-[22px]">Across zero distance.</p>
            <p className="text-center text-[40px] font-semibold tracking-[0.14em] text-fg uppercase md:text-[56px] lg:text-[62px]">
              REALITY-BOUND SYSTEMS
            </p>
            <p className="text-[30px] font-semibold tracking-[0.14em] text-fg/85 md:text-[38px]">Entraphy</p>
            <p className="text-sm leading-relaxed text-muted/90 uppercase">NOTHING IS TRUSTED UNTIL IT IS PROVEN</p>
          </div>
        </div>
      </section>

      <section id="pivot" className="py-[140px] md:py-[210px]">
        <div className={sectionCueClasses} aria-hidden />
        <div className="relative inline-block">
          <PivotRing />
          <h2 className="text-[48px] leading-[0.96] font-semibold tracking-tight md:text-[70px] lg:text-[80px]">
            <span className="block">The Failure</span>
            <span className="block">Was Structural</span>
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-7 text-lg leading-relaxed text-muted">
          <p>We treated trust as identity or configuration. Not as a condition of consequence.</p>
          <p>Autonomous systems act before review. Governance must precede consequence.</p>
        </div>
      </section>

      <section id="category" className="py-[112px] md:py-[170px]">
        <div className={sectionCueClasses} aria-hidden />
        <h2 className="text-[42px] font-semibold tracking-tight md:text-[52px] lg:text-[56px]">Reality-Bound Systems</h2>
        <p className="mt-14 max-w-3xl text-lg leading-relaxed text-muted">
          Consequential actions cannot occur unless authority, policy, and temporal constraints are satisfied at decision time, and provable.
        </p>
      </section>

      <section id="pause" className="py-[180px] text-center md:py-[220px]">
        <p className="text-[54px] leading-[0.9] font-semibold tracking-[0.08em] uppercase md:text-[86px]">
          <span className="block">NOTHING IS TRUSTED</span>
          <span className="block">UNTIL IT IS PROVEN</span>
        </p>
      </section>

      <section id="model" className="py-[108px] md:py-[170px]">
        <div className={sectionCueClasses} aria-hidden />
        <h2 className="sr-only">Determine, Bind, Prove</h2>
        <TriadModel />
      </section>

      <section id="cta" className="pt-[110px] pb-[150px] md:pt-[150px] md:pb-[210px]">
        <div className={sectionCueClasses} aria-hidden />
        <p className="mt-6 text-[38px] font-semibold tracking-[0.08em] text-fg uppercase md:text-[52px]">TRUST FOLLOWS VERIFICATION.</p>
        <div className="mt-12">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>
    </PageWrap>
  );
}

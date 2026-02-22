"use client";

import { useEffect, useState } from "react";

import { ConstraintFieldBackground } from "@/components/constraint-field";
import { TriadModel } from "@/components/triad-model";
import { PageWrap, PrimaryButton } from "@/components/ui";

type Mode = "idle" | "pivot" | "model" | "category" | "cta";

const modeBySection: Record<string, Mode> = {
  pivot: "pivot",
  model: "model",
  category: "category",
  cta: "cta"
};

export function HomePageContent() {
  const [mode, setMode] = useState<Mode>("idle");

  useEffect(() => {
    const sectionIds = Object.keys(modeBySection);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          setMode("idle");
          return;
        }

        const id = visibleEntries[0].target.id;
        setMode(modeBySection[id] ?? "idle");
      },
      {
        rootMargin: "-28% 0px -36% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <PageWrap>
      <section className="relative overflow-hidden py-[88px] md:py-[140px]">
        <ConstraintFieldBackground mode={mode} />

        <h1 className="max-w-5xl text-[40px] leading-[1.05] font-semibold tracking-tight sm:text-[44px] md:text-[58px] lg:text-[72px]">
          <span className="block">Machines now decide in zero time.</span>
          <span className="block">Across zero distance.</span>
        </h1>

        <div className="mt-14 space-y-2">
          <p className="text-2xl font-semibold">Entraphy</p>
          <p className="text-sm tracking-[0.16em] text-muted uppercase">Reality-Bound Systems</p>
        </div>

        <p className="mt-8 text-lg leading-relaxed">Nothing is trusted until it is proven.</p>
      </section>

      <section id="pivot" className="py-[112px] md:py-[164px]">
        <div className="relative inline-block">
          <svg aria-hidden viewBox="0 0 300 300" className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-44 w-44 -translate-x-1/2 text-accent/20">
            <circle cx="150" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.24" />
            <path d="M 60 150 A 90 90 0 0 1 240 150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.18" />
          </svg>
          <h2 className="max-w-4xl text-[40px] font-semibold tracking-tight md:text-[50px]">The Failure Was Structural.</h2>
        </div>

        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>We treated trust as identity or configuration, not as a condition of consequence.</p>
          <p>Autonomous systems act before review. Governance must precede consequence.</p>
        </div>
      </section>

      <section id="model" className="py-[88px] md:py-[140px]">
        <h2 className="text-[40px] font-semibold tracking-tight md:text-[50px]">Determine. Bind. Prove.</h2>
        <div className="mt-14">
          <TriadModel />
        </div>
      </section>

      <section id="category" className="py-[88px] md:py-[140px]">
        <h2 className="text-[40px] font-semibold tracking-tight md:text-[50px]">Reality-Bound Systems</h2>
        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-muted">
          Consequential actions cannot occur unless authority, policy, and temporal constraints are satisfied and provable.
        </p>
      </section>

      <section id="cta" className="pt-[88px] pb-[96px] md:pt-[140px] md:pb-[140px]">
        <p className="text-3xl font-semibold tracking-tight md:text-4xl">Trust follows verification.</p>
        <div className="mt-10">
          <PrimaryButton href="/briefing">Executive Briefing</PrimaryButton>
        </div>
      </section>
    </PageWrap>
  );
}

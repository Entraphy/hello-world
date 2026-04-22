import { homeSections, type AnySection } from "@/components/site-data";
import {
  ButtonLink,
  BulletedPanel,
  Hero,
  PageFrame,
  ProductCard,
  ProofConsole,
  SectionFrame,
  StepCard,
  Surface,
  SummaryPanel,
  UseCaseCard
} from "@/components/marketing-primitives";

function HomeValueStrip({ valueStrip }: { valueStrip: AnySection }) {
  return (
    <SectionFrame
      eyebrow={valueStrip.sectionLabel}
      headline={valueStrip.headline}
      subheadline="The company exists to turn trust into evidence, evidence into replay, and replay into verification."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {valueStrip.items.map((item: AnySection) => (
          <Surface key={item.title} className="h-full p-6">
            <h3 className="font-display text-xl leading-tight tracking-[-0.03em] text-fg">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </Surface>
        ))}
      </div>
    </SectionFrame>
  );
}

function NarrativeSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
          {section.paragraphs.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <SummaryPanel title="Closing line" body={section.closingLine} />
      </div>
    </SectionFrame>
  );
}

function RichTextSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
          {section.body.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <SummaryPanel
          title="What this answers"
          items={[
            "What happened?",
            "Was it allowed?",
            "What trust state existed at the moment of action?",
            "Can it be proven later?"
          ]}
        />
      </div>
    </SectionFrame>
  );
}

function ProductFamilySection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-2">
        {section.cards.map((card: AnySection) => (
          <ProductCard key={card.name} name={card.name} tagline={card.tagline} body={card.body} href={card.href} />
        ))}
      </div>
      <p className="mt-5 font-mono text-[10px] tracking-[0.3em] text-signal/70 uppercase">{section.bridgeLine}</p>
    </SectionFrame>
  );
}

function StepsSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-3">
        {section.steps.map((step: AnySection, index: number) => (
          <StepCard key={step.title} index={index} title={step.title} body={step.body} />
        ))}
      </div>
    </SectionFrame>
  );
}

function ArchitectureSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
          <p>{section.body}</p>
        </div>
        <BulletedPanel title="What it keeps" items={section.bullets} />
      </div>
    </SectionFrame>
  );
}

function CompareSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="p-6">
          <p className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">{section.leftLabel}</p>
          <ul className="mt-4 space-y-3">
            {section.leftItems.map((item: string) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Surface>
        <Surface className="p-6">
          <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">{section.rightLabel}</p>
          <ul className="mt-4 space-y-3">
            {section.rightItems.map((item: string) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Surface>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{section.footer}</p>
    </SectionFrame>
  );
}

function UseCasesSection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {section.cards.map((card: AnySection) => (
          <UseCaseCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </SectionFrame>
  );
}

function PhilosophySection(section: AnySection) {
  return (
    <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
          {section.body.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <SummaryPanel title="Design principle" body="Causality before metrics. Proof before trust. Stability before scale." />
      </div>
    </SectionFrame>
  );
}

function FinalCtaSection(section: AnySection) {
  return (
    <Surface className="p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Final call to action</p>
          <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-fg sm:text-4xl lg:text-5xl">
            {section.headline}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{section.subheadline}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={section.primaryCta.href}>{section.primaryCta.label}</ButtonLink>
            <ButtonLink href={section.secondaryCta.href} variant="secondary">
              {section.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <SummaryPanel
          title="What to expect"
          items={[
            "A short walkthrough of the trust proof layer",
            "A view of how evidence is preserved and replayed",
            "A clear discussion of how the system layers into your stack"
          ]}
        />
      </div>
    </Surface>
  );
}

export function HomePageContent() {
  const [hero, valueStrip, founderPrinciple, companyExplainer, productFamily, howItWorks, stackFit, differentiation, useCases, interfacePhilosophy, finalCta] =
    homeSections;

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow={hero.eyebrow}
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          supportingItems={hero.supportingItems}
          visual={<ProofConsole />}
        />
        <HomeValueStrip valueStrip={valueStrip} />
        <NarrativeSection {...founderPrinciple} />
        <RichTextSection {...companyExplainer} />
        <ProductFamilySection {...productFamily} />
        <StepsSection {...howItWorks} />
        <ArchitectureSection {...stackFit} />
        <CompareSection {...differentiation} />
        <UseCasesSection {...useCases} />
        <PhilosophySection {...interfacePhilosophy} />
        <FinalCtaSection {...finalCta} />
      </div>
    </PageFrame>
  );
}

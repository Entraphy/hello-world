import { homeSections, site, trustFlightRecorderName, type AnySection, routeMetadata, routeSlugs } from "@/components/site-data";
import {
  ButtonLink,
  BulletedPanel,
  DocCard,
  Hero,
  PageFrame,
  ProductCard,
  SectionFrame,
  StepCard,
  Surface,
  SummaryPanel,
  UseCaseCard
} from "@/components/marketing-primitives";
import { DemoIntakeForm } from "@/components/demo-intake-form";

function PlatformPage() {
  const hero = site.pages.platform.hero;

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Platform"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore products", href: "/products" }}
          visual={
            <SummaryPanel title="Platform focus" body="Trust proof infrastructure that makes consequential actions auditable, replayable, and independently verifiable." />
          }
        />
        <SectionFrame
          eyebrow="Platform behaviors"
          headline="Auditable at consequence. Replayable after the fact. Verifiable across boundaries."
          subheadline="The platform is designed to preserve proof objects instead of building a raw-data sink."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Auditable</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Entraphy makes consequential actions auditable without demanding centralized raw telemetry.
              </p>
            </Surface>
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Replayable</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                It preserves proof that supports later replay, reconstruction, investigation, and review.
              </p>
            </Surface>
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Verifiable</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Proof can travel across time, boundary, and challenge without depending on the original runtime.
              </p>
            </Surface>
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function ProductsPage() {
  const hero = site.pages.products.hero;
  const products = site.pages.products.products as Array<{ name: string; summary: string }>;

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Products"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore the platform", href: "/platform" }}
          visual={<SummaryPanel title="Company-first architecture" body="The company stays the umbrella brand. Product planes layer in cleanly as separate surfaces." />}
        />
        <SectionFrame
          eyebrow="Product lines"
          headline="The overlay is visible now, even before Phase 2 expands it."
          subheadline={`${trustFlightRecorderName} and Blacksmith are the two product planes the company is building around.`}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                tagline={product.name === "Blacksmith" ? "Continuously harden what must be trusted" : "Prove what happened. Prove it was allowed."}
                body={product.summary}
                href={product.name === "Blacksmith" ? "/products/blacksmith" : "/products/trust-flight-recorder-ai"}
              />
            ))}
          </div>
          <p className="mt-5 font-mono text-[10px] tracking-[0.3em] text-signal/70 uppercase">Blacksmith hardens. Entraphy proves.</p>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function CompanyPage() {
  const hero = site.pages.company.hero;
  const founderPrinciple = homeSections[2];
  const companyExplainer = homeSections[3];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Company"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Read the docs", href: "/docs" }}
          visual={<SummaryPanel title="Company thesis" body="Trust should be earned through evidence, not assumed through narrative." />}
        />
        <SectionFrame eyebrow={founderPrinciple.sectionLabel} headline={founderPrinciple.headline}>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              {founderPrinciple.paragraphs.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <SummaryPanel title="Closing line" body={founderPrinciple.closingLine} />
          </div>
        </SectionFrame>
        <SectionFrame eyebrow={companyExplainer.sectionLabel} headline={companyExplainer.headline}>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              {companyExplainer.body.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <SummaryPanel
              title="What this is"
              body="It is trust proof infrastructure for systems that can no longer rely on assumption."
            />
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function DocsPage() {
  const hero = site.pages.docs.hero;
  const priorityPages = site.pages.docs.priorityPages as string[];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Docs"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore the platform", href: "/platform" }}
          visual={<SummaryPanel title="Start here" body="The docs landing page is organized as plain-English guidance before deep technical detail." />}
        />
        <SectionFrame eyebrow="Priority pages" headline="Read these first">
          <div className="grid gap-4 md:grid-cols-2">
            {priorityPages.map((title, index) => (
              <DocCard key={title} index={index} title={title} />
            ))}
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function HowItWorksPage() {
  const section = homeSections[5];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="How it works"
          headline={section.headline}
          subheadline="The implementation is intentionally simple to understand: observe, evaluate, preserve."
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore products", href: "/products" }}
          visual={<SummaryPanel title="Sequence" items={["Observe trust-relevant conditions", "Evaluate what is admissible", "Preserve what matters"]} />}
        />
        <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
          <div className="grid gap-6 lg:grid-cols-3">
            {section.steps.map((step: AnySection, index: number) => (
              <StepCard key={step.title} index={index} title={step.title} body={step.body} />
            ))}
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function UseCasesPage() {
  const section = homeSections[8];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Use cases"
          headline={section.headline}
          subheadline="Entraphy is built for environments where the consequences of later defensibility are real."
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Read the docs", href: "/docs" }}
          visual={
            <SummaryPanel
              title="Where it matters most"
              body="AI-native systems, security and incident response, regulated environments, sovereign and cross-boundary systems, and autonomous or industrial settings."
            />
          }
        />
        <SectionFrame eyebrow={section.sectionLabel} headline={section.headline}>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {section.cards.map((card: AnySection) => (
              <UseCaseCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function DemoPage() {
  const whatYouWillSee = [
    {
      title: "Product walkthrough",
      body: `${trustFlightRecorderName} in context, with the proof layer and the operating boundary visible instead of implied.`
    },
    {
      title: "Proof flow",
      body: "Where trust state is computed, evidence is sealed, replay stays possible, and the record becomes portable."
    },
    {
      title: "Architecture fit",
      body: "How Entraphy overlays your current stack without centralizing every event or asking for rip-and-replace."
    },
    {
      title: "Use-case discussion",
      body: "Which consequential workflow is worth piloting first, and what evidence it needs later."
    }
  ];
  const whoThisIsFor = [
    {
      title: "AI platform teams",
      body: "Teams responsible for consequential automation, agent behavior, and the proof around it."
    },
    {
      title: "Security leaders",
      body: "Leaders who need evidence that survives review, challenge, and incident response."
    },
    {
      title: "Regulated or sovereign environments",
      body: "Organizations that need defensible records across stricter operating boundaries."
    },
    {
      title: "High-consequence operators",
      body: "Teams that need replayable proof for actions that cannot stay ambiguous."
    }
  ];
  const proofPilotIncludes = [
    {
      title: "One consequential workflow",
      body: "Scope a single path where the decision really matters and the consequence is easy to name."
    },
    {
      title: "Decision-time instrumentation",
      body: "Map the trust boundary and capture proof at the point of consequence."
    },
    {
      title: "Replay / proof demonstration",
      body: "Show how the record can be reconstructed, replayed, and reviewed later."
    },
    {
      title: "Portable artifact discussion",
      body: "Discuss how the evidence leaves the runtime and supports independent verification."
    }
  ];
  const expectedOutcomes = [
    "Prove what happened",
    "Prove it was allowed",
    "Support replay and defensibility",
    "Clarify platform fit"
  ];
  const engagementPath = [
    {
      title: "Understand workflow",
      body: "Start with the operational path, the people involved, and what makes the action consequential."
    },
    {
      title: "Identify consequential action surface",
      body: "Name the point where proof must exist for the decision to hold up later."
    },
    {
      title: "Instrument trust/proof approach",
      body: "Map how evidence is captured without turning the stack into a raw-data sink."
    },
    {
      title: "Review replay and evidence model",
      body: "Show how replay, portability, and independent verification stay intact."
    },
    {
      title: "Define next-step engagement",
      body: "Choose demo, Proof Pilot, or product exploration with the boundary now visible."
    }
  ];
  const engagementOptions = [
    {
      kind: "Demo conversation",
      title: "Request a demo",
      body: `Best when you want a focused walkthrough of ${trustFlightRecorderName}, the proof flow, and the stack fit before anything else.`,
      cta: "Request a demo",
      href: "/demo#intake",
      variant: "primary" as const
    },
    {
      kind: "Pilot conversation",
      title: "Discuss a Proof Pilot",
      body: "Best when one consequential workflow is the right place to scope proof, replay, and defensibility.",
      cta: "Discuss pilot",
      href: "/demo#intake",
      variant: "primary" as const
    },
    {
      kind: "Product exploration",
      title: "Explore Trust Flight Recorder for AI",
      body: "Best when you want to see the proof plane on its own before deciding on a broader conversation.",
      cta: "Explore product",
      href: "/products/trust-flight-recorder-ai",
      variant: "secondary" as const
    },
    {
      kind: "Product exploration",
      title: "Explore Blacksmith",
      body: "Best when you want to see the hardening plane and how it complements proof infrastructure.",
      cta: "Explore product",
      href: "/products/blacksmith",
      variant: "secondary" as const
    },
    {
      kind: "Company conversation",
      title: "General company conversation",
      body: "Best when the right first step is broader than one product or one workflow.",
      cta: "Talk to Entraphy",
      href: "/demo#intake",
      variant: "primary" as const
    }
  ];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Demo / Proof Pilot"
          headline={`See ${trustFlightRecorderName} in context.`}
          subheadline={`A high-trust walkthrough of how Entraphy proves what happened, proves it was allowed, and preserves replayable evidence. If a pilot is the better next step, we will shape it around one consequential workflow.`}
          primaryCta={{ label: "Request a demo", href: "/demo#intake" }}
          secondaryCta={{ label: "Explore products", href: "/products" }}
          visual={
            <SummaryPanel
              title="What happens next"
              items={["Product walkthrough", "Proof flow", "Architecture fit", "Use-case discussion"]}
            />
          }
        />

        <SectionFrame
          eyebrow="What you'll see"
          headline="A focused walkthrough, not a sales deck."
          subheadline="The first conversation stays centered on the product, the proof flow, the stack fit, and the workflow worth discussing."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatYouWillSee.map((card) => (
              <UseCaseCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="Engagement path"
          headline="From first conversation to pilot clarity."
          subheadline="A compact path that keeps the first step operational and the next step easy to understand."
        >
          <Surface className="p-5 sm:p-6">
            <ol className="grid gap-3 xl:grid-cols-5">
              {engagementPath.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-bg/40 p-4">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.03em] text-fg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </Surface>
        </SectionFrame>

        <SectionFrame
          eyebrow="Who this is for"
          headline="Teams that need evidence, not theater."
          subheadline="This page is for buyers who already know the stakes and now need a credible way to engage."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whoThisIsFor.map((card) => (
              <UseCaseCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="What a Proof Pilot includes"
          headline="One workflow. One boundary. One proof path."
          subheadline="The pilot motion stays narrow so the evidence stays real and the next step stays clear."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proofPilotIncludes.map((step, index) => (
              <StepCard key={step.title} index={index} title={step.title} body={step.body} />
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="Expected outcomes"
          headline="Clearer trust, replay, defensibility, and fit."
          subheadline="The goal is to leave with an operational view of whether Entraphy belongs in your stack."
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <BulletedPanel title="Outcomes" items={expectedOutcomes} />
            <SummaryPanel
              title="What this clarifies"
              body="You leave with a sharper view of the trust boundary, the evidence boundary, and the next step."
            />
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="Engagement options"
          headline="Choose the lightest path that matches your intent."
          subheadline="Demo conversation, Proof Pilot conversation, product exploration, or a broader company conversation."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engagementOptions.map((option) => (
              <Surface key={option.title} className="flex h-full flex-col p-6">
                <div className="space-y-3">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">{option.kind}</p>
                  <h3 className="font-display text-xl leading-tight tracking-[-0.03em] text-fg sm:text-2xl">{option.title}</h3>
                  <p className="text-sm leading-7 text-muted">{option.body}</p>
                </div>
                <div className="mt-6">
                  <ButtonLink href={option.href} variant={option.variant}>
                    {option.cta}
                  </ButtonLink>
                </div>
              </Surface>
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          id="intake"
          className="scroll-mt-28"
          eyebrow="Final CTA / intake"
          headline="Tell us what needs to be proven."
          subheadline="Choose the intent, add the context, and we will route the request to the lightest credible next step."
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="order-2 space-y-4 lg:order-1">
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                The intent you choose travels with the request, so the follow-up starts in the right place.
              </p>
              <SummaryPanel
                title="What to share"
                items={[
                  "The workflow you want to discuss",
                  "The consequential action surface",
                  "The evidence you need later",
                  "The environment boundary"
                ]}
              />
            </div>
            <div className="order-1 lg:order-2">
              <DemoIntakeForm
                choices={engagementOptions.map(({ kind, title, body }) => ({
                  category: kind,
                  label: title,
                  detail: body,
                  value: title
                }))}
              />
            </div>
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function TrustFlightRecorderPage() {
  const productFamily = site.pages.home.sections[4] as AnySection;
  const product = productFamily.cards[0] as AnySection;
  const useCases = homeSections[8] as AnySection;
  const proofFlow = [
    {
      title: "Action occurs",
      body: "A consequential AI action begins in an assistant, agent, workflow, or autonomous control loop."
    },
    {
      title: "Trust state computed",
      body: "Trust-relevant conditions are evaluated at the point of consequence instead of only after the fact."
    },
    {
      title: "Legality/proof generated",
      body: "The decision is translated into evidence that can later support legal, security, or operational review."
    },
    {
      title: "Witness sealed",
      body: "The supporting witness is preserved so the original judgment can be reconstructed without drift."
    },
    {
      title: "Replay supported",
      body: "The consequential action can be replayed with the surrounding proof context intact."
    },
    {
      title: "Proof exported",
      body: "Portable proof artifacts can leave the runtime and flow back into the systems you already use."
    },
    {
      title: "Verification beyond runtime",
      body: "Independent reviewers can verify the record later, even outside the original environment."
    }
  ];
  const whatItIsHighlights = [
    "Proof at decision time",
    "Replayable evidence",
    "Portable verification"
  ];
  const whatItIsNot = ["Logs", "Generic observability", "After-the-fact governance", "Model monitoring alone"];
  const whatItDoes = [
    "Proves what happened",
    "Proves it was allowed",
    "Preserves replayable evidence",
    "Exports proof beyond runtime"
  ];
  const architectureItems = [
    "Bridge-first integration alongside existing observability, workflow, AI, and control systems.",
    "No centralized raw-data gravity. Proof is captured selectively at consequential decision points.",
    "No runtime bottleneck. The page sits beside the system instead of becoming the system.",
    "Overlay, not replacement. Proof objects can flow back into the tools you already use."
  ];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow={`Products / ${product.name}`}
          headline={product.name}
          subheadline="Trust Flight Recorder for AI is the proof layer for AI-native systems and consequential automated actions. It preserves replayable evidence beyond runtime."
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore products", href: "/products" }}
          visual={<SummaryPanel title="Proof-first behavior" items={whatItIsHighlights} />}
        />

        <SectionFrame
          eyebrow="What it is"
          headline="Proof for consequential AI actions."
          subheadline="It preserves the evidence behind trust decisions at the point of consequence."
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>{product.body}</p>
              <p>
                It captures trust-relevant state at the point of consequence, then keeps the resulting proof available for replay,
                review, and independent verification without requiring the original runtime to stay alive.
              </p>
            </div>
            <SummaryPanel
              title="What it preserves"
              items={["Trust state at decision time", "Witness-grade evidence", "Replay context", "Portable proof objects"]}
            />
          </div>
        </SectionFrame>

        <SectionFrame eyebrow="Proof flow timeline" headline="Action to verification, in the order consequence occurs.">
          <Surface className="p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">
                  <span>Action</span>
                  <span>Trust state</span>
                  <span>Legality / proof</span>
                  <span>Witness</span>
                  <span>Replay</span>
                  <span>Export</span>
                  <span>Verify</span>
                </div>
                <ol className="relative space-y-3 before:absolute before:left-5 before:top-3 before:h-[calc(100%-0.75rem)] before:w-px before:bg-white/10">
                  {proofFlow.map((step, index) => (
                    <li key={step.title} className="relative pl-12">
                      <span className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-bg/80 font-mono text-[11px] tracking-[0.18em] text-signal uppercase">
                        0{index + 1}
                      </span>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <h3 className="font-display text-xl leading-tight tracking-[-0.03em] text-fg">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-4">
                <SummaryPanel
                  title="What the timeline proves"
                  items={["Trust state at decision time", "Witness-grade evidence", "Replayable path back to the event", "Portable proof beyond runtime"]}
                />
                <Surface className="p-5">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Credibility cues</p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    The proof layer sits beside the system. It preserves the boundary, keeps replay viable, and leaves an artifact that can
                    be verified later without the original runtime.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
                      No raw-data gravity
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
                      No runtime bottleneck
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.18em] text-fg/70 uppercase">
                      Overlay, not replacement
                    </span>
                  </div>
                </Surface>
              </div>
            </div>
          </Surface>
        </SectionFrame>

        <SectionFrame
          eyebrow="Why it is different"
          headline="Logs capture activity. This preserves proof."
          subheadline="The product exists to make consequential actions defensible, not just visible."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Surface className="p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">What it is not</p>
              <ul className="mt-4 space-y-3">
                {whatItIsNot.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Surface>
            <Surface className="p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">What it proves</p>
              <ul className="mt-4 space-y-3">
                {whatItDoes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="Architecture / stack fit"
          headline="Beside the stack, not inside it."
          subheadline="Bridge-first integration keeps proof bounded without forcing a new raw-data center."
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>
                Entraphy adds a proof layer around selected consequential decision points. It does not ask you to rebuild your stack,
                turn all telemetry into a single lake, or absorb new runtime weight just to preserve evidence.
              </p>
              <p>
                The result is a bounded trust overlay that can sit alongside observability, workflow, AI, and control systems while still
                producing proof objects that flow back into the environment you already operate.
              </p>
            </div>
            <BulletedPanel title="Stack fit" items={architectureItems} />
          </div>
        </SectionFrame>

        <SectionFrame eyebrow="Use cases" headline="Built for consequential workflows.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {useCases.cards.map((card: AnySection) => (
              <UseCaseCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionFrame>

        <Surface className="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">CTA</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-fg sm:text-4xl">
                Make the decision provable.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                We can show how Trust Flight Recorder for AI fits your current stack, where the proof boundary should live, and what a
                pilot path looks like in practice.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/demo#intake">Request a demo</ButtonLink>
                <ButtonLink href="/products" variant="secondary">
                  Explore products
                </ButtonLink>
              </div>
            </div>
            <SummaryPanel
              title="What happens next"
              items={["See the walkthrough", "Scope a pilot conversation", "Map the integration boundary"]}
            />
          </div>
        </Surface>
      </div>
    </PageFrame>
  );
}

function BlacksmithPage() {
  const productFamily = site.pages.home.sections[4] as AnySection;
  const product = productFamily.cards[1] as AnySection;
  const hardeningLoop = [
    {
      title: "Pressure",
      body: "Apply controlled force to the boundary until weak assumptions become visible."
    },
    {
      title: "Challenge",
      body: "Probe whether the current state can actually hold under realistic operational demand."
    },
    {
      title: "Validate",
      body: "Confirm what is real before letting the system keep moving."
    },
    {
      title: "Govern",
      body: "Keep repair and change inside the boundaries the operator is willing to trust."
    },
    {
      title: "Repair",
      body: "Fix what is admissible instead of only reporting that it is broken."
    },
    {
      title: "Verify",
      body: "Check that the hardening action actually improved the software surface."
    },
    {
      title: "Witness",
      body: "Preserve evidence of the hardening step so it can be reviewed later."
    },
    {
      title: "Remember",
      body: "Carry the outcome forward so each cycle compounds hardening memory."
    }
  ];
  const notItems = ["Scanner", "Patch bot", "Generic AppSec wrapper", "Autonomous pentest toy"];
  const useCases = [
    {
      title: "Production software estates",
      body: "Continuously harden the systems your teams already depend on."
    },
    {
      title: "AI-adjacent services",
      body: "Pressure the APIs, pipelines, and dependencies that agents rely on."
    },
    {
      title: "Boundary-heavy integrations",
      body: "Validate what crosses trust zones, vendors, or operating domains."
    },
    {
      title: "High-change delivery systems",
      body: "Turn repeated fixes into compounding hardening memory."
    },
    {
      title: "Regulated environments",
      body: "Keep repair behavior governed where changes must be explainable."
    }
  ];

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow={`Products / ${product.name}`}
          headline="Autonomous hardening infrastructure for modern software"
          subheadline="Blacksmith is the governed hardening engine for software that cannot stay soft. It pressures trust boundaries, validates what is real, repairs what is admissible, and preserves witness-grade evidence."
          primaryCta={{ label: "Request a demo", href: "/demo" }}
          secondaryCta={{ label: "Explore products", href: "/products" }}
          visual={
            <SummaryPanel
              title="Operational emphasis"
              items={[
                "Pressure trust boundaries",
                "Validate what is real",
                "Repair what is admissible",
                "Compounding hardening memory"
              ]}
            />
          }
        />

        <SectionFrame
          eyebrow="What Blacksmith is"
          headline="A governed hardening engine, not a passive detector."
          subheadline="Blacksmith continuously hardens the software surface instead of waiting for the next alert to tell you something is wrong."
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>{product.body}</p>
              <p>
                It pressures trust boundaries, validates what is real, and only repairs what is admissible under the current operating
                rules. Each pass leaves the system a little stronger and a little more legible for the next cycle.
              </p>
            </div>
            <SummaryPanel
              title="What it keeps"
              items={[
                "Hardening context",
                "Witness-grade evidence",
                "Repair history",
                "Memory that compounds over time"
              ]}
            />
          </div>
        </SectionFrame>

        <SectionFrame eyebrow="Hardening cycle" headline="One cycle. Compounding memory.">
          <Surface className="p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <SummaryPanel
                  title="What the cycle does"
                  items={["Pressure trust boundaries", "Validate what is real", "Repair what is admissible", "Carry hardening memory forward"]}
                />
                <Surface className="p-5">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Campaign loop</p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    The loop keeps pressure, challenge, validation, repair, verification, witness, and memory moving together so each pass
                    compounds rather than resets.
                  </p>
                </Surface>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {hardeningLoop.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-signal/70 uppercase">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.03em] text-fg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Surface>
        </SectionFrame>

        <SectionFrame eyebrow="What Blacksmith is not" headline="Not a scanner. Not a patch bot. Not a generic AppSec wrapper.">
          <div className="grid gap-6 lg:grid-cols-2">
            <Surface className="p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Not this</p>
              <ul className="mt-4 space-y-3">
                {notItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-fg/82">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Surface>
            <Surface className="p-6">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">What it is</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                <p>Blacksmith is a governed hardening engine that operates continuously across modern software.</p>
                <p>
                  It does not just identify weak points. It pushes on them, validates the result, repairs what can be safely changed, and
                  records the evidence so the next cycle can move faster with more confidence.
                </p>
              </div>
            </Surface>
          </div>
        </SectionFrame>

        <SectionFrame
          eyebrow="Why it works with Entraphy"
          headline="Blacksmith hardens. Entraphy proves."
          subheadline="Blacksmith changes the surface. Entraphy preserves the proof record around consequential action."
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>
                Blacksmith is the active hardening plane. Entraphy is the proof plane. One works on the software itself; the other keeps
                the evidence portable, replayable, and independently verifiable.
              </p>
              <p>
                Together they create a clean tandem: harden the system, then prove what changed and why it should be trusted.
              </p>
            </div>
            <SummaryPanel
              title="Tandem"
              items={[
                "Blacksmith hardens the software",
                "Entraphy proves the consequential record",
                "Hardening memory and proof move together"
              ]}
            />
          </div>
        </SectionFrame>

        <SectionFrame eyebrow="Use cases" headline="Built for software that cannot stay brittle.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((card) => (
              <UseCaseCard key={card.title} title={card.title} body={card.body} />
            ))}
          </div>
        </SectionFrame>

        <Surface className="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">CTA</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-fg sm:text-4xl">
                See how Blacksmith fits the hardening plane in your stack.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                We can walk through the operating boundary, what gets pressured, what gets repaired, and how witness-grade evidence stays
                available for review.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/demo#intake">Request a demo</ButtonLink>
                <ButtonLink href="/products" variant="secondary">
                  Explore products
                </ButtonLink>
              </div>
            </div>
            <SummaryPanel
              title="Best next step"
              items={["Walk the demo", "Scope a pilot boundary", "Map the hardening loop"]}
            />
          </div>
        </Surface>
      </div>
    </PageFrame>
  );
}

function NotFoundPage() {
  return (
    <PageFrame>
      <Surface className="p-6 sm:p-8">
        <p className="font-mono text-[10px] tracking-[0.3em] text-signal/70 uppercase">Not found</p>
        <h1 className="mt-4 font-display text-4xl tracking-[-0.04em] text-fg sm:text-5xl">
          This route is not part of the Phase 1 site.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          Return to the company site, or start with the platform and products pages to see the trust system architecture.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/platform" variant="secondary">
            Platform
          </ButtonLink>
        </div>
      </Surface>
    </PageFrame>
  );
}

export function RoutePageContent({ slug }: { slug: string[] }) {
  const routeKey = slug.join("/");

  switch (routeKey) {
    case "platform":
      return <PlatformPage />;
    case "products":
      return <ProductsPage />;
    case "company":
      return <CompanyPage />;
    case "docs":
      return <DocsPage />;
    case "how-it-works":
      return <HowItWorksPage />;
    case "use-cases":
      return <UseCasesPage />;
    case "demo":
      return <DemoPage />;
    case "products/trust-flight-recorder-ai":
      return <TrustFlightRecorderPage />;
    case "products/blacksmith":
      return <BlacksmithPage />;
    default:
      return <NotFoundPage />;
  }
}

export { routeMetadata as marketingRouteMetadata, routeSlugs as marketingRoutes };

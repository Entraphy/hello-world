import { homeSections, site, type AnySection, routeMetadata, routeSlugs } from "@/components/site-data";
import {
  ButtonLink,
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

function PlatformPage() {
  const hero = site.pages.platform.hero;

  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Platform"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={{ label: "Explore the products", href: "/products" }}
          secondaryCta={{ label: "See the demo", href: "/demo" }}
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
          primaryCta={{ label: "Explore the platform", href: "/platform" }}
          secondaryCta={{ label: "Talk to Entraphy", href: "/contact" }}
          visual={<SummaryPanel title="Company-first architecture" body="The company stays the umbrella brand. Product planes layer in cleanly as separate surfaces." />}
        />
        <SectionFrame
          eyebrow="Product lines"
          headline="The overlay is visible now, even before Phase 2 expands it."
          subheadline="Entraphy Trust Flight Recorder for AI and Blacksmith are the two product planes the company is building around."
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
          primaryCta={{ label: "See the demo", href: "/demo" }}
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
          primaryCta={{ label: "Explore the platform", href: "/platform" }}
          secondaryCta={{ label: "Talk to Entraphy", href: "/contact" }}
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
          primaryCta={{ label: "Explore the platform", href: "/platform" }}
          secondaryCta={{ label: "See the products", href: "/products" }}
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
          primaryCta={{ label: "Explore the products", href: "/products" }}
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
  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Demo"
          headline="See the demo"
          subheadline="Entraphy can walk you through how proof, replay, and verification fit together at the point of consequence."
          primaryCta={{ label: "Talk to Entraphy", href: "/contact" }}
          secondaryCta={{ label: "Explore the platform", href: "/platform" }}
          visual={<SummaryPanel title="What we will show" items={["Where trust state is evaluated", "How evidence is sealed and replayed", "How proof travels back into your stack"]} />}
        />
        <Surface className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">Demo flow</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-fg sm:text-4xl">
                We will keep the conversation concrete.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                The goal is to show how Entraphy evaluates trust state, preserves the evidence behind that judgment, and keeps the result portable over time.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/contact">Request a conversation</ButtonLink>
                <ButtonLink href="/products" variant="secondary">
                  Review the product lines
                </ButtonLink>
              </div>
            </div>
            <SummaryPanel title="Best fit" body="Organizations that need proof, replay, and verification without turning the entire stack into a data lake." />
          </div>
        </Surface>
      </div>
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Contact"
          headline="Talk to Entraphy"
          subheadline="If you need trust infrastructure for a consequential environment, the fastest path is a direct conversation."
          primaryCta={{ label: "Email us", href: "mailto:contact@entraphy.com" }}
          secondaryCta={{ label: "See the demo", href: "/demo" }}
          visual={<SummaryPanel title="Contact" body="contact@entraphy.com" />}
        />
        <Surface className="p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-mono text-[10px] tracking-[0.28em] text-signal/70 uppercase">How to start</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-fg sm:text-4xl">
                Tell us what you are trying to prove.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                We will help map the trust state, evidence, replay, and verification boundaries that matter in your environment.
              </p>
            </div>
            <SummaryPanel
              title="Good reasons to reach out"
              items={[
                "You need defensible AI or autonomous operations",
                "You need portable proof without raw-data gravity",
                "You need a trust overlay that fits an existing stack"
              ]}
            />
          </div>
        </Surface>
      </div>
    </PageFrame>
  );
}

function ProductPreviewPage({
  name,
  summary,
  bullets,
  previewLabel
}: {
  name: string;
  summary: string;
  bullets: string[];
  previewLabel: string;
}) {
  return (
    <PageFrame>
      <div className="space-y-20">
        <Hero
          eyebrow="Product preview"
          headline={name}
          subheadline={summary}
          primaryCta={{ label: "Talk to Entraphy", href: "/contact" }}
          secondaryCta={{ label: "Back to products", href: "/products" }}
          visual={<SummaryPanel title={previewLabel} items={bullets} />}
        />
        <SectionFrame eyebrow="Why it exists" headline="Built to prove and harden what the company already stands for.">
          <div className="grid gap-6 md:grid-cols-3">
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Trust state</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Preserve the judgment that mattered at the moment of consequence.
              </p>
            </Surface>
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Replayable evidence</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Keep the proof available for later reconstruction, review, and challenge.
              </p>
            </Surface>
            <Surface className="p-5">
              <h3 className="font-display text-xl text-fg">Portable verification</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Make the result meaningful across teams, systems, and time.
              </p>
            </Surface>
          </div>
        </SectionFrame>
      </div>
    </PageFrame>
  );
}

function TrustFlightRecorderPage() {
  const productFamily = site.pages.home.sections[4] as AnySection;
  const product = productFamily.cards[0] as AnySection;

  return (
    <ProductPreviewPage
      name={product.name}
      summary={product.body}
      previewLabel={product.tagline}
      bullets={["Proof at decision time", "Legality proofs", "Replayable evidence", "Portable verification"]}
    />
  );
}

function BlacksmithPage() {
  const productFamily = site.pages.home.sections[4] as AnySection;
  const product = productFamily.cards[1] as AnySection;

  return (
    <ProductPreviewPage
      name={product.name}
      summary={product.body}
      previewLabel={product.tagline}
      bullets={["Continuously harden what must be trusted", "Pressure boundaries", "Validate what is real", "Repair what is admissible"]}
    />
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
    case "contact":
      return <ContactPage />;
    case "products/trust-flight-recorder-ai":
      return <TrustFlightRecorderPage />;
    case "products/blacksmith":
      return <BlacksmithPage />;
    default:
      return <NotFoundPage />;
  }
}

export { routeMetadata as marketingRouteMetadata, routeSlugs as marketingRoutes };

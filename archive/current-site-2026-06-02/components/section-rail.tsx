"use client";

type RailItem = {
  id: string;
  label: string;
  active: boolean;
};

export function SectionRail({ items }: { items: RailItem[] }) {
  return (
    <aside aria-hidden className="pointer-events-none fixed top-0 left-0 z-10 hidden h-screen w-[82px] lg:block">
      <div className="absolute top-24 bottom-20 left-[42px] w-px bg-line/40" />
      <div className="absolute top-28 left-0 flex h-[calc(100vh-9rem)] w-full flex-col items-center justify-between py-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <span className={`h-2 w-2 rounded-full border border-line/70 transition ${item.active ? "bg-fg border-fg/85" : "bg-bg"}`} />
            <span className={`text-[10px] tracking-[0.18em] uppercase transition ${item.active ? "text-fg/80" : "text-muted/55"}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function ConceptualDiagram() {
  return (
    <div className="rounded-2xl border border-line bg-white/[0.01] p-6">
      <svg viewBox="0 0 860 220" role="img" aria-label="Conceptual trust verification flow" className="w-full">
        <rect x="20" y="70" width="180" height="80" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(84,96,122,1)" />
        <rect x="340" y="40" width="180" height="140" rx="12" fill="rgba(107,125,255,0.08)" stroke="rgba(107,125,255,0.8)" />
        <rect x="660" y="70" width="180" height="80" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(84,96,122,1)" />
        <text x="110" y="115" textAnchor="middle" fill="rgba(233,236,242,0.9)" fontSize="14">Requested Action</text>
        <text x="430" y="96" textAnchor="middle" fill="rgba(233,236,242,0.95)" fontSize="14">Authority</text>
        <text x="430" y="118" textAnchor="middle" fill="rgba(233,236,242,0.95)" fontSize="14">Policy</text>
        <text x="430" y="140" textAnchor="middle" fill="rgba(233,236,242,0.95)" fontSize="14">Time</text>
        <text x="750" y="115" textAnchor="middle" fill="rgba(233,236,242,0.9)" fontSize="14">Consequence</text>
        <line x1="200" y1="110" x2="340" y2="110" stroke="rgba(107,125,255,0.7)" strokeWidth="2" />
        <line x1="520" y1="110" x2="660" y2="110" stroke="rgba(107,125,255,0.7)" strokeWidth="2" />
      </svg>
    </div>
  );
}

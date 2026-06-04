import Image from "next/image";

function AmberRule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`absolute bg-signal/45 ${className}`} />;
}

export function BriefingRoomVisual() {
  return (
    <div aria-hidden className="relative min-h-[24rem] overflow-hidden bg-[linear-gradient(115deg,rgb(5,8,7),rgb(12,20,16)_58%,rgb(3,4,4))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(196,157,84,0.16),transparent_26%),linear-gradient(90deg,rgba(0,0,0,0.35),transparent_48%,rgba(0,0,0,0.4))]" />
      <div className="absolute inset-y-0 left-[18%] w-px bg-white/10" />
      <div className="absolute inset-y-0 left-[42%] w-px bg-white/8" />
      <div className="absolute inset-y-0 right-[22%] w-px bg-signal/18" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
      <div className="absolute bottom-14 left-[12%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="absolute bottom-24 left-[22%] right-[20%] h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
      <div className="absolute left-[56%] top-[16%] h-[68%] w-[9rem] bg-[linear-gradient(90deg,transparent,rgba(196,157,84,0.18),transparent)] blur-[1px]" />
      <AmberRule className="left-[56%] top-[18%] h-[64%] w-px" />
      <div className="absolute right-10 top-10 h-20 w-32 border border-white/10 bg-black/10" />
      <div className="absolute right-16 top-16 h-px w-20 bg-signal/35" />
    </div>
  );
}

export function AccessReviewVisual() {
  return (
    <div aria-hidden className="relative min-h-[26rem] overflow-hidden bg-[linear-gradient(135deg,rgb(4,7,6),rgb(12,24,19)_55%,rgb(3,4,4))]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35),transparent_46%,rgba(0,0,0,0.2)),radial-gradient(circle_at_70%_34%,rgba(196,157,84,0.13),transparent_24%)]" />
      <div className="absolute left-[16%] top-[18%] h-[64%] w-[58%] border border-white/12 bg-black/14 shadow-[0_32px_90px_rgba(0,0,0,0.28)]" />
      <div className="absolute left-[20%] right-[31%] top-[28%] h-px bg-gradient-to-r from-signal/55 via-white/14 to-transparent" />
      <div className="absolute left-[20%] right-[39%] top-[42%] h-px bg-white/10" />
      <div className="absolute left-[20%] right-[44%] top-[52%] h-px bg-white/8" />
      <div className="absolute left-[20%] right-[49%] top-[62%] h-px bg-white/8" />
      <div className="absolute right-[20%] top-[27%] grid h-20 w-20 place-items-center border border-signal/45 bg-black/24">
        <span className="relative block h-9 w-9 text-signal">
          <span className="absolute bottom-1 left-1/2 h-6 w-7 -translate-x-1/2 rounded-sm border border-current" />
          <span className="absolute left-1/2 top-0 h-6 w-5 -translate-x-1/2 rounded-t-full border-x border-t border-current" />
          <span className="absolute left-1/2 top-6 h-2 w-px -translate-x-1/2 bg-current" />
        </span>
      </div>
      <div className="absolute bottom-[18%] left-[20%] flex gap-3">
        <span className="h-1.5 w-12 bg-signal/48" />
        <span className="h-1.5 w-6 bg-white/14" />
        <span className="h-1.5 w-10 bg-white/10" />
      </div>
    </div>
  );
}

export function PartnerDossierVisual() {
  return (
    <div aria-hidden className="relative min-h-[26rem] overflow-hidden bg-[linear-gradient(135deg,rgb(5,7,6),rgb(15,15,13)_54%,rgb(3,4,4))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_34%,rgba(196,157,84,0.14),transparent_30%),linear-gradient(90deg,rgba(4,7,7,0.7),transparent_48%,rgba(0,0,0,0.34))]" />
      <div className="absolute left-[32%] top-[6%] h-[84%] w-[50%] rotate-[-14deg] border border-signal/35 bg-[linear-gradient(145deg,rgb(24,24,21),rgb(8,8,7))] shadow-[0_34px_90px_rgba(0,0,0,0.42)]" />
      <div className="absolute left-[38%] top-[14%] h-[68%] w-[38%] rotate-[-14deg] border border-white/9" />
      <div className="absolute left-[49%] top-[26%] h-40 w-40 rotate-[-14deg] rounded-full border border-signal/42" />
      <div className="absolute left-[50%] top-[27.5%] h-36 w-36 rotate-[-14deg] rounded-full border border-signal/30" />
      <div className="absolute left-[52%] top-[30%] grid h-28 w-28 rotate-[-14deg] place-items-center rounded-full border border-signal/38 bg-black/12">
        <Image src="/brand/entraphy-logo-mark.png" alt="" width={58} height={58} className="opacity-85" />
      </div>
      <div className="absolute bottom-[22%] left-[52%] h-px w-36 rotate-[-14deg] bg-signal/38" />
      <div className="absolute bottom-[18%] left-[55%] h-px w-24 rotate-[-14deg] bg-white/12" />
      <div className="absolute bottom-[14%] left-[58%] h-px w-16 rotate-[-14deg] bg-signal/28" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%,rgba(0,0,0,0.32))]" />
    </div>
  );
}

export function FounderLedgerVisual() {
  return (
    <div aria-hidden className="relative min-h-[26rem] overflow-hidden bg-[linear-gradient(135deg,rgb(4,7,6),rgb(10,20,16)_58%,rgb(3,4,4))]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34),transparent_55%),radial-gradient(circle_at_68%_28%,rgba(196,157,84,0.12),transparent_22%)]" />
      <div className="absolute left-[16%] top-[16%] h-[66%] w-[62%] border border-white/12 bg-black/14 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)]" />
      <div className="absolute left-[21%] top-[25%] h-px w-[38%] bg-signal/42" />
      <div className="absolute left-[21%] top-[38%] h-px w-[47%] bg-white/11" />
      <div className="absolute left-[21%] top-[49%] h-px w-[32%] bg-white/9" />
      <div className="absolute left-[21%] top-[60%] h-px w-[43%] bg-white/9" />
      <div className="absolute left-[21%] top-[70%] h-px w-[26%] bg-signal/25" />
      <div className="absolute right-[20%] top-[22%] h-16 w-16 border border-signal/42">
        <span className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full border border-signal" />
        <span className="absolute bottom-3 left-1/2 h-6 w-8 -translate-x-1/2 rounded-t-full border-x border-t border-signal" />
      </div>
      <div className="absolute bottom-12 right-12 h-28 w-28 border-l border-t border-white/8" />
      <AmberRule className="bottom-20 right-20 h-px w-20" />
    </div>
  );
}

export function FormationFieldVisual() {
  return (
    <div aria-hidden className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(120deg,rgb(4,7,6),rgb(10,20,16)_56%,rgb(3,4,4))]">
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(115deg,transparent_0,transparent_46%,rgba(196,157,84,0.18)_46.4%,transparent_47.2%,transparent_100%),linear-gradient(155deg,transparent_0,transparent_38%,rgba(242,239,230,0.08)_38.4%,transparent_39.1%,transparent_100%)] [background-size:9rem_5rem,7rem_4rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(196,157,84,0.15),transparent_27%),linear-gradient(90deg,rgba(4,7,7,0.82),transparent_62%,rgba(4,7,7,0.5))]" />
      <div className="absolute left-[14%] top-[22%] h-px w-[52%] bg-gradient-to-r from-transparent via-signal/38 to-transparent" />
      <div className="absolute left-[24%] top-[42%] h-px w-[44%] bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-[18%] top-[62%] h-px w-[58%] bg-gradient-to-r from-transparent via-signal/24 to-transparent" />
      <div className="absolute bottom-10 right-12 h-20 w-28 border border-white/10 bg-black/12" />
    </div>
  );
}

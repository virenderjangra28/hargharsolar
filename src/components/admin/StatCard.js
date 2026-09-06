import Link from "next/link";

export default function StatCard({
  href,
  label,
  value,
  hint,
  percent,
  accent,
  icon,
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-muted">{label}</p>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{value}</p>
          <p className="mt-1 text-sm text-muted">{hint}</p>
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: accent.soft, color: accent.strong }}
        >
          {icon}
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
          <span className="text-muted">Share of total</span>
          <span className="text-navy">{percent}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e8eef5]">
          <div
            className="h-full rounded-full"
            style={{ width: `${percent}%`, background: accent.strong }}
          />
        </div>
      </div>
    </Link>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-extrabold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-ink/80">{children}</div>
    </section>
  );
}

export default function LegalLayout({ title, updated, children }) {
  return (
    <article className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-medium text-sky hover:underline">
          ← Back to home
        </a>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted">{updated}</p>
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </article>
  );
}

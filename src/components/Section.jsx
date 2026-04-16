const Section = ({ id, eyebrow, title, subtitle, children, className = '' }) => (
  <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {(eyebrow || title || subtitle) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.2em] text-algaeSoft/80">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-lg text-zinc-300/90">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;

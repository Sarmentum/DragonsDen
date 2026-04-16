const BrandLogo = ({ compact = false, align = 'center', className = '' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const centerWrap = align === 'left' ? 'mx-0' : 'mx-auto';

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#f5a8b5]/60 bg-[#f5a8b5]/10">
          <svg viewBox="0 0 48 48" className="h-4 w-4 fill-[#f5a8b5]" aria-hidden="true">
            <path d="M25 4c2 8-2 12-2 17 0 4 3 7 8 7 6 0 10-4 10-11 0-8-7-13-16-13z" />
            <path d="M19 8C10 14 6 22 6 29c0 9 7 15 18 15 7 0 12-2 16-5-9 2-15-2-15-10 0-4 2-10 4-21-3 0-6 0-10 0z" />
          </svg>
        </span>
        <span className="text-sm font-semibold tracking-[0.2em] text-[#f5a8b5]">PALGAE</span>
      </div>
    );
  }

  return (
    <div className={`${alignClass} ${className}`}>
      <div className={`${centerWrap} inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#f5a8b5]/60 bg-[#f5a8b5]/10 shadow-[0_0_25px_rgba(245,168,181,0.22)]`}>
        <svg viewBox="0 0 48 48" className="h-9 w-9 fill-[#f5a8b5]" aria-hidden="true">
          <path d="M25 4c2 8-2 12-2 17 0 4 3 7 8 7 6 0 10-4 10-11 0-8-7-13-16-13z" />
          <path d="M19 8C10 14 6 22 6 29c0 9 7 15 18 15 7 0 12-2 16-5-9 2-15-2-15-10 0-4 2-10 4-21-3 0-6 0-10 0z" />
        </svg>
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-[0.28em] text-[#f5a8b5]">PALGAE</p>
      <p className="mt-1 text-xs uppercase tracking-[0.34em] text-[#f5a8b5]/80">Living technology. Cleaner air.</p>
    </div>
  );
};

export default BrandLogo;

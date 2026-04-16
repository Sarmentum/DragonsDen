import { useState } from 'react';
import { navLinks } from '../data/siteContent';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" aria-label="Palgae home">
          <BrandLogo compact className="hidden sm:inline-flex" />
          <span className="text-sm font-semibold tracking-[0.18em] text-[#f5a8b5] sm:hidden">PALGAE</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-zinc-300 transition hover:text-algae focus-visible:text-algae focus-visible:outline-none">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-algaeSoft/50 bg-algaeSoft/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-algae transition hover:bg-algaeSoft/20 sm:inline-flex"
          >
            Request Demo
          </a>

          <button
            type="button"
            className="inline-flex rounded-md border border-white/20 px-2.5 py-2 text-zinc-200 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-nav" className="border-t border-white/10 bg-slateDeep/95 px-6 py-4 lg:hidden">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-zinc-200 transition hover:text-algae"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-flex rounded-full border border-algaeSoft/50 bg-algaeSoft/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-algae"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

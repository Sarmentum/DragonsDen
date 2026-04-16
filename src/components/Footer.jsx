import BrandLogo from './BrandLogo';

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/40 py-12">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 text-sm text-zinc-400 md:grid-cols-3 lg:px-8">
      <div>
        <BrandLogo compact className="mb-3" />
        <p className="mt-3 max-w-xs">Luxury living desk technology for healthier workspaces.</p>
        <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} Palgae. All rights reserved.</p>
      </div>
      <div>
        <p className="font-medium text-zinc-200">Company</p>
        <ul className="mt-3 space-y-2">
          <li><a href="#models" className="hover:text-zinc-100">Models</a></li>
          <li><a href="#about" className="hover:text-zinc-100">Vision</a></li>
          <li><a href="#contact" className="hover:text-zinc-100">Partnerships</a></li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-zinc-200">Contact</p>
        <ul className="mt-3 space-y-2">
          <li>hello@palgae.com</li>
          <li>+44 (0)20 0000 0000</li>
          <li>London · Bristol · EU rollout</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;

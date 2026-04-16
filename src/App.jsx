import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import BrandLogo from './components/BrandLogo';
import {
  appUiHighlights,
  benefits,
  colorVariants,
  companionSignals,
  faq,
  heroStats,
  maintenanceNotes,
  modules,
  performanceStats,
  processSteps,
  productModels,
  productPoints,
  specs,
  teamProfiles,
  useCases
} from './data/siteContent';

const cardStyle =
  'rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-algaeSoft/40 hover:bg-white/[0.05]';

const DiagramNode = ({ label }) => (
  <div className="rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-zinc-200">{label}</div>
);

const VariantLamp = ({ className, imageSrc, alt }) => (
  <div className={`variant-layer absolute inset-0 ${className}`}>
    <div className="absolute right-4 top-4 rounded-full border border-algaeSoft/50 bg-algaeSoft/10 px-3 py-1 text-xs text-algae">
      Hero Product Render
    </div>
    <img
      src={imageSrc}
      alt={alt}
      className="h-full w-full object-contain rounded-2xl"
    />
  </div>
);

function App() {
  return (
    <div id="top" className="bg-obsidian text-zinc-100">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-28 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(94,229,163,0.22),transparent_45%),radial-gradient(circle_at_75%_10%,rgba(120,160,255,0.17),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_1fr] lg:px-8">
            <div className="animate-fade-up">
              <BrandLogo align="left" className="mb-6" />
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-algaeSoft/85">Luxury living air technology</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Palgae: Your desk friend.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-zinc-300">
                Palgae combines living microalgae biotechnology with smart IAQ monitoring to support indoor air purification, localized carbon-capture performance, and actionable real-time guidance.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-algaeSoft px-6 py-3 text-sm font-semibold text-black transition hover:bg-algae">
                  Request a Demo
                </a>
                <a href="#how-it-works" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-algaeSoft/50 hover:text-algae">
                  See How It Works
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
                    <p className="text-xs uppercase tracking-wider text-zinc-400">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-up animation-delay-150">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-slateDeep to-black p-6 shadow-2xl shadow-black/40">
                <VariantLamp className="variant-cycle-1" imageSrc="/assets/Screenshot 2026-04-15 233815.png" alt="Palgae Aura - Minimal Round" />
                <VariantLamp className="variant-cycle-2" imageSrc="/assets/Screenshot 2026-04-15 233832.png" alt="Palgae Noir - Premium Oval" />
                <VariantLamp className="variant-cycle-3" imageSrc="/assets/Screenshot 2026-04-15 233844.png" alt="Palgae Terra - Warm Rectangular" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {colorVariants.map((variant) => (
                  <div key={variant.name} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-center">
                    <p className="text-xs font-medium text-zinc-100">{variant.name}</p>
                    <p className="mt-1 text-[11px] text-zinc-400">{variant.accent}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <Section
          id="models"
          eyebrow="Models"
          title="Three finish models. One premium Palgae core."
          subtitle="All models share the same living microalgae and sensing platform, with different finish languages for different interiors."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {productModels.map((model, index) => (
              <article key={model.name} className={cardStyle}>
                <div className="mb-4 rounded-xl border border-white/15 bg-black/40 p-4">
                  <img
                    src={`/assets/Screenshot 2026-04-15 2338${index === 0 ? '15' : index === 1 ? '32' : '44'}.png`}
                    alt={model.name}
                    className="mx-auto h-36 w-28 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                <p className="mt-2 text-sm text-zinc-300">Finish: {model.finish}</p>
                <p className="mt-1 text-sm text-zinc-400">Best for: {model.bestFor}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="product"
          eyebrow="Product"
          title="One product, three premium finishes and one clear mission."
          subtitle="The same Palgae lamp platform is available in multiple color/material expressions to match different interior design languages."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {productPoints.map((item) => (
              <article key={item} className={cardStyle}>
                <p className="text-zinc-200">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="companion"
          eyebrow="Air-Quality Companion"
          title="Palgae tells you when your room air is getting worse."
          subtitle="Simple, human messages help users take action early: open a window, improve ventilation, or adjust room conditions."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {companionSignals.map((signal) => (
              <article key={signal.title} className={cardStyle}>
                <h3 className="text-lg font-semibold text-white">{signal.title}</h3>
                <p className="mt-2 text-zinc-300">{signal.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="app-ui"
          eyebrow="App Experience"
          title="A calm, friendly mobile interface for air-quality awareness"
          subtitle="The Palgae companion app turns complex environmental data into simple daily guidance."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <div className={`${cardStyle} flex items-center justify-center`}>
              <div className="w-64 rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-zinc-100 to-zinc-200 p-3 shadow-2xl shadow-black/40">
                <div className="rounded-[1.8rem] bg-white p-4">
                  <p className="text-center text-sm font-semibold text-zinc-800">Palgae</p>
                  <p className="mt-1 text-center text-[11px] text-zinc-500">Living Technology. Cleaner Air.</p>
                  <div className="mt-3 rounded-xl bg-green-50 p-3">
                    <p className="text-xs font-semibold text-emerald-800">Air Quality: Good</p>
                    <p className="mt-1 text-[11px] text-emerald-700">CO₂ 415 ppm · PM2.5 7 μg/m³</p>
                  </div>
                  <div className="mt-3 rounded-xl bg-zinc-100 p-3">
                    <p className="text-xs font-medium text-zinc-700">Air Quality History</p>
                    <div className="mt-2 h-12 rounded bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-200" />
                  </div>
                  <div className="mt-3 rounded-xl bg-amber-50 p-3">
                    <p className="text-xs font-semibold text-amber-800">Service due in 5 days</p>
                    <p className="mt-1 text-[11px] text-amber-700">Refill nutrients & clean chamber</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {appUiHighlights.map((item) => (
                <article key={item.title} className={cardStyle}>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-zinc-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="how-it-works"
          eyebrow="How It Works"
          title="A compact living-system loop for the desk environment."
          subtitle="From sensing to guidance: Palgae makes indoor air quality understandable and actionable."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <div className="grid gap-5 md:grid-cols-2">
              {processSteps.map((step) => (
                <article key={step.step} className={cardStyle}>
                  <p className="text-sm font-medium text-algae">{step.step}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-zinc-300">{step.text}</p>
                </article>
              ))}
            </div>
            <div className={`${cardStyle} flex items-center justify-center`}>
              <video
                src="/assets/task_01kpb0sy22e70ag4cvhje33xpx_task_01kpb0sy22e70ag4cvhje33xpx_genid_f1049485-cb20-448f-8648-bda2f09a75ed_26_04_16_11_36_857736_videos_00000_123173044_source.mp4"
                controls
                className="w-full rounded-xl"
                poster="/assets/ChatGPT Image Apr 15, 2026, 11_34_05 PM.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Section>

        <Section id="benefits" eyebrow="Benefits" title="Why premium teams choose Palgae.">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <article key={item} className={cardStyle}>
                <p className="text-zinc-200">{item}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="performance"
          eyebrow="Performance Statistics"
          title="Measured product design targets for air and carbon performance."
          subtitle="These figures summarize the current Palgae product-design targets and monitored outputs."
          className="bg-white/[0.02]"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            {performanceStats.map((stat) => (
              <div key={stat.label} className="grid grid-cols-1 gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-2">
                <p className="text-zinc-400">{stat.label}</p>
                <p className="font-medium text-zinc-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="responsible-claims"
          eyebrow="Responsible Claims"
          title="Designed to support healthier indoor environments, responsibly."
          className="bg-white/[0.02]"
        >
          <div className="rounded-3xl border border-algaeSoft/30 bg-gradient-to-r from-emerald-500/10 to-transparent p-8">
            <p className="text-lg text-zinc-100">
              Palgae provides localized air-quality awareness and bio-based support with oxygen-generation support through photosynthesis.
            </p>
            <p className="mt-4 text-zinc-300">
              Palgae is not a replacement for building ventilation, HVAC requirements, or HEPA filtration systems.
            </p>
          </div>
        </Section>

        <Section
          id="modules"
          eyebrow="Modular Architecture"
          title="Built for elegant maintenance and long-term ownership confidence."
          subtitle="Cartridge-based modules simplify servicing while preserving the luxury finish."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {modules.map((module) => (
              <article key={module.name} className={cardStyle}>
                <h3 className="text-xl font-semibold capitalize text-white">{module.name}</h3>
                <p className="mt-2 text-zinc-300">{module.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="maintenance"
          eyebrow="Maintenance & Biomass"
          title="Designed to be safe, clean, and practical for everyday ownership."
          subtitle="Palgae servicing is intentionally simple, sealed, and suitable for routine workspace care."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {maintenanceNotes.map((note) => (
              <article key={note.title} className={cardStyle}>
                <h3 className="text-lg font-semibold text-white">{note.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {note.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-algaeSoft" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="use-cases" eyebrow="Use Cases" title="Designed for selective, high-end interiors." className="bg-white/[0.02]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className={`${cardStyle} py-5`}>
                <p className="font-medium text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="specs" eyebrow="Specifications" title="Product format overview.">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            {specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-1 gap-2 border-b border-white/10 px-6 py-5 sm:grid-cols-2">
                <p className="text-zinc-400">{spec.label}</p>
                <p className="font-medium text-zinc-100">{spec.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Frequently asked questions." className="bg-white/[0.02]">
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <summary className="cursor-pointer list-none pr-6 text-lg font-medium text-white">{item.q}</summary>
                <p className="mt-3 text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="Vision"
          title="Palgae brings living clean-tech into luxury desk culture."
          subtitle="We are building a new class of elegant personal environmental objects for premium workplaces."
        />

        <Section
          id="team"
          eyebrow="Meet the Team"
          title="The people building Palgae"
          subtitle="A multidisciplinary team combining science, design, product execution, and market communication."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {teamProfiles.map((member) => (
              <article key={`${member.role}-${member.names}`} className={cardStyle}>
                <p className="text-xs uppercase tracking-[0.16em] text-algaeSoft/80">{member.role}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{member.names}</h3>
                <p className="mt-3 text-zinc-300">{member.bio}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Request a demo or partnership conversation"
          subtitle="We work with premium offices, architects, design firms, and sustainability-led organizations."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className={cardStyle}>
              <h3 className="text-xl font-semibold text-white">Bring Palgae to your workspace.</h3>
              <p className="mt-4 text-zinc-300">
                Share your project goals and we’ll suggest pilot pathways, product options, and partnership models.
              </p>
            </div>
            <form className={`${cardStyle} space-y-4`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-zinc-300" htmlFor="name">
                  Name
                  <input id="name" required type="text" name="name" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white focus:border-algaeSoft focus:outline-none" placeholder="Alex Morgan" />
                </label>
                <label className="text-sm text-zinc-300" htmlFor="company">
                  Company
                  <input id="company" required type="text" name="company" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white focus:border-algaeSoft focus:outline-none" placeholder="Studio Axis" />
                </label>
              </div>
              <label className="text-sm text-zinc-300" htmlFor="email">
                Email
                <input id="email" required type="email" name="email" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white focus:border-algaeSoft focus:outline-none" placeholder="name@company.com" />
              </label>
              <label className="text-sm text-zinc-300" htmlFor="message">
                Message
                <textarea id="message" required name="message" rows="5" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white focus:border-algaeSoft focus:outline-none" placeholder="Tell us about your workspace and goals." />
              </label>
              <button type="submit" className="rounded-full bg-algaeSoft px-6 py-3 text-sm font-semibold text-black transition hover:bg-algae">
                Submit Request
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

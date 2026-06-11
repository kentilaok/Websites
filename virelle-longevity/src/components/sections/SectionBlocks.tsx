import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site-data";

function Hero({ page }: { page: typeof site.pages.home }) {
  return (
    <section className="hero-section">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">{page.hero.kicker}</p>
        <h1 data-split>{page.hero.title}</h1>
        <p className="hero-description">{page.hero.description}</p>
        <div className="hero-actions">
          <Link href="/contact" className="button-primary" data-cursor="magnetic">
            {page.hero.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="hero-media" data-speed="0.16" data-scale-media>
        <img src={site.heroImage} alt={site.imageAlt} />
        <div className="inline-image-row" aria-hidden="true">
          {site.inlineImages.map((image) => (
            <span key={image} style={{ backgroundImage: "url(" + image + ")" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" data-reveal aria-label="Key facts">
      {site.pages.home.proof.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

function FeatureBento({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly { title: string; text: string }[];
}) {
  return (
    <section className="section-shell">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{site.themeName}</p>
        <h2 data-split>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="bento-grid">
        {items.map((item, index) => (
          <article className="feature-panel" data-reveal data-stack-card key={item.title}>
            <span className="panel-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NarrativeRail({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: readonly { title: string; text: string }[];
}) {
  return (
    <section className="narrative-rail" data-pin-panel>
      <div className="narrative-sticky" data-pin-inner data-reveal>
        <p className="eyebrow">{title}</p>
        <h2 data-split>{intro}</h2>
      </div>
      <div className="narrative-list">
        {items.map((item) => (
          <article key={item.title} data-reveal>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialBand() {
  return (
    <section className="section-shell">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Private notes</p>
        <h2 data-split>What guests and clients remember after the room goes quiet.</h2>
      </div>
      <div className="testimonial-grid">
        {site.pages.home.testimonials.map((item) => (
          <figure key={item.name} data-reveal>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function GalleryBand() {
  const repeated = [...site.pages.home.gallery, ...site.pages.home.gallery];
  return (
    <section className="gallery-band" aria-label="Gallery">
      <div className="marquee-window">
        <div className="marquee-track" data-marquee-track>
          {repeated.map((item, index) => (
            <figure key={item.label + index}>
              <img src={item.image} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ text }: { text: string }) {
  return (
    <section className="final-cta" data-reveal>
      <p className="eyebrow">{site.availability}</p>
      <h2 data-split>{text}</h2>
      <Link href="/contact" className="button-primary" data-cursor="magnetic">
        {site.cta}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}

function CategoryMenu() {
  const page = site.pages.menu;
  return (
    <section className="section-shell">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Offer structure</p>
        <h2 data-split>Choose the format that fits the occasion.</h2>
        <p>{page.hero.description}</p>
      </div>
      <div className="menu-grid">
        {page.categories.map((category) => (
          <article key={category.name} data-reveal>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <ul>
              {category.items.map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pathways() {
  return (
    <section className="section-shell">
      <div className="section-heading compact" data-reveal>
        <p className="eyebrow">Decision path</p>
        <h2 data-split>Three ways to begin without over-scoping the brief.</h2>
      </div>
      <div className="pathway-grid">
        {site.pages.menu.pathways.map((item) => (
          <article key={item.title} data-reveal>
            <Sparkles size={18} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Matrix() {
  return (
    <section className="matrix-section" data-reveal>
      <div>
        <p className="eyebrow">At a glance</p>
        <h2 data-split>Compare the practical shape of each option.</h2>
      </div>
      <div className="matrix-list">
        {site.pages.menu.matrix.map((row) => (
          <div key={row.label}>
            <strong>{row.label}</strong>
            <span>{row.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqList({
  items,
  title = "Questions that usually come up before the first call.",
}: {
  items: readonly { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="faq-section">
      <div className="section-heading compact" data-reveal>
        <p className="eyebrow">Useful details</p>
        <h2 data-split>{title}</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <article key={item.q} data-reveal>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="section-shell">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Principles</p>
        <h2 data-split>What the team protects on every project.</h2>
      </div>
      <div className="value-grid">
        {site.pages.about.values.map((item) => (
          <article key={item.title} data-reveal>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section">
      <div className="section-heading compact" data-reveal>
        <p className="eyebrow">Origin</p>
        <h2 data-split>A short record of how the practice formed.</h2>
      </div>
      <div className="timeline-list">
        {site.pages.about.timeline.map((item) => (
          <article key={item.year} data-reveal>
            <strong>{item.year}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section-shell">
      <div className="section-heading compact" data-reveal>
        <p className="eyebrow">People</p>
        <h2 data-split>The core team keeps the work personal and accountable.</h2>
      </div>
      <div className="team-grid">
        {site.pages.about.team.map((member) => (
          <article key={member.name} data-reveal>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Press() {
  return (
    <section className="press-section" data-reveal>
      <p className="eyebrow">Press fragments</p>
      <div>
        {site.pages.about.press.map((item) => (
          <blockquote key={item}>{item}</blockquote>
        ))}
      </div>
    </section>
  );
}

function ContactOptions() {
  return (
    <section className="section-shell">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Contact paths</p>
        <h2 data-split>Send the right kind of request to the right desk.</h2>
      </div>
      <div className="contact-card-grid">
        {site.pages.contact.contactCards.map((card) => (
          <article key={card.title} data-reveal>
            <MessageSquare size={18} aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="form-intro" data-reveal>
        <p className="eyebrow">Inquiry</p>
        <h2 data-split>Give us the shape of the request. We will reply with the next precise step.</h2>
        <div className="contact-meta">
          <p><MapPin size={16} aria-hidden="true" /> {site.address}</p>
          <p><Clock size={16} aria-hidden="true" /> {site.availability}</p>
          <p><CalendarDays size={16} aria-hidden="true" /> Replies are handled by a real coordinator.</p>
        </div>
      </div>
      <form className="contact-form" data-reveal>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" placeholder="Your name" />
          <span>Use the name we should address in the reply.</span>
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" placeholder="name@example.com" />
          <span>We only use this for your inquiry.</span>
        </label>
        <label>
          Request type
          <select name="subject" defaultValue="">
            <option value="" disabled>Select a subject</option>
            {site.pages.contact.formSubjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
          <span>Choose the closest fit. We can refine it later.</span>
        </label>
        <label>
          Notes
          <textarea name="notes" rows={5} placeholder="Timeline, location, party size, constraints, or questions" />
          <span>Share only what is useful for the first reply.</span>
        </label>
        <button className="button-primary" type="button" data-cursor="magnetic">
          Prepare inquiry
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}

function VisitNotes() {
  return (
    <section className="visit-section">
      <div className="section-heading compact" data-reveal>
        <p className="eyebrow">Before you arrive</p>
        <h2 data-split>Small details that make the first exchange better.</h2>
      </div>
      <div className="visit-list">
        {site.pages.contact.visit.map((item) => (
          <article key={item} data-reveal>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main className="page-shell">
      <Hero page={site.pages.home} />
      <ProofStrip />
      <FeatureBento
        title="A complete funnel, not a single impression."
        intro="Each section is designed to build attention, interest, desire, and action through concrete proof."
        items={site.pages.home.features}
      />
      <NarrativeRail
        title="Service choreography"
        intro="The experience is built as a sequence, with each step doing a specific job."
        items={site.pages.home.narrative}
      />
      <TestimonialBand />
      <GalleryBand />
      <FinalCta text={site.pages.home.finalCta} />
    </main>
  );
}

export function MenuPage() {
  return (
    <main className="page-shell">
      <Hero page={site.pages.menu} />
      <CategoryMenu />
      <Pathways />
      <Matrix />
      <NarrativeRail
        title="How to decide"
        intro="The best option is usually revealed by timing, risk, privacy, and appetite for depth."
        items={site.pages.menu.pathways}
      />
      <FaqList items={site.pages.menu.faqs} />
      <FinalCta text="A focused request is enough. The team will shape the scope before anything is confirmed." />
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="page-shell">
      <Hero page={site.pages.about} />
      <Values />
      <Timeline />
      <Team />
      <Press />
      <GalleryBand />
      <FinalCta text="The strongest work starts with a clear point of view and a disciplined first conversation." />
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="page-shell">
      <Hero page={site.pages.contact} />
      <ContactOptions />
      <ContactForm />
      <VisitNotes />
      <FaqList items={site.pages.contact.faqs} title="Answers before the coordinator replies." />
      <FinalCta text="Send the first signal. We will return with the clearest next move." />
    </main>
  );
}

import { Fragment } from 'react';
import { ArrowLongRightIcon, SparklesIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { SectionHeading } from '../components/section-heading';
import { CTAButton } from '../components/cta-button';
import { FeatureCard } from '../components/feature-card';
import { ProjectCard } from '../components/project-card';
import { StatHighlight } from '../components/stat-highlight';
import { TestimonialCard } from '../components/testimonial-card';

const features = [
  {
    title: 'Immersive product storytelling',
    description:
      'We translate complex product ecosystems into clear narratives that accelerate stakeholder alignment and customer engagement.',
    icon: <PlayCircleIcon className="h-6 w-6" />
  },
  {
    title: 'Modular design systems',
    description:
      'Component libraries that empower fast iteration, consistent brand expression, and seamless developer handoff.',
    icon: <SparklesIcon className="h-6 w-6" />
  },
  {
    title: 'Growth-focused experimentation',
    description:
      'Hypothesis-led experimentation backed by user research and product analytics to deliver measurable outcomes.',
    icon: <ArrowLongRightIcon className="h-6 w-6" />
  }
];

const projects = [
  {
    title: 'NebulaOS enterprise dashboard',
    description:
      'A future-facing control center for mission-critical workflows. We redesigned the entire enterprise experience with real-time insights and adaptive theming.',
    tags: ['Enterprise', 'Design System', 'AI'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sora health companion app',
    description:
      'A digital health assistant blending wearable data with proactive care recommendations and empathetic conversational UI.',
    tags: ['Healthcare', 'Mobile', 'Research'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Atlas climate intelligence',
    description:
      'Data storytelling for climate risk mitigation. We built dynamic scenario planning dashboards that unify satellite feeds and financial indicators.',
    tags: ['ClimateTech', 'Product Strategy', 'Data Viz'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
  }
];

const testimonials = [
  {
    name: 'Lena Moritz',
    role: 'Chief Product Officer, Vanta Labs',
    quote:
      'Aurora cracked our most complex workflow problem in two cycles. The design system they delivered has transformed how we ship products.',
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Oliver Grant',
    role: 'Founder, Northwind',
    quote:
      'Their team connected brand, product, and growth better than any partner we have ever worked with. It felt like adding a world-class design org overnight.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Priya Sharma',
    role: 'VP Experience, Helios',
    quote:
      'Aurora’s prototypes became the blueprint for our series C pitch. Investors called out the clarity and emotional resonance of the story.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80'
  }
];

const navLinks = ['Work', 'Capabilities', 'Approach', 'Insights', 'Contact'];

export default function HomePage() {
  return (
    <Fragment>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-indigo-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-highlight text-white">
              <span className="font-display text-xl">A</span>
            </div>
            <div className="flex flex-col text-xs uppercase tracking-[0.35em] text-white/70">
              <span>Aurora</span>
              <span>Studio</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <CTAButton href="#contact" label="Start a project" />
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 z-[-1] h-[720px] w-[720px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(124,58,237,0.35)_0%,rgba(5,6,22,0)_70%)]" />

        <section className="section" id="work">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pt-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
                  <span className="h-2 w-2 rounded-full bg-highlight" />
                  Premium design partner
                </span>
                <h1 className="font-display text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
                  Design systems and product stories that spark adoption.
                </h1>
                <p className="max-w-xl text-lg text-white/70">
                  We help visionary teams ship software that feels inevitable. From first sketch to scaled rollouts, our product strategists, designers, and storytellers move as one.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <CTAButton href="#contact" label="Book discovery" size="lg" />
                  <CTAButton href="#approach" label="See our approach" variant="secondary" size="lg" />
                </div>
                <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                  <StatHighlight value="+78%" label="Conversion lift" />
                  <StatHighlight value="54" label="Products launched" delay={0.1} />
                  <StatHighlight value="4.9/5" label="Partner rating" delay={0.2} />
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="glass relative flex w-full max-w-md flex-col gap-6 rounded-[32px] p-8 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.35em] text-white/60">Aurora Compass</span>
                    <span className="text-xs text-white/50">Issue #18</span>
                  </div>
                  <p className="text-xl leading-relaxed text-white/80">
                    A monthly perspective on product leadership, experimentation rituals, and the craft of designing for trust.
                  </p>
                  <form className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="rounded-2xl border border-white/15 bg-indigo-950/60 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-accent/90"
                    >
                      Join the letter
                      <ArrowLongRightIcon className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 sm:grid-cols-3 sm:p-8">
              {['IDEO alumnus', 'YC backed', 'Remote first'].map((item) => (
                <div key={item} className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/50">Credo</span>
                  <span className="font-display text-2xl text-white">{item}</span>
                </div>
              ))}
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="col-span-full flex flex-wrap items-center gap-5 text-sm text-white/50">
                {['Figma', 'Maze', 'Webflow', 'Playbook', 'Notion'].map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 px-4 py-2">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Capabilities"
              title="What we deliver"
              description="Strategy, design, and experimentation woven into one end-to-end partnership."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Approach"
              title="Obsessed with momentum"
              description="Every sprint is designed to unlock clarity. We research quickly, prototype fearlessly, and anchor decisions in measurable progress."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: '01. Immersion',
                  copy:
                    'We embed with your product, growth, and engineering leads to map the inflection points, blockers, and latent opportunities.'
                },
                {
                  title: '02. Prototyping',
                  copy:
                    'High-fidelity prototypes feed stakeholder narrative, user testing, and prioritization. Expect film-level storytelling and product realism.'
                },
                {
                  title: '03. Activation',
                  copy:
                    'Rollout-ready design systems, experiment roadmaps, and launch assets that get your team shipping faster than thought possible.'
                }
              ].map((step, index) => (
                <div key={step.title} className="glass flex flex-col gap-4 rounded-3xl p-8">
                  <span className="text-sm uppercase tracking-[0.35em] text-white/50">{step.title}</span>
                  <p className="text-base text-white/75">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Case studies"
              description="A sample of partnerships where we helped teams reimagine onboarding, accelerate product-market fit, and communicate moonshot visions."
            />
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} index={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Insights"
              title="Latest from the studio"
              description="Monthly essays on product leadership, research rituals, and building teams that ship the future."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Designing for continuous discovery',
                  date: 'Nov 05, 2025',
                  summary:
                    'A framework for weaving discovery into every sprint without sacrificing delivery velocity.'
                },
                {
                  title: 'Narrative-first product launches',
                  date: 'Oct 18, 2025',
                  summary:
                    'Turn go-to-market decks into immersive stories that investors and customers feel compelled to share.'
                },
                {
                  title: 'Instrumentation for experimentation',
                  date: 'Sep 29, 2025',
                  summary:
                    'How we pair qualitative rituals with instrumentation to validate bets faster.'
                }
              ].map((post) => (
                <article
                  key={post.title}
                  className="glass flex h-full flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/40">{post.date}</span>
                    <h3 className="font-display text-xl text-white">{post.title}</h3>
                    <p className="text-sm text-white/70">{post.summary}</p>
                  </div>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform hover:translate-x-1"
                  >
                    Read insight
                    <ArrowLongRightIcon className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Partners"
              title="Trusted by teams scaling the next era of software"
              description="We integrate with high-velocity startups and product orgs who believe design is the multiplier."
              align="center"
            />
            <div className="grid grid-cols-2 gap-6 text-sm text-white/40 sm:grid-cols-3 lg:grid-cols-6">
              {['Notion', 'Figma', 'Linear', 'Retool', 'Anthropic', 'Pitch'].map((brand) => (
                <div key={brand} className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-6">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <SectionHeading
              eyebrow="Testimonials"
              title="Words from partners"
              description="Evidence from founders and product leaders we have supported across fintech, climate, AI, and health."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
            <SectionHeading
              eyebrow="Collaborate"
              title="Let’s design the future of your product"
              description="Fill out the form and our strategy director will reach out within two days."
              align="center"
            />
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <form className="glass flex flex-col gap-6 rounded-3xl p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-white/70">
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ada Lovelace"
                      className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-white/70">
                    Work email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="team@company.com"
                      className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Aurora Studio"
                    className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  What challenge can we help with?
                  <textarea
                    name="challenge"
                    rows={4}
                    className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                    placeholder="Tell us about your project goals, timeline, and measures of success."
                  />
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-3 text-xs text-white/50">
                    <input type="checkbox" required className="h-4 w-4 rounded border border-white/20 bg-transparent" />
                    I agree to the privacy terms.
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-accent/90"
                  >
                    Submit request
                    <ArrowLongRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </form>
              <aside className="glass flex flex-col gap-6 rounded-3xl p-8 text-white/70">
                <SectionHeading
                  eyebrow="Options"
                  title="Flexible partnership models"
                  description="Choose from venture sprints, embedded design leadership, or end-to-end product transformation programs."
                />
                <div className="space-y-4 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">01 — Venture sprint</p>
                    <p className="mt-2 text-white/80">
                      6-week rapid immersion to validate or pivot your product narrative, metrics, and north star vision.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">02 — Embedded team</p>
                    <p className="mt-2 text-white/80">
                      Dedicated design leadership across research, product, and brand with direct access to Aurora partners.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">03 — Transformation</p>
                    <p className="mt-2 text-white/80">
                      A 12-week engagement to rebuild systems, rituals, and storytelling for scaling teams preparing for their next chapter.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-indigo-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-highlight text-white">
              <span className="font-display text-xl">A</span>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Aurora Studio</p>
          </div>
          <p>© {new Date().getFullYear()} Aurora Studio. Designing the software stories of tomorrow.</p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="transition-colors hover:text-white">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

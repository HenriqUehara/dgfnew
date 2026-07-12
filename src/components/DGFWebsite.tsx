import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./dgf/Logo";
import { dgfStyles } from "./dgf/dgf-styles";
import {
  companies,
  heroStats,
  navLinks,
  team,
  thesis,
  trackStats,
  type Company,
} from "./dgf/data";

const YOUTUBE_ID = "4MkpwqORuBY";
const CONTACT_EMAIL = "startups@dgf.com.br";
const PREQIN_URL = "https://www.lavca.org/dgf-investimentos-receives-top-pe-vc-ranking/";
const BLOOMBERG_URL = "https://www.bloomberglinea.com.br/startups/dgf-cresceu-com-apostas-em-software-no-brasil-agora-mira-oportunidade-maior-com-ia/";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li";
  className?: string;
  style?: CSSProperties;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`dgf-reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function DGFWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<"all" | "ativo" | "saida">("all");
  const [activeSection, setActiveSection] = useState("home");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.id), "contato"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const goTo = useCallback((id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  }, []);

  const activeCount = companies.filter((c) => c.type === "ativo").length;
  const exitCount = companies.filter((c) => c.type === "saida").length;
  const highlightCount = companies.filter((c) => c.highlight).length;

  const filtered: Company[] =
    filter === "all"
      ? companies.filter((c) => c.highlight)
      : filter === "saida"
        ? companies.filter((c) => c.type === "saida")
        : companies.filter((c) => c.type === "ativo");

  const othersCount = companies.filter((c) => c.type === "ativo" && !c.highlight).length;

  const filterOptions: { value: typeof filter; label: string; count: number }[] = [
    { value: "all", label: "All", count: highlightCount },
    { value: "ativo", label: "Active", count: activeCount },
    { value: "saida", label: "Exited", count: exitCount },
  ];

  return (
    <div className="dgf-root">
      <style dangerouslySetInnerHTML={{ __html: dgfStyles }} />
      <noscript>
        <style>{`.dgf-reveal{opacity:1 !important;transform:none !important;}`}</style>
      </noscript>

      <a className="dgf-skip" href="#conteudo">Skip to content</a>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />

      <nav className={`dgf-nav${scrolled ? " dgf-nav--scrolled" : ""}`} aria-label="Main">
        <button className="dgf-brand" onClick={() => goTo("home")} aria-label="DGF Investimentos — home">
          <Logo variant="white" height={22} decorative />
        </button>
        <div className="dgf-nav__links">
          {navLinks.map((l) => (
            <button
              key={l.id}
              className={`dgf-navlink${activeSection === l.id ? " dgf-navlink--active" : ""}`}
              aria-current={activeSection === l.id ? "true" : undefined}
              onClick={() => goTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="dgf-cta dgf-nav__cta" onClick={() => goTo("contato")}>Get in touch →</button>
        <button
          className="dgf-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="dgf-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="dgf-burger__bar" />
          <span className="dgf-burger__bar" />
          <span className="dgf-burger__bar" />
        </button>
      </nav>

      {menuOpen && (
        <div className="dgf-mobilemenu" id="dgf-mobile-menu">
          {navLinks.map((l) => (
            <button key={l.id} className="dgf-mobilemenu__link" onClick={() => goTo(l.id)}>{l.label}</button>
          ))}
          <button className="dgf-cta" onClick={() => goTo("contato")}>Get in touch →</button>
        </div>
      )}

      <main id="conteudo">
        <section id="home" className="dgf-hero">
          <div className="dgf-blob dgf-hero__blob" aria-hidden="true" />
          <div className="dgf-badge">
            <span className="dgf-badge__dot dgf-glow" aria-hidden="true" />
            <span style={{ letterSpacing: "0.04em" }}>25 years · São Paulo</span>
          </div>
          <h1 className="dgf-hero__title">
            <span className="dim">We back founders in</span> building companies{" "}
            <span className="serif dgf-grad-text">resilient</span>{" "}
            <span className="dim">across</span> market <span className="dim">cycles.</span>
          </h1>
          <p className="dgf-hero__sub">
            Shaping Latin America's venture capital ecosystem for over two decades through discipline and capital efficiency.
          </p>
          <div className="dgf-actions">
            <button className="dgf-btn dgf-btn--primary" onClick={() => goTo("portfolio")}>View portfolio</button>
            <button className="dgf-btn dgf-btn--ghost" onClick={() => goTo("sobre")}>Our story</button>
          </div>
          <dl className="dgf-hero__stats">
            {heroStats.map((s) => (
              <div className="dgf-hstat" key={s.label}>
                <dd className="dgf-hstat__num">{s.value}{s.suffix && <span className="suffix">{s.suffix}</span>}</dd>
                <dt className="dgf-hstat__label">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <section id="video" className="dgf-section dgf-section--dark">
          <div className="dgf-blob" aria-hidden="true" style={{ top: -120, left: "50%", transform: "translateX(-50%)", width: "min(700px, 90vw)", height: 350, background: "radial-gradient(ellipse, var(--green) 0%, transparent 70%)", opacity: 0.15, borderRadius: 0, filter: "blur(60px)" }} />
          <div className="dgf-container dgf-container--narrow">
            <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
              <p className="dgf-eyebrow dgf-eyebrow--light">Institutional Video</p>
              <h2 className="dgf-h2"><span className="serif" style={{ color: "var(--green-accent)" }}>Our</span> story</h2>
              <p className="dgf-lead" style={{ margin: "0 auto" }}>Get to know DGF, our journey and how we have built resilient companies for over 25 years.</p>
            </Reveal>
            <Reveal className="dgf-video__frame" delay={100}>
              {videoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                  title="DGF Institutional Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="dgf-video__facade"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play DGF institutional video"
                  style={{
                    backgroundImage: `linear-gradient(rgba(6,18,12,0.35), rgba(6,18,12,0.55)), url(https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="dgf-video__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
                </button>
              )}
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="dgf-section dgf-section--white">
          <div className="dgf-container dgf-about">
            <Reveal className="dgf-about__body">
              <p className="dgf-eyebrow">About the Firm</p>
              <h2 className="dgf-h2">Built for the long term.<br /><span className="serif" style={{ color: "var(--green)" }}>Aligned with founders.</span></h2>
              <p>Founded in 2001 by <strong>Sidney Chameh</strong>, DGF has weathered economic cycles, market shifts and model evolutions.</p>
              <p>Since 2012, our thesis is exclusively <strong>B2B software and capital-efficient models</strong>. That is where our expertise generates real value for founders building enduring companies.</p>
              <blockquote className="dgf-quote">
                <p className="serif">"Capturing alpha, not just beta."</p>
                <cite>DGF investment principle</cite>
              </blockquote>
            </Reveal>
            <Reveal delay={150}>
              <div className="dgf-about__cards">
                <div className="dgf-card-hero">
                  <div className="dgf-card-hero__blob" aria-hidden="true" />
                  <div style={{ position: "relative" }}>
                    <div style={{ marginBottom: 20 }}><Logo variant="white" height={22} decorative /></div>
                    <div className="dgf-card-num">2001</div>
                    <div className="dgf-card-label">Founded in São Paulo</div>
                  </div>
                </div>
                <div className="dgf-card-stat">
                  <div className="dgf-card-num">8<span className="accent">°</span></div>
                  <div className="dgf-card-label">Current fund</div>
                </div>
                <div className="dgf-card-stat">
                  <div className="dgf-card-num">#1</div>
                  <div className="dgf-card-label">Preqin — Emerging Markets</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="tese" className="dgf-section dgf-section--paper">
          <div className="dgf-container">
            <Reveal>
              <p className="dgf-eyebrow">Investment Thesis</p>
              <h2 className="dgf-h2">What we <span className="serif" style={{ color: "var(--green)" }}>look for</span>.</h2>
              <p className="dgf-lead" style={{ marginBottom: 48 }}>Capital-efficient business models with high gross margins, recurring revenue and founders who think about global scale from day one.</p>
            </Reveal>
            <div className="dgf-grid-3">
              {thesis.map((t, i) => (
                <Reveal key={t.n} delay={i * 60}>
                  <article className="dgf-thesis">
                    <div className="dgf-thesis__n">{t.n}</div>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="dgf-section dgf-section--dark">
          <div className="dgf-container">
            <div className="dgf-portfolio__head">
              <Reveal>
                <p className="dgf-eyebrow dgf-eyebrow--light">Portfolio</p>
                <h2 className="dgf-h2">Companies we <span className="serif" style={{ color: "var(--green-accent)" }}>believe in</span>.</h2>
                <p className="dgf-lead">Concentrated portfolio. 10 to 14 companies per fund.</p>
              </Reveal>
              <div className="dgf-filters" role="group" aria-label="Filter portfolio">
                {filterOptions.map((o) => (
                  <button key={o.value} className="dgf-filter" aria-pressed={filter === o.value} onClick={() => setFilter(o.value)}>
                    {o.label}<span className="dgf-filter__count">{o.count}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="dgf-cards">
              {filtered.length === 0 && <p className="dgf-empty">No companies in this filter.</p>}
              {filtered.map((c, i) => (
                <Reveal key={c.id} delay={Math.min(i * 40, 320)}>
                  <article className="dgf-cocard">
                    <div className={`dgf-cocard__badge${c.type === "saida" ? " dgf-cocard__badge--exit" : ""}`} aria-hidden="true">{c.ini}</div>
                    <div className="dgf-cocard__body">
                      <div className="dgf-cocard__name">{c.name}</div>
                      <div className="dgf-cocard__desc">{c.desc}</div>
                    </div>
                    <div className="dgf-cocard__foot">
                      <span className={`dgf-tag ${c.type === "ativo" ? "dgf-tag--ativo" : "dgf-tag--saida"}`}>{c.type === "ativo" ? "Active" : "Exited"}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
              {filter === "all" && (
                <Reveal delay={Math.min(filtered.length * 40, 320)}>
                  <button className="dgf-cocard dgf-cocard--cta" onClick={() => setFilter("ativo")}>
                    <div className="dgf-cocard__badge" aria-hidden="true">+</div>
                    <div className="dgf-cocard__body">
                      <div className="dgf-cocard__name">Other portfolio companies</div>
                      <div className="dgf-cocard__desc">Another {othersCount} companies make up DGF's active portfolio.</div>
                    </div>
                    <div className="dgf-cocard__foot"><span className="dgf-tag dgf-tag--ativo">View all →</span></div>
                  </button>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        <section id="track" className="dgf-section dgf-section--paper">
          <div className="dgf-container">
            <Reveal>
              <p className="dgf-eyebrow">Track Record</p>
              <h2 className="dgf-h2">25+ years of consistency<br />and <span className="serif" style={{ color: "var(--green)" }}>discipline</span>.</h2>
              <p className="dgf-lead" style={{ marginBottom: 24 }}>Performance validated by the market. Discipline that delivers leadership-level returns.</p>
              <p className="dgf-lead" style={{ marginBottom: 48 }}>We combine historical consistency and capital efficiency to position our funds among the top of Latin America's venture capital industry. With more than 25 years of experience, DGF was ranked by Preqin as the most consistent private capital manager in emerging markets, with a proven track record of top-quartile funds. We have navigated economic cycles delivering liquidity and solid returns to our investors, without ever losing alignment with founders.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="dgf-trackgrid">
                {trackStats.map((s) => (
                  <div key={s.label} className={`dgf-trackcard dgf-trackcard--${s.variant ?? "dark"}`}>
                    <div className="dgf-trackcard__blob" aria-hidden="true" />
                    <div className="dgf-trackcard__label">{s.label}</div>
                    <div className="dgf-trackcard__value">
                      <span className="dgf-trackcard__num">{s.value}</span>
                      {s.suffix && <span className="dgf-trackcard__suffix">{s.suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="dgf-sources">
                <a className="dgf-source" href={PREQIN_URL} target="_blank" rel="noreferrer">Preqin ranking (LAVCA) ↗</a>
                <a className="dgf-source" href={BLOOMBERG_URL} target="_blank" rel="noreferrer">Track record study — Bloomberg Línea ↗</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="time" className="dgf-section dgf-section--white">
          <div className="dgf-container">
            <Reveal>
              <p className="dgf-eyebrow">Team</p>
              <h2 className="dgf-h2">People who <span className="serif" style={{ color: "var(--green)" }}>build</span> alongside founders.</h2>
              <p className="dgf-lead" style={{ marginBottom: 48 }}>More than capital, active board presence: we support founders from traction to leadership, building resilience in the most challenging moments.</p>
            </Reveal>
            <div className="dgf-team">
              {team.map((p, i) => {
                const Tag = p.li ? "a" : "div";
                return (
                  <Reveal key={p.name} delay={Math.min(i * 60, 360)}>
                    <Tag className="dgf-teamcard" {...(p.li ? { href: p.li, target: "_blank", rel: "noreferrer" } : {})}>
                      <div className="dgf-teamcard__top">
                        <div className="dgf-teamcard__badge" aria-hidden="true">{p.ini}</div>
                        {p.li && (
                          <svg className="dgf-teamcard__li" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="dgf-teamcard__name">{p.name}</div>
                      <div className="dgf-teamcard__role">{p.role}</div>
                      {p.bio && <div className="dgf-teamcard__bio">{p.bio}</div>}
                    </Tag>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="dgf-section dgf-section--dark dgf-contact">
          <div className="dgf-blob dgf-contact__blob" aria-hidden="true" />
          <div className="dgf-container">
            <p className="dgf-eyebrow dgf-eyebrow--light">Contact</p>
            <h2 className="dgf-h2">Building something meaningful in <span className="serif" style={{ color: "var(--green-accent)" }}>B2B software</span>?</h2>
            <p className="dgf-contact__sub">Talk to our team. We evaluate every opportunity and are direct about what we can contribute.</p>
            <div className="dgf-contact__actions">
              <a className="dgf-btn dgf-btn--primary" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Investment opportunity — DGF")}`}>Send your deck</a>
              <button className="dgf-btn dgf-btn--ghost" onClick={() => goTo("track")}>View track record →</button>
            </div>
            <p className="dgf-contact__email">or write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </section>
      </main>

      <footer className="dgf-footer">
        <div style={{ opacity: 0.7 }}><Logo variant="white" height={22} decorative /></div>
        <nav className="dgf-footer__links" aria-label="Footer">
          <button className="dgf-footer__link" onClick={() => goTo("sobre")}>About</button>
          <button className="dgf-footer__link" onClick={() => goTo("portfolio")}>Portfolio</button>
          <button className="dgf-footer__link" onClick={() => goTo("contato")}>Contact</button>
          <a className="dgf-footer__link" href="https://www.linkedin.com/company/dgf-investimentos" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link className="dgf-footer__link" to="/cvm-disclosures">CVM Disclosures</Link>
        </nav>
        <div className="dgf-footer__rule" aria-hidden="true" />
        <div className="dgf-footer__copy">© {new Date().getFullYear()} DGF Investimentos · São Paulo</div>
      </footer>
    </div>
  );
}

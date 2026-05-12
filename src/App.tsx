import { useState } from 'react';
import { ArrowDown, Globe2 } from 'lucide-react';
import { copy, links, profile, projects, skillGroups, visualIcons, type Language, type Project } from './portfolioData';
import { trackPortfolioEvent } from './analytics';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = copy[language];

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    trackPortfolioEvent('language_changed', { language: nextLanguage });
  }

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sitthikorn Maneesut home">
          <span className="brand-mark">SM</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.nickname}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Page sections">
          <a href="#about">{t.nav.about}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#exploring">{t.nav.exploring}</a>
          <a href="#style">{t.nav.style}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="language-toggle" aria-label="Language selector">
          <Globe2 size={16} aria-hidden="true" />
          <button className={language === 'en' ? 'active' : ''} type="button" onClick={() => changeLanguage('en')}>
            EN
          </button>
          <button className={language === 'th' ? 'active' : ''} type="button" onClick={() => changeLanguage('th')}>
            TH
          </button>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="availability">{t.hero.available}</p>
          <h1>{profile.name}</h1>
          <p className="thai-name">{profile.thaiName} / {profile.nickname}</p>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-body">{t.hero.body}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              {t.hero.viewWork}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  className="button secondary"
                  href={link.href}
                  key={link.label}
                  onClick={() => trackPortfolioEvent(link.event)}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon size={17} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <PortfolioSignal language={language} />
      </section>

      <section className="section-block about-section" id="about">
        <SectionHeader title={t.about.title} body={t.about.body} />
        <div className="about-note">
          <span>SM</span>
          <p>{t.about.note}</p>
        </div>
      </section>

      <section className="section-block" id="work">
        <SectionHeader title={t.work.title} body={t.work.body} />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} language={language} project={project} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="section-block split-section" id="stack">
        <SectionHeader title={t.stack.title} body={t.stack.body} />
        <div className="skill-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title.en}>
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title[language]}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-block exploring-section" id="exploring">
        <SectionHeader title={t.exploring.title} body={t.exploring.body} />
        <div className="exploring-tools" aria-label={t.exploring.title}>
          {t.exploring.tools.map((tool) => (
            <article key={tool}>
              <span>{tool.slice(0, 2).toUpperCase()}</span>
              <h3>{tool}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block working-style" id="style">
        <SectionHeader title={t.style.title} />
        <div className="style-list">
          {t.style.items.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <p className="contact-email">{t.contact.email}: {profile.email}</p>
        </div>
        <div className="contact-actions">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                className="button contact-button"
                href={link.href}
                key={link.label}
                onClick={() => trackPortfolioEvent(link.event)}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon size={18} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, body }: { title: string; body?: string }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ProjectCard({ project, language, index }: { project: Project; language: Language; index: number }) {
  const projectCopy = project.copy[language];

  return (
    <article className="project-card">
      <div className="project-index">{String(index).padStart(2, '0')}</div>
      <div>
        <h3>{projectCopy.title}</h3>
        <p>{projectCopy.description}</p>
      </div>
      <dl>
        <div>
          <dt>{copy[language].work.contribution}</dt>
          <dd>{projectCopy.contribution}</dd>
        </div>
        <div>
          <dt>{copy[language].work.stack}</dt>
          <dd>{project.stack.join(' / ')}</dd>
        </div>
      </dl>
    </article>
  );
}

function PortfolioSignal({ language }: { language: Language }) {
  const visualCopy = copy[language].visual;

  return (
    <aside className="portfolio-signal" aria-label={visualCopy.label}>
      <div className="signal-topline">
        <span>{visualCopy.label}</span>
        <span>v1</span>
      </div>
      <div className="signal-rows">
        {visualCopy.lines.map((line, index) => {
          const Icon = visualIcons[index];
          return (
            <div className="signal-row" key={line}>
              <Icon size={18} aria-hidden="true" />
              <span>{line}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

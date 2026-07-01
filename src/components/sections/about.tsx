import {
  profile,
  tools,
  languages,
  softSkills,
  interests,
} from "@/content/portfolio";
import Reveal from "./reveal";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className="section" id="profil">
      <div className="container">
        <div className="section-head">
          <span className="index">02</span>
          <h2 className="section-title">Profil</h2>
        </div>

        <div className={styles.layout}>
          <Reveal className={styles.left}>
            <p className={styles.intro}>{profile.intro}</p>
            {profile.about.map((p, i) => (
              <p key={i} className={styles.para}>
                {p}
              </p>
            ))}

            <div className={styles.stats}>
              {profile.stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.right} delay={120}>
            <p className="eyebrow">Logiciels & expertise</p>
            <ul className={styles.tools}>
              {tools.map((t) => (
                <li key={t.name} className={styles.tool}>
                  <div className={styles.toolHead}>
                    <span className={styles.toolName}>{t.name}</span>
                    <span className={styles.toolLevel}>{t.level}</span>
                  </div>
                  <p className={styles.toolDetail}>{t.detail}</p>
                </li>
              ))}
            </ul>

            <p className={`eyebrow ${styles.blockLabel}`}>Langues</p>
            <ul className={styles.langs}>
              {languages.map((l) => (
                <li key={l.name} className={styles.lang}>
                  <span className={styles.langName}>{l.name}</span>
                  <span className={styles.langLevel}>{l.level}</span>
                </li>
              ))}
            </ul>

            <p className={`eyebrow ${styles.blockLabel}`}>Qualités</p>
            <div className={styles.tags}>
              {softSkills.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>

            <p className={`eyebrow ${styles.blockLabel}`}>Centres d&apos;intérêt</p>
            <div className={styles.tags}>
              {interests.map((s) => (
                <span key={s} className={`${styles.tag} ${styles.tagSoft}`}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

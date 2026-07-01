import { profile, tools } from "@/content/portfolio";
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
            <p className="eyebrow">Outils & expertise</p>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

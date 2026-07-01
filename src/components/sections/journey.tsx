import { experiences, education } from "@/content/portfolio";
import Reveal from "./reveal";
import styles from "./journey.module.css";

export default function Journey() {
  return (
    <section className="section" id="parcours">
      <div className="container">
        <div className="section-head">
          <span className="index">03</span>
          <h2 className="section-title">Parcours</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.col}>
            <p className="eyebrow">Expériences</p>
            <ul className={styles.timeline}>
              {experiences.map((exp, i) => (
                <Reveal as="li" key={i} delay={i * 90} className={styles.item}>
                  <span className={styles.period}>{exp.period}</span>
                  <div className={styles.body}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>
                      {exp.company} · {exp.location}
                    </p>
                    <p className={styles.desc}>{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <p className="eyebrow">Formation</p>
            <ul className={styles.timeline}>
              {education.map((ed, i) => (
                <Reveal as="li" key={i} delay={i * 90} className={styles.item}>
                  <span className={styles.period}>{ed.period}</span>
                  <div className={styles.body}>
                    <h3 className={styles.role}>{ed.degree}</h3>
                    <p className={styles.company}>{ed.school}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

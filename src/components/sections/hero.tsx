import { profile } from "@/content/portfolio";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg} aria-hidden />
      <div className={styles.gridlines} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{profile.title}</p>

        <h1 className={`display ${styles.name}`}>
          <span>{profile.firstName}</span>
          <span className={styles.last}>{profile.lastName}</span>
        </h1>

        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.meta}>
          <span>{profile.location}</span>
          <span className={styles.dot} />
          <span>ArchiCAD · SketchUp · Rendu 3D</span>
        </div>

        <div className={styles.actions}>
          <a href="#projets" className={styles.cta}>
            Voir mes projets
          </a>
          <a href="#contact" className={styles.ctaGhost}>
            Me contacter
          </a>
        </div>
      </div>

      <a href="#projets" className={styles.scroll} aria-label="Défiler">
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

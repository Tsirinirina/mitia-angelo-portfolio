"use client";

import { useEffect, useState } from "react";
import { projects, Project } from "@/content/portfolio";
import Reveal from "./reveal";
import styles from "./projects.module.css";

/** Visuel du projet : image réelle si fournie, sinon placeholder élégant. */
function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={project.title} className={styles.img} />;
  }
  return (
    <div className={styles.placeholder} data-cat={project.category}>
      <span className={styles.phCorner} />
      <span className={styles.phLabel}>{project.category}</span>
      <span className={styles.phTitle}>{project.title}</span>
      <span className={styles.phNote}>Rendu à venir</span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="section" id="projets">
      <div className="container">
        <div className="section-head">
          <span className="index">01</span>
          <h2 className="section-title">Réalisations</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 80}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
            >
              <button
                className={styles.cardBtn}
                onClick={() => setActive(p)}
                aria-label={`Voir ${p.title}`}
              >
                <div className={styles.frame}>
                  <ProjectVisual project={p} />
                  <span className={styles.year}>{p.year}</span>
                  <span className={styles.view}>Voir le projet</span>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.sub}>
                    {p.category} · {p.location}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className={styles.modal} onClick={() => setActive(null)}>
          <button className={styles.close} aria-label="Fermer">
            ✕
          </button>
          <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalVisual}>
              <ProjectVisual project={active} />
            </div>
            <div className={styles.modalText}>
              <p className="eyebrow">
                {active.category} — {active.year}
              </p>
              <h3 className={styles.modalTitle}>{active.title}</h3>
              <p className={styles.modalLoc}>{active.location}</p>
              <p className={styles.modalDesc}>{active.description}</p>
              <div className={styles.tools}>
                {active.tools.map((t) => (
                  <span key={t} className={styles.tool}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

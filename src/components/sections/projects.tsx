"use client";

import { useEffect, useState } from "react";
import { projects, Project, ProjectMedia } from "@/content/portfolio";
import Reveal from "./reveal";
import styles from "./projects.module.css";

const statusClass: Record<string, string> = {
  Terminé: styles.stDone,
  "En cours": styles.stProgress,
  Concept: styles.stConcept,
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/** Visuel de couverture (grille) : image réelle sinon placeholder. */
function Cover({ project }: { project: Project }) {
  if (project.cover) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.cover} alt={project.title} className={styles.img} />;
  }
  return (
    <div className={styles.placeholder}>
      <span className={styles.phCorner} />
      <span className={styles.phLabel}>{project.category}</span>
      <span className={styles.phTitle}>{project.title}</span>
      <span className={styles.phNote}>Rendu à venir</span>
    </div>
  );
}

/** Visuel d'un média (image ou vidéo) dans le carrousel. */
function MediaVisual({ media, title }: { media: ProjectMedia; title: string }) {
  if (media.src && media.kind === "video") {
    return (
      <video className={styles.media} src={media.src} poster={media.poster} controls playsInline />
    );
  }
  if (media.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={media.src} alt={`${title} — ${media.label}`} className={styles.media} />;
  }
  return (
    <div className={styles.placeholder}>
      <span className={styles.phCorner} />
      <span className={styles.phLabel}>{media.label}</span>
      <span className={styles.phTitle}>{media.kind === "video" ? "▶" : title}</span>
      <span className={styles.phNote}>
        {media.kind === "video" ? "Vidéo à venir" : "Rendu à venir"}
      </span>
    </div>
  );
}

/** Carrousel coulissant plein écran de tous les médias d'un projet. */
function MediaSlider({
  project,
  info,
}: {
  project: Project;
  info?: React.ReactNode;
}) {
  const media: ProjectMedia[] = project.media.length
    ? project.media
    : [{ kind: "image", label: project.category, src: project.cover }];

  const [i, setI] = useState(0);
  const count = media.length;
  const go = (n: number) => setI((p) => (p + n + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${i * 100}%)` }}>
          {media.map((m, idx) => (
            <div className={styles.slide} key={idx}>
              <MediaVisual media={m} title={project.title} />
            </div>
          ))}
        </div>

        <span className={styles.mediaTag}>
          {media[i].kind === "video" ? "Vidéo" : "Image"} · {media[i].label}
        </span>

        {count > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.prev}`}
              onClick={() => go(-1)}
              aria-label="Média précédent"
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.next}`}
              onClick={() => go(1)}
              aria-label="Média suivant"
            >
              ›
            </button>
            <span className={styles.counter}>
              {i + 1} / {count}
            </span>
          </>
        )}
      </div>

      <div className={styles.bottomBar}>
        {info}
        {count > 1 && (
          <div className={styles.thumbs}>
            {media.map((m, idx) => (
              <button
                key={idx}
                className={`${styles.thumb} ${idx === i ? styles.thumbActive : ""}`}
                onClick={() => setI(idx)}
                aria-label={m.label}
              >
                {m.src && m.kind === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.src} alt={m.label} />
                ) : (
                  <span className={styles.thumbPh}>{m.kind === "video" ? "▶" : "◱"}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
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
                  <Cover project={p} />
                  <span className={`${styles.status} ${statusClass[p.status] ?? ""}`}>
                    {p.status}
                  </span>
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

      {/* Lightbox plein écran : carrousel de médias + infos en surimpression */}
      {active && (
        <div className={styles.modal} onClick={() => setActive(null)}>
          <button className={styles.close} aria-label="Fermer">
            ✕
          </button>
          <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
            <MediaSlider
              key={active.id}
              project={active}
              info={
                <div className={styles.overlayInfo}>
                  <div className={styles.modalTop}>
                    <span
                      className={`${styles.status} ${statusClass[active.status] ?? ""}`}
                    >
                      {active.status}
                    </span>
                    <span className={styles.date}>
                      Créé le {formatDate(active.createdAt)}
                    </span>
                  </div>

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
              }
            />
          </div>
        </div>
      )}
    </section>
  );
}

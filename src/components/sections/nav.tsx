"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/portfolio";
import styles from "./nav.module.css";

const LINKS = [
  { href: "#projets", label: "Projets" },
  { href: "#profil", label: "Profil" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Accueil">
          <span className={styles.mark}>{initials}</span>
          <span className={styles.brandText}>{profile.lastName}</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.burger}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.b1 : ""} />
          <span className={open ? styles.b2 : ""} />
        </button>
      </div>
    </header>
  );
}

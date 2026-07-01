import { profile } from "@/content/portfolio";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}>{profile.fullName}</span>
        <span className={styles.copy}>
          © {profile.title} — Antananarivo, Madagascar
        </span>
        <a href="#top" className={styles.top}>
          Haut de page ↑
        </a>
      </div>
    </footer>
  );
}

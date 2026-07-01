import Link from "next/link";
import styles from "./status.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.text}>
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className={styles.link}>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

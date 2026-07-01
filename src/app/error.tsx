"use client";

import styles from "./status.module.css";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.code}>Oups</p>
        <h1 className={styles.title}>Une erreur est survenue</h1>
        <p className={styles.text}>
          Quelque chose s&apos;est mal passé. Vous pouvez réessayer.
        </p>
        <button className={styles.link} onClick={reset}>
          Réessayer
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { profile, socials } from "@/content/portfolio";
import styles from "./contact.module.css";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };
    if (!payload.email || !payload.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <p className="eyebrow">Contact</p>
            <h2 className={styles.title}>
              Un projet, une idée&nbsp;? <br />
              <span className={styles.accent}>Parlons-en.</span>
            </h2>
            <p className={styles.lead}>
              Disponible pour des collaborations, missions freelance et
              opportunités. Écrivez-moi et je vous réponds rapidement.
            </p>

            <ul className={styles.details}>
              <li>
                <span className={styles.dlabel}>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className={styles.dlabel}>Téléphone</span>
                <span>{profile.phones.join(" · ")}</span>
              </li>
              <li>
                <span className={styles.dlabel}>Adresse</span>
                <span>
                  {profile.address} — {profile.location}
                </span>
              </li>
            </ul>

            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span>Votre email</span>
              <input type="email" name="email" required placeholder="vous@exemple.com" />
            </label>
            <label className={styles.field}>
              <span>Sujet</span>
              <input type="text" name="subject" placeholder="Objet de votre message" />
            </label>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" rows={5} required placeholder="Décrivez votre projet…" />
            </label>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Envoi…" : "Envoyer le message"}
            </button>

            {status === "ok" && (
              <p className={`${styles.note} ${styles.noteOk}`}>
                Message envoyé — merci, je reviens vers vous très vite.
              </p>
            )}
            {status === "error" && (
              <p className={`${styles.note} ${styles.noteErr}`}>
                Une erreur est survenue. Réessayez ou écrivez-moi directement à{" "}
                {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

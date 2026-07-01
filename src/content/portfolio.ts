/* ============================================================
   CONTENU DU PORTFOLIO — Architecte / Ingénieur bâtiment
   ------------------------------------------------------------
   👉 C'est le SEUL fichier à éditer pour mettre à jour le site.
   Les images de projets sont vides ("") pour l'instant : le site
   affiche un placeholder élégant. Remplacez `image` par un chemin
   (ex: "/projects/villa-01.jpg" — fichier dans /public/projects).
   ============================================================ */

export type ProjectStatus = "Terminé" | "En cours" | "Concept";

/** Un média du projet (rendu). `src` vide => placeholder élégant. */
export type ProjectMedia = {
  kind: "image" | "video";
  label: string; // type du rendu : "Rez-de-chaussée", "Plan 3D", "Vidéo"…
  src: string; // "/projects/villa/plan-3d.jpg"  ou  ""  => placeholder
  poster?: string; // vignette pour une vidéo (optionnel)
};

export type Project = {
  id: string;
  title: string;
  category: string; // ex: "Résidentiel", "Tertiaire", "Intérieur"
  status: ProjectStatus; // état d'avancement
  createdAt: string; // date de création au format ISO (ex: "2025-03-12")
  year: string;
  location: string;
  description: string;
  tools: string[]; // logiciels de conception utilisés
  cover: string; // image d'illustration principale ("" => placeholder)
  media: ProjectMedia[]; // liste des rendus (images + vidéos) typés
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Tool = {
  name: string;
  level: string; // ex: "Expert", "Avancé"
  detail: string;
};

export const profile = {
  firstName: "Mitia Leon Angelo",
  lastName: "RAJAONARISON",
  fullName: "RAJAONARISON Mitia Leon Angelo",
  title: "Dessinateur Projeteur",
  subtitle: "Architecture & Paysagisme",
  tagline: "Du plan technique au rendu 3D photoréaliste.",
  location: "Antananarivo, Madagascar",
  address: "Lot IVY 152 H Ilanivato, Ampasika",
  email: "rajaonarisonmitialeonangelo@gmail.com",
  phones: ["034 59 937 48", "033 23 004 00"],
  licences: "Permis A / B",
  intro:
    "Étudiant diplômé en Architecture et Paysagisme, passionné par la conception et la représentation graphique des projets. Maîtrisant les outils CAO/DAO, la modélisation 3D et la réalisation de documents techniques, je souhaite intégrer une équipe afin de développer mes compétences en dessin architectural, conception et suivi de projet.",
  about: [
    "Titulaire d'une Licence en Architecture et Paysagisme de l'Université de Vakinankaratra (Antsirabe), j'ai construit mon parcours depuis un BEP en Génie Civil jusqu'à un Baccalauréat technique CCBTP.",
    "De la réalisation de plans de maisons d'habitation à la conception et la modélisation complète de bâtiments, je conçois des projets clairs, techniques et fidèles aux besoins des clients — avec une attention particulière au respect des normes.",
    "Ce portfolio rassemble mes réalisations : plans, modélisations 3D et rendus photoréalistes issus des logiciels CAO/DAO que je pratique au quotidien.",
  ],
  stats: [
    { value: "Bac+3", label: "Licence Archi. & Paysagisme" },
    { value: "4", label: "Projets réalisés" },
    { value: "6+", label: "Logiciels maîtrisés" },
  ],
};

export const socials = [
  { label: "Email", href: "mailto:rajaonarisonmitialeonangelo@gmail.com" },
  { label: "LinkedIn", href: "#" }, // TODO: ajoutez votre profil
  { label: "Behance", href: "#" }, // TODO: ajoutez votre portfolio en ligne
];

export const tools: Tool[] = [
  {
    name: "ArchiCAD",
    level: "Maîtrisé",
    detail: "Conception et modélisation de bâtiments, plans et documents techniques.",
  },
  {
    name: "SketchUp",
    level: "Maîtrisé",
    detail: "Modélisation 3D rapide, étude de volumes et d'aménagement.",
  },
  {
    name: "AutoCAD",
    level: "Maîtrisé",
    detail: "Dessin technique CAO/DAO, plans d'exécution et détails.",
  },
  {
    name: "Lumion",
    level: "Avancé",
    detail: "Mise en scène et rendus photoréalistes des projets.",
  },
  {
    name: "V-Ray",
    level: "Intermédiaire",
    detail: "Rendu réaliste : matériaux, lumière et ambiances.",
  },
  {
    name: "Microsoft Office",
    level: "Maîtrisé",
    detail: "Word, PowerPoint et Excel pour la documentation et le suivi.",
  },
];

export type Language = { name: string; level: string };
export const languages: Language[] = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Courant — écoute et écrit" },
  { name: "Anglais", level: "Niveau scolaire" },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Travail sous pression",
  "Endurance sur les grands projets",
  "Écoute et conseil client",
  "Dessin technique à main levée",
  "Autonomie",
];

export const interests: string[] = [
  "Basket-ball",
  "Architecture & design",
  "Modélisation 3D",
  "Dessin technique",
  "Voyage",
  "Jeux de stratégie",
];

export const projects: Project[] = [
  {
    id: "villa-nova",
    title: "Villa Nova",
    category: "Résidentiel",
    status: "Terminé",
    createdAt: "2026-07-01",
    year: "2026",
    location: "Madagascar",
    description:
      "Villa à l'architecture contemporaine : rendus extérieurs, façades, plans (RDC, R+1, fondation) et coupe technique. Un volume épuré travaillé du plan au rendu photoréaliste.",
    tools: ["ArchiCAD", "Lumion"],
    cover: "/projects/villa-nova/rendu-1-2.webp",
    media: [
      { kind: "image", label: "Rendu 1 & 2", src: "/projects/villa-nova/rendu-1-2.webp" },
      { kind: "image", label: "Rendu 3 & 4", src: "/projects/villa-nova/rendu-3-4.webp" },
      { kind: "image", label: "Façade 1", src: "/projects/villa-nova/facade-1.webp" },
      { kind: "image", label: "Façade 2", src: "/projects/villa-nova/facade-2.webp" },
      { kind: "image", label: "Plan RDC", src: "/projects/villa-nova/plan-rdc.webp" },
      { kind: "image", label: "Plan R+1", src: "/projects/villa-nova/plan-r1.webp" },
      { kind: "image", label: "Coupe AA", src: "/projects/villa-nova/coupe-aa.webp" },
      { kind: "image", label: "Plan de fondation", src: "/projects/villa-nova/plan-fondation.webp" },
    ],
    featured: true,
  },
  {
    id: "duplex-skylight",
    title: "Duplex Skylight",
    category: "Intérieur",
    status: "Terminé",
    createdAt: "2026-02-16",
    year: "2026",
    location: "Madagascar",
    description:
      "Duplex avec puits de lumière (skylight) : rendus photoréalistes du séjour, de la cuisine et de la mezzanine, complétés d'une vidéo de présentation 3D.",
    tools: ["SketchUp", "V-Ray", "Lumion"],
    cover: "/projects/duplex-skylight/rendu-1.webp",
    media: [
      { kind: "image", label: "Rendu 1", src: "/projects/duplex-skylight/rendu-1.webp" },
      { kind: "image", label: "Rendu 2", src: "/projects/duplex-skylight/rendu-2.webp" },
      { kind: "image", label: "Rendu 3", src: "/projects/duplex-skylight/rendu-3.webp" },
      { kind: "image", label: "Rendu 4", src: "/projects/duplex-skylight/rendu-4.webp" },
      { kind: "image", label: "Rendu 5", src: "/projects/duplex-skylight/rendu-5.webp" },
      { kind: "image", label: "Rendu 6", src: "/projects/duplex-skylight/rendu-6.webp" },
      { kind: "video", label: "Vidéo — Rendu 3D", src: "https://youtu.be/_CZhgIefPEM" },
    ],
  },
  {
    id: "bira-hub",
    title: "Bira Hub",
    category: "Tertiaire",
    status: "Terminé",
    createdAt: "2026-06-10",
    year: "2026",
    location: "Madagascar",
    description:
      "Conception d'un hub : traitement de l'entrée, du parvis et du parking. Modélisation 3D et rendus, accompagnés de planches de présentation du projet.",
    tools: ["ArchiCAD", "Lumion"],
    cover: "/projects/bira-hub/entree.webp",
    media: [
      { kind: "image", label: "Entrée", src: "/projects/bira-hub/entree.webp" },
      { kind: "image", label: "Avant la porte principale", src: "/projects/bira-hub/avant-porte.webp" },
      { kind: "image", label: "Parking", src: "/projects/bira-hub/parking.webp" },
      { kind: "image", label: "Présentation 1", src: "/projects/bira-hub/presentation-1.webp" },
      { kind: "image", label: "Présentation 2", src: "/projects/bira-hub/presentation-2.webp" },
      { kind: "image", label: "Présentation 3", src: "/projects/bira-hub/presentation-3.webp" },
      { kind: "image", label: "Présentation 4", src: "/projects/bira-hub/presentation-4.webp" },
      { kind: "image", label: "Présentation 5", src: "/projects/bira-hub/presentation-5.webp" },
      { kind: "image", label: "Présentation 6", src: "/projects/bira-hub/presentation-6.webp" },
      { kind: "image", label: "Présentation 7", src: "/projects/bira-hub/presentation-7.webp" },
    ],
  },
  {
    id: "maison-r1-56m2",
    title: "Maison d'habitation R+1 · 56 m²",
    category: "Résidentiel",
    status: "Terminé",
    createdAt: "2026-03-19",
    year: "2026",
    location: "Madagascar",
    description:
      "Maison d'habitation R+1 de 56 m² : plans de fondation, rez-de-chaussée et étage, avec une visite vidéo 3D du projet.",
    tools: ["ArchiCAD", "Lumion"],
    cover: "/projects/maison-r1-56m2/plan-rdc.webp",
    media: [
      { kind: "image", label: "Plan de fondation", src: "/projects/maison-r1-56m2/plan-fondation.webp" },
      { kind: "image", label: "Plan RDC", src: "/projects/maison-r1-56m2/plan-rdc.webp" },
      { kind: "image", label: "Plan R+1", src: "/projects/maison-r1-56m2/plan-r1.webp" },
      { kind: "video", label: "Vidéo — Visite 3D", src: "https://youtu.be/9cBbAf9mCO4" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Société A.I.DE — Antsirabe (Stage)",
    role: "Chargé de conception et modélisation d'un bâtiment",
    period: "Sept. 2024 — Nov. 2024",
    location: "Antsirabe",
    description:
      "Conception et modélisation d'un bâtiment en équipe. Travail sous pression sur un grand projet, avec maîtrise des logiciels de modélisation et de rendu photoréaliste (CAO/DAO, Lumion).",
  },
  {
    company: "Projet architectural individuel",
    role: "Dessinateur projeteur",
    period: "2023",
    location: "Antananarivo",
    description:
      "Réalisation du plan d'une maison d'habitation : écoute et conseil client, dessin technique et conception. Projet mené en autonomie, du plan à la finalisation.",
  },
  {
    company: "Projet individuel",
    role: "Dessinateur projeteur",
    period: "2021",
    location: "Antananarivo",
    description:
      "Réalisation du plan d'un bâtiment : accompagnement du client sur le respect des normes et bonne maîtrise du dessin technique.",
  },
];

export const education: Education[] = [
  {
    school: "Université de Vakinankaratra, Antsirabe",
    degree: "Licence en Architecture et Paysagisme",
    period: "2025",
  },
  {
    school: "LTP Mantasoa",
    degree: "Baccalauréat technique CCBTP",
    period: "2022",
  },
  {
    school: "LTP GC Mahamasina",
    degree: "BEP — Génie Civil",
    period: "2020",
  },
];

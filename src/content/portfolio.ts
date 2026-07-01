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
    { value: "3+", label: "Projets & expériences" },
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
    id: "villa-contemporaine",
    title: "Villa Contemporaine",
    category: "Résidentiel",
    status: "Terminé",
    createdAt: "2025-03-12",
    year: "2025",
    location: "Antananarivo",
    description:
      "Maison individuelle sur deux niveaux jouant sur les pleins et les vides. Grandes ouvertures, terrasse en porte-à-faux et volume épuré en béton et bois.",
    tools: ["ArchiCAD", "Rendu 3D"],
    cover: "",
    media: [
      { kind: "image", label: "Vue principale", src: "" },
      { kind: "image", label: "Rez-de-chaussée", src: "" },
      { kind: "image", label: "Plan 3D", src: "" },
      { kind: "image", label: "Façade nuit", src: "" },
      { kind: "video", label: "Vidéo de présentation", src: "" },
    ],
    featured: true,
  },
  {
    id: "immeuble-mixte",
    title: "Immeuble Mixte R+4",
    category: "Tertiaire",
    status: "En cours",
    createdAt: "2024-11-05",
    year: "2024",
    location: "Analakely",
    description:
      "Programme mixte commerces / bureaux avec façade rythmée par des brise-soleil verticaux. Étude d'implantation et modélisation complète du gros œuvre.",
    tools: ["ArchiCAD"],
    cover: "",
    media: [
      { kind: "image", label: "Perspective rue", src: "" },
      { kind: "image", label: "Plan de masse", src: "" },
      { kind: "image", label: "Coupe", src: "" },
    ],
  },
  {
    id: "amenagement-interieur",
    title: "Aménagement Intérieur",
    category: "Intérieur",
    status: "Terminé",
    createdAt: "2024-06-20",
    year: "2024",
    location: "Ivandry",
    description:
      "Réaménagement d'un séjour ouvert : cuisine, salle à manger et coin salon. Ambiance chaleureuse en teintes naturelles, éclairage indirect.",
    tools: ["SketchUp", "Rendu 3D"],
    cover: "",
    media: [
      { kind: "image", label: "Séjour", src: "" },
      { kind: "image", label: "Cuisine", src: "" },
      { kind: "image", label: "Plan 3D", src: "" },
    ],
  },
  {
    id: "villa-piscine",
    title: "Villa avec Piscine",
    category: "Résidentiel",
    status: "Terminé",
    createdAt: "2023-09-01",
    year: "2023",
    location: "Ambohibao",
    description:
      "Résidence de plain-pied ouverte sur un patio et un bassin. Continuité intérieur-extérieur, larges baies vitrées et pergola bioclimatique.",
    tools: ["SketchUp", "ArchiCAD"],
    cover: "",
    media: [
      { kind: "image", label: "Vue piscine", src: "" },
      { kind: "image", label: "Rez-de-chaussée", src: "" },
      { kind: "image", label: "Patio", src: "" },
    ],
  },
  {
    id: "boutique-concept",
    title: "Boutique Concept",
    category: "Commercial",
    status: "Concept",
    createdAt: "2023-04-15",
    year: "2023",
    location: "Antaninarenina",
    description:
      "Concept-store en rez-de-chaussée : mise en valeur des produits par un parcours client fluide et un jeu de matériaux bruts et de laiton.",
    tools: ["SketchUp", "Rendu 3D"],
    cover: "",
    media: [
      { kind: "image", label: "Vitrine", src: "" },
      { kind: "image", label: "Intérieur", src: "" },
    ],
  },
  {
    id: "pavillon-jardin",
    title: "Pavillon de Jardin",
    category: "Paysage",
    status: "Terminé",
    createdAt: "2022-07-10",
    year: "2022",
    location: "Talatamaty",
    description:
      "Petite structure légère en bois lamellé pour recevoir et se détendre. Toiture inclinée, ossature apparente et intégration paysagère douce.",
    tools: ["SketchUp"],
    cover: "",
    media: [
      { kind: "image", label: "Perspective", src: "" },
      { kind: "image", label: "Plan 3D", src: "" },
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

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
  fullName: "Mitia Leon Angelo RAJAONARISON",
  title: "Architecte · Concepteur 3D",
  tagline: "Concevoir des espaces qui ont du sens.",
  location: "Antananarivo, Madagascar",
  email: "parajaonarison@gmail.com",
  phones: ["+261 32 92 281 72", "+261 38 37 240 20"],
  // TODO: ajustez ce résumé à votre parcours réel
  intro:
    "Architecte passionné par la conception d'espaces contemporains, je transforme les idées en projets tangibles à travers la modélisation et le rendu 3D. De l'esquisse au rendu photoréaliste, je conçois des bâtiments et des aménagements qui allient esthétique, fonction et lumière.",
  about: [
    "Mon travail commence par une intention : comprendre un lieu, un usage, une lumière — puis lui donner forme. J'aime le moment où un volume abstrait devient un espace que l'on peut habiter du regard.",
    "Je maîtrise la chaîne complète de la conception 3D : modélisation sous ArchiCAD et SketchUp, mise en scène et rendu, jusqu'aux planches de présentation destinées aux clients et aux concours.",
    "Ce portfolio est une exposition de mes réalisations : chaque projet raconte une recherche de proportion, de matière et d'ambiance.",
  ],
  stats: [
    { value: "20+", label: "Projets modélisés" },
    { value: "5", label: "Années de pratique 3D" },
    { value: "100%", label: "Rendus sur mesure" },
  ],
};

export const socials = [
  { label: "Email", href: "mailto:parajaonarison@gmail.com" },
  { label: "LinkedIn", href: "#" }, // TODO
  { label: "Behance", href: "#" }, // TODO
  { label: "Instagram", href: "#" }, // TODO
];

export const tools: Tool[] = [
  {
    name: "ArchiCAD",
    level: "Expert",
    detail: "Modélisation BIM, documentation technique, plans et coupes.",
  },
  {
    name: "SketchUp",
    level: "Expert",
    detail: "Conception rapide de volumes, étude de masse et d'aménagement.",
  },
  {
    name: "Rendu 3D",
    level: "Avancé",
    detail: "Mise en scène, matériaux, éclairage et rendus photoréalistes.",
  },
  {
    name: "Dessin technique",
    level: "Avancé",
    detail: "Plans d'exécution, détails constructifs et mises au propre.",
  },
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
  // TODO: remplacez par vos expériences réelles en architecture
  {
    company: "Agence / Freelance",
    role: "Architecte · Concepteur 3D",
    period: "2023 — Présent",
    location: "Antananarivo",
    description:
      "Conception et modélisation 3D de projets résidentiels et tertiaires, de l'esquisse aux planches de présentation client.",
  },
  {
    company: "Bureau d'études",
    role: "Dessinateur-projeteur",
    period: "2021 — 2023",
    location: "Antananarivo",
    description:
      "Réalisation de plans techniques, coupes et perspectives 3D en appui aux architectes du bureau.",
  },
];

export const education: Education[] = [
  // TODO: renseignez votre formation réelle
  {
    school: "Établissement d'enseignement supérieur",
    degree: "Formation en Architecture / Bâtiment",
    period: "20XX — 20XX",
  },
];

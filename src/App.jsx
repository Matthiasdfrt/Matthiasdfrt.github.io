import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  Search, 
  X,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  Sun,
  Moon,
  Languages,
  Layout,
  Server,
  PenTool,
  Cpu,
  Globe, 
  Wrench,
  Briefcase, 
  Calendar,
  ExternalLink 
} from 'lucide-react';

// --- HOOK UTILITAIRE POUR LA TAILLE D'ÉCRAN ---
function useMedia(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
}

// --- CONTENU ET TRADUCTIONS ---

const CONTENT = {
  fr: {
    hero: {
      subtitle: "Étudiant en Data Science",
      scroll: "Scrollez pour explorer"
    },
    about: {
      title: "À PROPOS DE MOI",
      desc1: "Passionné par l'informatique et les nouvelles technologies, je suis actuellement en BUT Sciences des Données à l'IUT de Lisieux.",
      desc2: "Mon ambition est de poursuivre mes études dans le domaine de l'Intelligence Artificielle et du Machine Learning, ou dans le développement logiciel.",
      stats_years: "Années d'études en Sciences des Données",
      stats_projects: "Années d'études en informatique",
      stack_title: "Stack Technique"
    },
    experience: {
      title: "EXPÉRIENCE",
      subtitle: "Mon parcours professionnel."
    },
    projects: {
      title: "PROJETS",
      subtitle: "Exploration de mes travaux récents.",
      search_placeholder: "Rechercher un projet...",
      filter_all: "Tous",
      no_results: "Aucun projet ne correspond à votre recherche.",
      details_btn: "Détails",
      modal_about: "À propos du projet",
      modal_repo: "Voir le Repo",
      modal_website: "Voir le Site", // NOUVEAU
      modal_stack: "Stack Technique",
      modal_infos: "Infos",
      modal_year: "Année",
      modal_domain: "Domaine"
    },
    contact: {
      title: "MES",
      title_highlight: "COORDONNÉES",
      email_sub: "Me contacter",
      linkedin_sub: "Mon réseau",
      github_sub: "Mon code",
      footer: "© 2025 Matthias Defretin. Fait avec React & Tailwind."
    }
  },
  en: {
    hero: {
      subtitle: "Data Science Student",
      scroll: "Scroll to explore"
    },
    about: {
      title: "ABOUT ME",
      desc1: "Passionate about computer science and new technologies, I am currently pursuing a Bachelor's degree in Data Science at IUT de Lisieux.",
      desc2: "My ambition is to further my studies in the field of Artificial Intelligence and Machine Learning, or in software development.",
      stats_years: "Years of Studies in Data Science",
      stats_projects: "Years of Studies in Computer Science",
      stack_title: "Tech Stack"
    },
    experience: {
      title: "EXPERIENCE",
      subtitle: "My professional journey."
    },
    projects: {
      title: "PROJECTS",
      subtitle: "Exploring my recent work.",
      search_placeholder: "Search for a project...",
      filter_all: "All",
      no_results: "No projects match your search.",
      details_btn: "Details",
      modal_about: "About the Project",
      modal_repo: "View Repo",
      modal_website: "Visit Website", // NOUVEAU
      modal_stack: "Tech Stack",
      modal_infos: "Info",
      modal_year: "Year",
      modal_domain: "Domain"
    },
    contact: {
      title: "MY",
      title_highlight: "CONTACTS",
      email_sub: "Contact me",
      linkedin_sub: "My network",
      github_sub: "My code",
      footer: "© 2025 Matthias Defretin. Built with React & Tailwind."
    }
  }
};

// --- NOUVELLES DONNÉES : EXPÉRIENCE ---
const EXPERIENCES_DATA = [
  {
    id: 1,
    role: { fr: "Alternant Data Analyst", en: "Data Analyst Apprentice" },
    company: "SCANORMANDE",
    website: "https://www.scanormande.leclerc",
    period: { fr: "Sept 2025 - Ajd", en: "Sept 2025 - Present" },
    description: {
      fr: "Analyse et exploitation des données logistiques, commerciales et opérationnelles de la SCANORMANDE grâce aux outils Qlik Sense et NPrinting. Accompagnement des utilisateurs, conception de tableaux de bord et production de KPI pour le pilotage des différentes activités.",
      en: "Analysis and exploitation of logistical, commercial, and operational data for SCANORMANDE using Qlik Sense and NPrinting. User support, dashboard design, and KPI production to facilitate activity monitoring and decision-making."
    },
    technologies: ["Qlik Sense", "NPrinting", "Excel", "GitLab", "GCP"]
  },
  {
    id: 2,
    role: { fr: "Assistant Data Analyst (CDD)", en: "Assistant Data Analyst (Fixed-term contract)" },
    company: "SCANORMANDE",
    website: "https://www.scanormande.leclerc",
    period: { fr: "Juil 2025 - Août 2025", en: "July 2025 - Aug 2025" },
    description: {
      fr: "Analyse et exploitation des données logistiques, commerciales et opérationnelles de la SCANORMANDE grâce aux outils Qlik Sense et NPrinting. Accompagnement des utilisateurs, conception de tableaux de bord et production de KPI pour le pilotage des différentes activités.",
      en: "Analysis and exploitation of logistical, commercial, and operational data for SCANORMANDE using Qlik Sense and NPrinting. User support, dashboard design, and KPI production to facilitate activity monitoring and decision-making."
    },
    technologies: ["Qlik Sense", "NPrinting", "Excel"]
  },
  {
    id: 3,
    role: { fr: "Stagiaire Data Analyst", en: "Data Analyst Intern" },
    company: "SCANORMANDE",
    website: "https://www.scanormande.leclerc",
    period: { fr: "Avr 2025 - Juin 2025", en: "Apr 2025 - Jun 2025" },
    description: {
      fr: "Analyse et exploitation des données logistiques, commerciales et opérationnelles de la SCANORMANDE grâce aux outils Qlik Sense et NPrinting. Accompagnement des utilisateurs, conception de tableaux de bord et production de KPI pour le pilotage des différentes activités.",
      en: "Analysis and exploitation of logistical, commercial, and operational data for SCANORMANDE using Qlik Sense and NPrinting. User support, dashboard design, and KPI production to facilitate activity monitoring and decision-making."
    },
    technologies: ["Qlik Sense", "NPrinting", "Excel"]
  }
];

// --- COMPÉTENCES AVEC ICONES ---
const SKILLS = [
  { 
    category: "Machine Learning & IA",
    icon: Brain,
    items: ["Scikit-Learn", "PyTorch", "Deep Learning", "Computer Vision", "NLP"] 
  },
  { 
    category: "Langages & Web", 
    icon: Code2,
    items: ["Python", "Java", "C", "PHP", "JS / HTML / CSS"] 
  },
  { 
    category: "Data & Viz", 
    icon: BarChart3,
    items: ["R", "SAS", "Tableau", "Qlik", "Pandas"] 
  },
  { 
    category: "Bases de Données", 
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Neo4J", "Redis", "SQLite"] 
  },
  { 
    category: "Outils & Env", 
    icon: Terminal,
    items: ["Git / GitHub / GitLab", "GCP", "Linux / Unix", "LaTeX", "Docker"] 
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: { fr: "Analyse et conception d'un outil décisionnel", en: "Analysis and Design of a Decision Support Tool" },
    shortDesc: { 
      fr: "Création d'un outils de visualisation de données Universitaire grâce a Flask et Chart.js.",
      en: "Creation of a University data visualization tool using Flask and Chart.js." 
    },
    description: {
      fr: "World UniRank est une application web interactive développée dans le cadre de la SAÉ 5.VCOD.01 (BUT Informatique, Semestre 5). Elle analyse : le classement mondial Times Higher Education (THE) sur 10 ans (2016–2025), les facteurs socio-économiques des pays (PIB, alphabétisation, parité, ouverture internationale), la relation entre ces déterminants et les performances universitaires. L'objectif : comprendre la dynamique mondiale de l’enseignement supérieur.",
      en: "World UniRank is an interactive web application developed as part of the SAÉ 5.VCOD.01 (BUT Informatique, Semester 5). It analyzes: the Times Higher Education (THE) world ranking over 10 years (2016–2025), socio-economic factors of countries (GDP, literacy, parity, international openness), and the relationship between these determinants and university performance. The goal: to understand the global dynamics of higher education."
    },
    tags: ["Web", "Flask", "Visualization"],
    repoUrl: "https://github.com/Matthiasdfrt/Analyse-et-conception-d-un-outil-decisionnel.git",
    websiteUrl: "https://example.com/demo-world-unirank", // AJOUTEZ VOTRE LIEN ICI (laisser null ou vide si pas de lien)
    techStack: ["Python", "Flask", "Chart.js", "Bootstrap", "SQLAlchemy"],
    date: "2025"
  },
  {
    id: 2,
    title: { fr: "Developpement d'un composant d'une solution décisionnelle", en: "Development of a Component of a Decision Support Solution" },
    shortDesc: {
      fr: "Création d'un site pour visualiser les différents indicateurs sociaux et économiques de différents pays.",
      en: "Creation of a website to visualize various social and economic indicators of different countries."
    },
    description: {
      fr: "Développement d'un outils de visualisation en PHP et Javascript pour visualiser les différents indicateurs sociaux et économiques de différents pays. Le projet inclut la création d'une interface utilisateur interactive avec des graphiques dynamiques pour faciliter l'analyse des données.",
      en: "Development of a visualization tool in PHP and JavaScript to display various social and economic indicators of different countries. The project includes creating an interactive user interface with dynamic charts to facilitate data analysis."
    },
    tags: ["Web", "PHP", "Visualization"],
    repoUrl: "https://github.com/Matthiasdfrt/SAE-Developpement-d-un-composant-d-une-solution-decisionnelle.git",
    websiteUrl: "https://datamondial.alwaysdata.net/index.php?page=home", // AJOUTEZ VOTRE LIEN ICI
    techStack: ["PHP", "JavaScript", "Chart.js", "CSS", "HTML", "SQL"],
    date: "2025"
  },
  {
    id: 3,
    title: { fr: "Plus dans le futur", en: "More in the Future" },
    shortDesc: {
      fr: "Ce site est encore en développement.",
      en: "This site is still under development."
    },
    description: {
      fr: "A venir",
      en: "Coming soon"
    },
    tags: ["R", "LaTeX"],
    repoUrl: "#",
    websiteUrl: null, // Pas de lien pour celui-ci
    techStack: ["SOON"],
    date: "2025"
  },
  {
    id: 4,
    title: { fr: "A venir", en: "Coming Soon" },
    shortDesc: {
      fr: "Ce site est encore en développement.",
      en: "This site is still under development."
    },
    description: {
      fr: "A venir",
      en: "Coming soon"
    },
    tags: ["Data Viz", "SQL"],
    repoUrl: "#",
    websiteUrl: null,
    techStack: ["SOON"],
    date: "2025"
  }
];

const ALL_TAGS = ["Tous", ...Array.from(new Set(PROJECTS_DATA.flatMap(p => p.tags)))];

// --- COMPOSANTS ---

const Section = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`w-full max-w-6xl mx-auto px-6 py-20 ${className}`}
  >
    {children}
  </motion.div>
);

const ProjectModal = ({ project, onClose, lang, isDark }) => {
  if (!project) return null;
  const t = CONTENT[lang].projects;

  // Styles dynamiques pour la modale
  const modalBg = isDark ? "bg-zinc-900 border-zinc-700" : "bg-white border-zinc-200";
  const textTitle = isDark ? "text-emerald-400" : "text-emerald-600";
  const textBody = isDark ? "text-zinc-300" : "text-zinc-600";
  const textHeading = isDark ? "text-white" : "text-zinc-900";
  const tagBg = isDark ? "bg-zinc-800 text-emerald-200" : "bg-zinc-100 text-emerald-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className={`${modalBg} border w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl`}
      >
        <div className={`flex justify-between items-center p-6 border-b ${isDark ? 'border-zinc-800 bg-zinc-900/95' : 'border-zinc-200 bg-white/95'} sticky top-0 backdrop-blur z-10`}>
          <h2 className={`text-2xl font-mono font-bold ${textTitle}`}>{project.title[lang]}</h2>
          <button onClick={onClose} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-zinc-500 hover:text-black'}`}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row p-6 gap-8">
          {/* Colonne Gauche */}
          <div className="md:w-2/3 space-y-6">
            <div className="prose max-w-none">
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${textHeading}`}>
                <Terminal size={20} className="text-emerald-500" /> 
                {t.modal_about}
              </h3>
              <p className={`leading-relaxed text-lg ${textBody}`}>
                {project.description[lang]}
              </p>
            </div>
          </div>

          {/* Colonne Droite */}
          <div className={`md:w-1/3 space-y-6 border-t md:border-t-0 md:border-l ${isDark ? 'border-zinc-800' : 'border-zinc-200'} md:pl-8 pt-6 md:pt-0`}>
            
            {/* BOUTON REPO (GITHUB) */}
            <a 
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded transition-all transform hover:scale-[1.02] shadow-lg"
            >
              <Github size={20} />
              {t.modal_repo}
            </a>

            {/* BOUTON WEBSITE (Optionnel) */}
            {project.websiteUrl && (
               <a 
               href={project.websiteUrl}
               target="_blank"
               rel="noreferrer"
               className={`flex items-center justify-center gap-3 w-full mt-3 font-bold py-3 px-4 rounded transition-all transform hover:scale-[1.02] shadow-lg ${isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-900'}`}
             >
               <Globe size={20} />
               {t.modal_website}
             </a>
            )}

            <div>
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">{t.modal_stack}</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={`${tagBg} border ${isDark ? 'border-emerald-500/20' : 'border-emerald-500/30'} px-3 py-1.5 rounded text-sm flex items-center gap-2`}>
                    <Code2 size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">{t.modal_infos}</h4>
              <div className={`space-y-2 ${textBody}`}>
                <div className="flex justify-between">
                  <span>{t.modal_year}</span>
                  <span className={`font-mono ${textHeading}`}>{project.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.modal_domain}</span>
                  <span className={`font-mono ${textHeading}`}>{project.tags[0]}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const [isDark, setIsDark] = useState(true);
  
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);
  
  // State pour le carousel des compétences
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // State pour le carousel des expériences
  const [currentExpIndex, setCurrentExpIndex] = useState(0);

  // Détection mobile/desktop pour le carousel
  const isDesktop = useMedia("(min-width: 768px)");

  // Textes actuels basés sur la langue
  const t = CONTENT[lang];
  
  // Navigation du carousel compétences
  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % SKILLS.length);
  };
  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + SKILLS.length) % SKILLS.length);
  };

  // Navigation du carousel expériences
  const nextExp = () => {
    setCurrentExpIndex((prev) => (prev + 1) % EXPERIENCES_DATA.length);
  };
  const prevExp = () => {
    setCurrentExpIndex((prev) => (prev - 1 + EXPERIENCES_DATA.length) % EXPERIENCES_DATA.length);
  };

  // Tag "Tous" traduit dynamiquement pour le filtre
  const activeFilterLabel = activeFilter === "Tous" ? t.projects.filter_all : activeFilter;

  // Filtrage dynamique
  useEffect(() => {
    let result = PROJECTS_DATA;

    if (activeFilter !== "Tous") {
      result = result.filter(p => p.tags.includes(activeFilter));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title[lang].toLowerCase().includes(q) || 
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    setFilteredProjects(result);
  }, [activeFilter, searchQuery, lang]);

  // Classes dynamiques basées sur le thème
  const theme = {
    bg: isDark ? "bg-zinc-950" : "bg-gray-50",
    textPrimary: isDark ? "text-zinc-100" : "text-gray-900",
    textSecondary: isDark ? "text-zinc-400" : "text-gray-600",
    cardBg: isDark ? "bg-zinc-900" : "bg-white",
    cardBorder: isDark ? "border-zinc-800" : "border-gray-200",
    cardHoverBorder: isDark ? "hover:border-emerald-500/50" : "hover:border-emerald-500/50",
    inputBg: isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200",
    nestedCardBg: isDark ? "bg-white/5" : "bg-black/5", 
    gridGradient: isDark 
      ? 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)'
      : 'linear-gradient(#d1fae5 1px, transparent 1px), linear-gradient(90deg, #d1fae5 1px, transparent 1px)' 
  };

  // Helper pour afficher l'icône courante
  const CurrentSkillIcon = SKILLS[currentSkillIndex].icon;

  return (
    <div className={`min-h-screen font-sans selection:bg-emerald-500/30 transition-colors duration-300 ${theme.bg} ${theme.textPrimary}`}>
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none transition-all duration-500" 
           style={{ backgroundImage: theme.gridGradient, backgroundSize: '40px 40px' }}>
      </div>

      {/* --- SETTINGS BAR (TOP RIGHT) --- */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        {/* Lang Toggle */}
        <button 
          onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all ${isDark ? 'bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800' : 'bg-white/80 border-gray-200 hover:bg-gray-100'}`}
        >
          <Languages size={18} className="text-emerald-500" />
          <span className="font-mono text-sm font-bold">{lang.toUpperCase()}</span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDark(d => !d)}
          className={`p-2 rounded-full border shadow-lg backdrop-blur-md transition-all ${isDark ? 'bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 text-yellow-400' : 'bg-white/80 border-gray-200 hover:bg-gray-100 text-zinc-600'}`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-8xl font-bold font-mono tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-white to-zinc-400' : 'from-zinc-900 to-zinc-600'}`}>
            MATTHIAS <span className="text-emerald-500">DEFRETIN</span>
          </h1>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
          <h2 className={`text-xl md:text-3xl font-light flex items-center justify-center gap-3 ${theme.textSecondary}`}>
            <span className="animate-pulse text-emerald-500">&gt;_</span> {t.hero.subtitle}
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${isDark ? 'border-zinc-600' : 'border-zinc-400'}`}>
            <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <Section className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column (Description) */}
          <div className={`${theme.cardBg} p-8 rounded-2xl border ${theme.cardBorder} backdrop-blur-sm shadow-sm flex flex-col h-full`}>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-emerald-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold font-mono">{t.about.title}</h2>
            </div>
            
            <div className="space-y-4 flex-grow">
              <p className={`${theme.textSecondary} text-lg leading-relaxed`}>
                {t.about.desc1}
              </p>
              <p className={`${theme.textSecondary} text-lg leading-relaxed`}>
                {t.about.desc2}
              </p>
            </div>
            
            {/* Stats alignés en bas */}
            <div className="flex gap-4 pt-8 mt-auto">
               <div className={`${theme.nestedCardBg} p-4 rounded-xl flex-1 text-center`}>
                 <div className={`text-3xl font-bold mb-1 ${theme.textPrimary}`}>3</div>
                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{t.about.stats_years}</div>
               </div>
               <div className={`${theme.nestedCardBg} p-4 rounded-xl flex-1 text-center`}>
                 <div className={`text-3xl font-bold mb-1 ${theme.textPrimary}`}>2</div>
                 <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{t.about.stats_projects}</div>
               </div>
            </div>
          </div>

          {/* Right Column (Skills Carousel) */}
          <div className={`${theme.cardBg} p-8 rounded-2xl border ${theme.cardBorder} backdrop-blur-sm shadow-sm h-full flex flex-col relative overflow-hidden`}>
            
            <div className={`flex justify-between items-center mb-6 border-b pb-4 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
              <h3 className={`text-xl font-mono font-bold ${theme.textPrimary}`}>{t.about.stack_title}</h3>
              
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button onClick={prevSkill} className={`p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${theme.textSecondary}`}>
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSkill} className={`p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${theme.textSecondary}`}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Carousel Content */}
            <div className="flex-grow relative min-h-[160px]">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSkillIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col"
                  >
                      <h4 className="text-emerald-500 text-lg font-bold mb-6 uppercase flex items-center gap-3">
                         {/* Affichage dynamique de l'icône */}
                        <CurrentSkillIcon size={28} />
                        {SKILLS[currentSkillIndex].category}
                      </h4>
                      <ul className="space-y-3">
                        {SKILLS[currentSkillIndex].items.map((skill, sIdx) => (
                          <li key={sIdx} className={`${theme.textSecondary} flex items-center gap-3 text-lg`}>
                            <span className={`w-2 h-2 rounded-full ${SKILLS[currentSkillIndex].category.includes("Machine Learning") ? "bg-emerald-500" : "bg-zinc-500"}`}></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                  </motion.div>
               </AnimatePresence>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-auto pt-6">
              {SKILLS.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSkillIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSkillIndex ? "bg-emerald-500 w-6" : "bg-zinc-300 dark:bg-zinc-700 w-1.5 hover:bg-zinc-400 dark:hover:bg-zinc-600"}`}
                />
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* --- EXPERIENCE SECTION (Carousel) --- */}
      <Section className="relative z-10">
        <div className="flex items-center gap-3 mb-10">
           <Briefcase className="text-emerald-500" size={32} />
           <h2 className="text-3xl md:text-4xl font-bold font-mono">{t.experience.title}</h2>
        </div>

        <div className="relative group">
          {/* Arrows Navigation (Left) */}
          <button 
             onClick={prevExp}
             className={`absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all ${isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-white hover:bg-gray-100 text-black border border-gray-100'}`}
          >
             <ChevronLeft size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
             <motion.div 
               className="flex"
               animate={{ x: `-${currentExpIndex * (isDesktop ? 50 : 100)}%` }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             >
               {EXPERIENCES_DATA.map((exp) => (
                  <div key={exp.id} className="w-full md:w-1/2 flex-shrink-0 p-3">
                      <div className={`${theme.cardBg} border ${theme.cardBorder} p-8 rounded-2xl h-full relative hover:shadow-lg transition-shadow duration-300 flex flex-col`}>
                        
                        <div className="flex flex-col gap-2 mb-4">
                           <div className="flex justify-between items-start">
                              <h3 className={`text-xl font-bold ${theme.textPrimary}`}>{exp.role[lang]}</h3>
                              <div className={`flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                                  <Calendar size={14} />
                                  {exp.period[lang]}
                              </div>
                           </div>
                           <div className="flex justify-between items-center">
                              <h4 className="text-emerald-500 font-bold text-lg">{exp.company}</h4>
                              {exp.website && (
                                <a 
                                  href={exp.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-zinc-500 hover:text-black'}`}
                                  title="Visiter le site"
                                >
                                  <ExternalLink size={18} />
                                </a>
                              )}
                           </div>
                        </div>
                        
                        <p className={`${theme.textSecondary} mb-6 leading-relaxed flex-grow`}>
                           {exp.description[lang]}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                           {exp.technologies.map((tech, idx) => (
                              <span key={idx} className={`text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                  {tech}
                              </span>
                           ))}
                        </div>
                      </div>
                  </div>
               ))}
             </motion.div>
          </div>

          {/* Arrows Navigation (Right) */}
          <button 
             onClick={nextExp}
             className={`absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all ${isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-white hover:bg-gray-100 text-black border border-gray-100'}`}
          >
             <ChevronRight size={24} />
          </button>

        </div>
      </Section>

      {/* --- PROJECTS SECTION --- */}
      <Section className="relative z-10 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Database className="text-emerald-500" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold font-mono">{t.projects.title}</h2>
            </div>
            <p className="text-zinc-500">{t.projects.subtitle}</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-auto group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={t.projects.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${theme.inputBg} ${theme.textPrimary} pl-10 pr-4 py-2 rounded-lg w-full md:w-64 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-sm`}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
              onClick={() => setActiveFilter("Tous")}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                activeFilter === "Tous" 
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold" 
                  : `${theme.cardBg} ${theme.cardBorder} ${theme.textSecondary} hover:border-emerald-500/50`
              }`}
            >
              {t.projects.filter_all}
            </button>
          {ALL_TAGS.filter(tag => tag !== "Tous").map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                activeFilter === tag 
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 font-bold" 
                  : `${theme.cardBg} ${theme.cardBorder} ${theme.textSecondary} hover:border-emerald-500/50`
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className={`group ${theme.cardBg} border ${theme.cardBorder} ${theme.cardHoverBorder} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col`}
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <BarChart3 className="text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors ${theme.textPrimary}`}>{project.title[lang]}</h3>
                  <p className={`${theme.textSecondary} text-sm line-clamp-3`}>
                    {project.shortDesc[lang]}
                  </p>
                </div>
                
                <div className={`p-4 border-t ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-100 bg-gray-50'} flex justify-end`}>
                   <button 
                     onClick={() => setSelectedProject(project)}
                     className={`text-sm font-bold flex items-center gap-2 hover:text-emerald-500 transition-colors group/btn ${theme.textPrimary}`}
                   >
                     {t.projects.details_btn} <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <p>{t.projects.no_results}</p>
          </div>
        )}
      </Section>

      {/* --- HERO FOOTER / CONTACT --- */}
      <Section className="relative z-10">
        <div className={`min-h-[60vh] flex flex-col justify-center items-center text-center border-t ${isDark ? 'border-zinc-900' : 'border-zinc-200'} pt-20`}>
          <h2 className={`text-4xl md:text-6xl font-bold font-mono mb-8 ${theme.textPrimary}`}>
            {t.contact.title} <span className="text-zinc-400">{t.contact.title_highlight}</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="mailto:defretinmatthias@gmail.com" className={`group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all border border-transparent w-64 ${isDark ? 'hover:bg-zinc-900/50 hover:border-zinc-800' : 'hover:bg-white hover:shadow-lg hover:border-gray-200'}`}>
              <div className={`p-4 rounded-full text-emerald-500 group-hover:scale-110 transition-transform shadow-lg ${isDark ? 'bg-zinc-900 shadow-emerald-900/20' : 'bg-white shadow-emerald-200/50'}`}>
                <Mail size={32} />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg ${theme.textPrimary}`}>Email</span>
                <span className="text-zinc-500 text-sm">{t.contact.email_sub}</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/matthias-defretin-392265253/" className={`group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all border border-transparent w-64 ${isDark ? 'hover:bg-zinc-900/50 hover:border-zinc-800' : 'hover:bg-white hover:shadow-lg hover:border-gray-200'}`}>
              <div className={`p-4 rounded-full text-blue-600 group-hover:scale-110 transition-transform ${isDark ? 'bg-zinc-900' : 'bg-white shadow-lg'}`}>
                <Linkedin size={32} />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg ${theme.textPrimary}`}>LinkedIn</span>
                <span className="text-zinc-500 text-sm">{t.contact.linkedin_sub}</span>
              </div>
            </a>

            <a href="https://github.com/Matthiasdfrt?tab=overview&from=2025-12-01&to=2025-12-11" className={`group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all border border-transparent w-64 ${isDark ? 'hover:bg-zinc-900/50 hover:border-zinc-800' : 'hover:bg-white hover:shadow-lg hover:border-gray-200'}`}>
              <div className={`p-4 rounded-full group-hover:scale-110 transition-transform ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-black shadow-lg'}`}>
                <Github size={32} />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg ${theme.textPrimary}`}>GitHub</span>
                <span className="text-zinc-500 text-sm">{t.contact.github_sub}</span>
              </div>
            </a>
          </div>

          <div className="mt-20 text-zinc-500 text-sm font-mono">
            {t.contact.footer}
          </div>
        </div>
      </Section>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            lang={lang}
            isDark={isDark}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}
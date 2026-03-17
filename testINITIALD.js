import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, X, ChevronRight, Terminal, Activity, Database, Crosshair, Zap } from 'lucide-react';

// --- DONNÉES DES PROJETS ---
const projectsData = [
  {
    id: 1,
    title: "Prédiction de trajectoire spatiale",
    year: "2025",
    shortDesc: "Modèle de Machine Learning pour anticiper des mouvements complexes.",
    fullDesc: "Développement d'un réseau de neurones récurrents (RNN) capable de prédire des trajectoires en temps réel avec une latence ultra-faible. L'accent a été mis sur la vitesse d'inférence et la précision, nécessitant une optimisation drastique du code.",
    techStack: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    github: "https://github.com/ton-profil/projet-trajectoire",
    icon: <Activity className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Analyse Sémantique d'Urgences",
    year: "2024",
    shortDesc: "Traitement du langage naturel (NLP) sur des rapports d'incidents.",
    fullDesc: "Création d'un pipeline NLP pour classifier automatiquement des milliers de rapports d'incidents de sécurité. Utilisation de modèles Transformers pour extraire les entités nommées et évaluer la criticité (Survie/Risque) en temps réel.",
    techStack: ["HuggingFace", "PyTorch", "Spacy", "FastAPI"],
    github: "https://github.com/ton-profil/nlp-urgences",
    icon: <Terminal className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Dashboard Analytique Sportif",
    year: "2024",
    shortDesc: "Visualisation de données biométriques et statistiques de matchs.",
    fullDesc: "Conception d'un tableau de bord interactif analysant les performances de joueurs (vitesse de frappe, temps de réaction, zones d'impact). Permet d'identifier les failles tactiques de l'adversaire grâce à la data visualisation.",
    techStack: ["R", "Shiny", "PostgreSQL", "Plotly"],
    github: "https://github.com/ton-profil/dashboard-sport",
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Optimisation de flux de données",
    year: "2023",
    shortDesc: "Architecture Data Engineering pour flux de données en continu.",
    fullDesc: "Mise en place d'une architecture robuste capable d'ingérer, nettoyer et stocker des flux de données massifs sans perte d'information, garantissant une intégrité tactique des données pour les analyses ultérieures.",
    techStack: ["Apache Kafka", "Docker", "SQL", "AWS"],
    github: "https://github.com/ton-profil/data-pipeline",
    icon: <Zap className="w-8 h-8" />
  }
];

// --- COMPOSANTS ---

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-sm" onClick={onClose}>
      {/* Trame de fond modale */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>
      
      <div 
        className="relative w-full max-w-3xl bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Modale - Style Case de Manga */}
        <div className="flex justify-between items-start p-6 border-b-8 border-black bg-white">
          <div className="flex-1">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono font-bold text-sm tracking-widest uppercase mb-2">
              Vol. {project.year}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter italic leading-none">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="ml-4 p-2 border-4 border-transparent hover:border-black transition-all bg-white hover:bg-black text-black hover:text-white group"
          >
            <X className="w-8 h-8 transform group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Contenu Modale */}
        <div className="p-6 md:p-8 overflow-y-auto bg-white">
          <p className="text-black font-bold text-lg md:text-xl leading-relaxed mb-8 border-l-8 border-black pl-6 py-2">
            {project.fullDesc}
          </p>

          <div className="mb-10 p-6 border-4 border-black border-dashed">
            <h4 className="text-xl font-black text-black uppercase tracking-widest mb-4 flex items-center gap-2 italic">
              <Terminal className="w-6 h-6" /> Specs Techniques
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 font-black text-sm uppercase bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Modale */}
          <div className="flex justify-end pt-6">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-black text-white font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
              >
                <Github className="w-6 h-6" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white relative overflow-hidden">
      
      {/* Effet Trame de Manga (Halftone / Screentone) global */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }}></div>

      {/* Décoration japonaise d'arrière plan (vitesse) */}
      <div className="fixed -right-20 top-0 h-full w-64 flex flex-col justify-around pointer-events-none opacity-5">
        <span className="text-9xl font-black italic writing-vertical-rl transform -rotate-12">ゴゴゴゴ</span>
        <span className="text-9xl font-black italic writing-vertical-rl transform -rotate-12">ギャァァ</span>
      </div>

      {/* --- HEADER / HERO SECTION --- */}
      <header className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-end border-b-8 border-black pb-12">
          
          <div>
            {/* Tagline style autocollant AE86 */}
            <div className="inline-block mb-8 border-4 border-black bg-white p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <p className="font-black text-black tracking-widest uppercase flex items-center gap-2 text-sm md:text-base">
                <span className="bg-black text-white px-2 py-1">STAGE 1</span> 
                データサイエンティスト (自家用)
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] italic">
              Data <br />
              <span className="text-white text-stroke-black bg-black px-4 inline-block mt-2 transform -skew-x-12">
                Science.
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl font-bold text-black max-w-2xl mt-8 leading-tight italic border-l-8 border-black pl-6">
              "L'analyse de données n'est pas qu'une question de chiffres.<br className="hidden md:block"/>
              C'est une question de trajectoire, de vitesse et de précision."
            </p>
          </div>

          <div className="hidden md:flex flex-col gap-6 justify-end">
             <a href="#projets" className="group relative px-8 py-6 bg-white text-black font-black text-2xl uppercase tracking-widest border-4 border-black flex items-center gap-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
              Start <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              {/* Speed lines effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, #000 10px, #000 12px)' }}></div>
            </a>
          </div>
        </div>
      </header>

      {/* --- ABOUT SECTION (Spec Sheet) --- */}
      <section id="apropos" className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Titre Vertical style Manga */}
          <div className="md:col-span-2 md:flex justify-end hidden">
            <h2 className="text-5xl font-black text-black uppercase tracking-tighter italic writing-vertical-rl transform rotate-180">
              Profil / Specs
            </h2>
          </div>

          <div className="md:col-span-6 space-y-6 text-xl font-bold leading-relaxed border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white relative">
            <h2 className="text-4xl font-black text-black uppercase tracking-tighter italic mb-8 border-b-4 border-black pb-4 md:hidden">
              Profil / Specs
            </h2>
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-mono font-bold border-b-4 border-l-4 border-black">
              ID: T-86
            </div>
            <p>
              Actuellement en 3ème année de Data Science, je conçois l'analyse comme le pilotage sur les routes sinueuses du mont Akina : il faut anticiper chaque virage, chaque anomalie de la donnée.
            </p>
            <p>
              <span className="bg-black text-white px-2 italic">Vitesse d'exécution.</span> <span className="bg-black text-white px-2 italic">Précision millimétrée.</span><br/> 
              Que ce soit la fulgurance d'un échange au badminton ou le calibrage parfait d'un modèle de Machine Learning, j'applique la même intensité pour extraire la vérité des flux d'informations.
            </p>
          </div>
          
          {/* Bloc visuel décoratif (Spec Sheet Auto) */}
          <div className="md:col-span-4 bg-black text-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] transform md:rotate-3 z-10 relative">
            {/* Bande "Panda" blanche */}
            <div className="absolute top-0 bottom-0 left-4 w-2 bg-white"></div>
            
            <h3 className="font-black text-2xl uppercase tracking-widest mb-8 text-center italic pl-6">
              Tuning Stats
            </h3>
            
            <div className="space-y-6 pl-6 font-bold uppercase">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Engine (Machine Learning)</span>
                  <span className="font-black">90%</span>
                </div>
                <div className="w-full bg-white/20 h-4 border-2 border-white"><div className="bg-white h-full w-[90%]"></div></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Chassis (Data Engineering)</span>
                  <span className="font-black">80%</span>
                </div>
                <div className="w-full bg-white/20 h-4 border-2 border-white"><div className="bg-white h-full w-[80%]"></div></div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Handling (Analyse Statistique)</span>
                  <span className="font-black">85%</span>
                </div>
                <div className="w-full bg-white/20 h-4 border-2 border-white"><div className="bg-white h-full w-[85%]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (Les Planches de Manga) --- */}
      <section id="projets" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-end justify-between border-b-8 border-black pb-4 mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter italic leading-none">
            Archives <br/><span className="text-3xl tracking-widest bg-black text-white px-4 py-1 mt-2 inline-block">Projets</span>
          </h2>
          <span className="font-black text-2xl italic">Vol. 1-4</span>
        </div>

        {/* Grille style cases de manga */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer bg-white border-8 border-black flex flex-col h-full relative
                shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all duration-300
                ${index % 2 !== 0 ? 'md:mt-12' : ''} // Décale une case sur deux pour un aspect planche asymétrique
              `}
            >
              {/* Ruban "Panda" sur le côté */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out z-0"></div>
              
              <div className="p-8 flex-grow relative z-10 group-hover:text-white transition-colors duration-300">
                <div className="flex justify-between items-start mb-6 border-b-4 border-current pb-4">
                  <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="font-black text-xl italic bg-black text-white group-hover:bg-white group-hover:text-black px-3 py-1 transition-colors">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight italic">
                  {project.title}
                </h3>
                <p className="font-bold text-lg leading-snug">
                  {project.shortDesc}
                </p>
              </div>

              {/* Action Button style manga panel */}
              <div className="relative z-10 px-8 py-4 bg-black text-white border-t-8 border-black flex justify-between items-center group-hover:bg-white group-hover:text-black transition-colors">
                <span className="text-xl font-black uppercase tracking-widest italic">Lire la suite</span>
                <ChevronRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t-8 border-black">
        <div className="bg-black text-white p-12 md:p-24 border-8 border-black relative transform -rotate-1 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)]">
          {/* Bande blanche de vitesse */}
          <div className="absolute top-4 left-0 right-0 h-2 bg-white"></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8">
              Initialize Connection
            </h2>
            <p className="text-2xl font-bold mb-16 italic">
              "Prêt à drifter sur de nouvelles données. Contacte-moi."
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white text-black border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-2 transition-all transform rotate-3 group-hover:rotate-0">
                  <Github className="w-12 h-12" />
                </div>
                <span className="font-black text-xl uppercase tracking-widest italic group-hover:text-gray-300">GitHub</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white text-black border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-2 transition-all transform -rotate-3 group-hover:rotate-0">
                  <Linkedin className="w-12 h-12" />
                </div>
                <span className="font-black text-xl uppercase tracking-widest italic group-hover:text-gray-300">LinkedIn</span>
              </a>

              <a href="mailto:ton.email@example.com" className="group flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white text-black border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] group-hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-y-2 transition-all transform rotate-6 group-hover:rotate-0">
                  <Mail className="w-12 h-12" />
                </div>
                <span className="font-black text-xl uppercase tracking-widest italic group-hover:text-gray-300">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-white border-t-8 border-black">
        <p className="font-black text-xl text-black uppercase tracking-widest italic">
          © {new Date().getFullYear()} - Project D(ata)
        </p>
      </footer>

      {/* Rendu de la Modale */}
      <Modal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
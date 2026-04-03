/* =====================================================================
   PORTFOLIO - Matthias Defretin — app.js
   ===================================================================== */

// ── Traductions ────────────────────────────────────────────────────────
const translations = {
    fr: {
        'nav-projects':'Projets','nav-about':'À propos','nav-contact':'Contact',
        'hero-title-1':'Matthias','hero-title-2':'Defretin',
        'hero-desc':"Étudiant en 3ème année de Sciences des données à l'IUT de Lisieux. Alternant Data Analyst au sein de la SCANORMANDE.",
        'btn-discover':'Découvrir mes projets','btn-more':'En savoir plus',
        'about-role':"Etudiant en 3ème année de BUT Sciences des données<br>Actuellement candidat dans des écoles d'ingénieurs et des masters orientés IA",
        'about-title':'Mon Portfolio',
        'about-desc':"Ce site a pour but de montrer l'ensemble des projets que j'ai pu réaliser lors de mon parcours académique ou sur mon temps personnel, ce site en fait donc partie.",
        'edu-title':'Parcours académique','edu-1-date':'2022 - 2023 & 2025 — Présent',
        'edu-1-title':'BUT Sciences des données','edu-2-title':'Licence informatique',
        'tech-title':'Écosystème technique','tech-sub-2':'Ingénierie & Outils',
        'proj-title':'Projets sélectionnés.','proj-subtitle':"Une vitrine de précision et d'ingénierie.",
        'btn-all-proj':'Explorer tous les projets',
        'contact-title':'En recherche d\'alternance.','contact-desc':'Disponible pour de nouvelles opportunités.',
        'btn-cv':'Consulter mon CV','btn-portfolio':'Portfolio en PDF',
        'btn-back':"Retour à l'accueil",'all-proj-title':'Tous les projets.',
        'count-projects':'projets réalisés.','footer':'Matthias Defretin',
        'modal-tech':'Technologies utilisées','modal-git':'Consulter sur GitHub',
        'card-more':'En savoir plus','no-preview':'Sans aperçu',
        'search-placeholder':'Rechercher un projet…',
        'no-results-title':'Aucun projet trouvé.',
        'no-results-desc':'Essayez un autre mot-clé ou supprimez les filtres.',
        'results-count': n => `${n} projet${n>1?'s':''} affiché${n>1?'s':''}`,
        'tag-all':'Tous'
    },
    en: {
        'nav-projects':'Projects','nav-about':'About','nav-contact':'Contact',
        'hero-title-1':'Matthias','hero-title-2':'Defretin',
        'hero-desc':'3rd-year Data Science student at IUT de Lisieux. Data Analyst apprentice at SCANORMANDE.',
        'btn-discover':'Discover my projects','btn-more':'Learn more',
        'about-role':"3rd-year Data Science student (BUT)<br>Currently applying to engineering schools and AI-focused master's programs",
        'about-title':'My Portfolio',
        'about-desc':'This site showcases all the projects I have completed throughout my academic journey or on my own time — this site itself is one of them.',
        'edu-title':'Academic Background','edu-1-date':'2022 - 2023 & 2025 — Present',
        'edu-1-title':"Bachelor's in Data Science (BUT)",'edu-2-title':'Computer Science Degree',
        'tech-title':'Technical Ecosystem','tech-sub-2':'Engineering & Tools',
        'proj-title':'Selected projects.','proj-subtitle':'A showcase of precision and engineering.',
        'btn-all-proj':'Explore all projects',
        'contact-title':'In search of an apprenticeship.','contact-desc':'Available for new opportunities.',
        'btn-cv':'View my Resume','btn-portfolio':'PDF Portfolio',
        'btn-back':'Back to home','all-proj-title':'All projects.',
        'count-projects':'completed projects.','footer':'Crafted with precision.',
        'modal-tech':'Technologies used','modal-git':'View on GitHub',
        'card-more':'Learn more','no-preview':'No preview',
        'search-placeholder':'Search a project…',
        'no-results-title':'No projects found.',
        'no-results-desc':'Try a different keyword or clear the filters.',
        'results-count': n => `${n} project${n>1?'s':''} shown`,
        'tag-all':'All'
    }
};

// ── Données projets ────────────────────────────────────────────────────
const projectsData = [
    {
        id:1, title:{fr:"World UniRank",en:"World UniRank"}, year:"2025",
        shortDesc:{
            fr:"Application web décisionnelle analysant 10 ans de classements universitaires mondiaux croisés avec des indicateurs socio-économiques.",
            en:"Decision-support web app analyzing 10 years of global university rankings crossed with socio-economic indicators."
        },
        fullDesc:{
            fr:"Conception et développement complet d'une application web interactive basée sur le classement Times Higher Education (2016–2025), croisé avec des indicateurs par pays (PIB, alphabétisation, parité, ouverture internationale). Quatre modules : tableau de bord KPIs dynamiques, explorateur d'universités, fiche d'évolution pluriannuelle, module de corrélations. Stack : Python/Flask, Bootstrap 5, Chart.js, Pandas, SQLite/SQLAlchemy.",
            en:"Full design and development of an interactive web app based on the Times Higher Education ranking (2016–2025), crossed with country indicators (GDP, literacy, gender parity). Four modules: dynamic KPI dashboard, university explorer, multi-year evolution view, correlations module. Stack: Python/Flask, Bootstrap 5, Chart.js, Pandas, SQLite/SQLAlchemy."
        },
        techStack:["Python","Flask","Chart.js","Pandas","SQLite","Bootstrap 5","SQLAlchemy"],
        github:"https://github.com/Matthiasdfrt/Analyse-et-conception-d-un-outil-decisionnel", icon:"globe",
        image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        id:2, title:{fr:"Scoring Crédit Bancaire",en:"Bank Credit Scoring"}, year:"2025",
        shortDesc:{
            fr:"Système de scoring crédit par Data Mining pour automatiser la décision d'octroi de prêts bancaires.",
            en:"Credit scoring system via Data Mining to automate bank loan approval decisions."
        },
        fullDesc:{
            fr:"Pipeline complet de Data Mining pour prédire la probabilité de remboursement d'un client. ETL multi-sources, SMOTE pour rééquilibrer les classes. Comparaison Régression Logistique / Random Forest / XGBoost — XGBoost meilleur AUC. Déploiement Streamlit avec les 15 variables les plus influentes.",
            en:"Full Data Mining pipeline to predict loan repayment probability. Multi-source ETL, SMOTE resampling. Logistic Regression / Random Forest / XGBoost comparison — XGBoost best AUC. Deployed as Streamlit app with the 15 most influential features."
        },
        techStack:["Python","XGBoost","Scikit-Learn","SMOTE","Streamlit","Pandas"],
        github:"https://github.com/Matthiasdfrt/Scoring-Credit-Bancaire", icon:"bar-chart-2",
        image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:3, title:{fr:"Profils Agriculteurs AGRICAN",en:"AGRICAN Farmer Profiles"}, year:"2025",
        shortDesc:{
            fr:"Analyse multivariée (ACP + CAH) sur la cohorte épidémiologique AGRICAN pour créer des profils d'agriculteurs.",
            en:"Multivariate analysis (PCA + HAC) on the AGRICAN epidemiological cohort to build farmer profiles."
        },
        fullDesc:{
            fr:"Analyse de la cohorte AGRICAN (AGRIculture et CANcers) à partir d'un questionnaire de 226 variables. Sélection des variables pertinentes, sous-cohortes générationnelles, ACP pour réduire la dimensionnalité, CAH pour construire des profils agricoles distincts. Base pour de futures analyses des risques sanitaires.",
            en:"Analysis of the AGRICAN cohort from a 226-variable questionnaire. Variable selection, generational sub-cohorts, PCA for dimensionality reduction, HAC to build distinct farmer profiles as a foundation for future health risk analyses."
        },
        techStack:["R","ACP","CAH","ggplot2","FactoMineR"],
        github:"https://github.com/Matthiasdfrt/SAE-Reporting-d-une-analyse-multivariee", icon:"activity",
        image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:4, title:{fr:"Migration NoSQL — Olist",en:"NoSQL Migration — Olist"}, year:"2025",
        shortDesc:{
            fr:"Pipeline ETL vers MongoDB et analyse e-commerce sur 100 000+ commandes de la plateforme brésilienne Olist.",
            en:"ETL pipeline to MongoDB and e-commerce analysis on 100,000+ orders from the Brazilian platform Olist."
        },
        fullDesc:{
            fr:"Découverte du paradigme NoSQL via MongoDB sur un dataset e-commerce réel (Olist). ETL CSV vers MongoDB, framework d'agrégation pour extraire des KPIs. Index sur champs de jointure : temps d'exécution réduits de plusieurs secondes à quelques ms. Analyse commerciale, logistique (délais x3 en Amazonie) et satisfaction.",
            en:"Discovery of the NoSQL paradigm via MongoDB on a real e-commerce dataset (Olist). CSV-to-MongoDB ETL, aggregation framework for KPI extraction. Join-field indexing reduced execution times from seconds to milliseconds. Commercial, logistics (3x delays in Amazonia), and satisfaction analyses."
        },
        techStack:["Python","MongoDB","pymongo","ETL","NoSQL"],
        github:"https://github.com/Matthiasdfrt/NoSQL", icon:"database",
        image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:5, title:{fr:"Dashboard Tendances Mondiales",en:"Global Trends Dashboard"}, year:"2025",
        shortDesc:{
            fr:"Tableau de bord interactif visualisant PIB, espérance de vie, IDH et consommation énergétique via PHP et Chart.js.",
            en:"Interactive dashboard visualizing GDP, life expectancy, HDI and global energy consumption via PHP and Chart.js."
        },
        fullDesc:{
            fr:"Tableau de bord décisionnel full-stack sur des indicateurs économiques mondiaux (PIB, espérance de vie, IDH, consommation énergétique) depuis une base SQLite. PHP natif avec patron Singleton, requêtes paramétrées contre les injections SQL, affichage dynamique Chart.js. Travail collaboratif via GitHub.",
            en:"Full-stack decision dashboard on global economic indicators (GDP, life expectancy, HDI, energy consumption) from a SQLite database. Native PHP with Singleton pattern, parameterized queries against SQL injection, dynamic Chart.js rendering. Collaborative work via GitHub."
        },
        techStack:["PHP","HTML/CSS","JavaScript","Chart.js","SQLite","GitHub"],
        github:"https://github.com/Matthiasdfrt/SAE-Developpement-d-un-composant-d-une-solution-decisionnelle", icon:"cpu",
        image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:6, title:{fr:"Régression — Indice de Masse Graisseuse",en:"Body Fat Index Regression"}, year:"2022",
        shortDesc:{
            fr:"Modélisation statistique pour identifier les meilleures variables corporelles prédictives de l'indice de masse graisseuse.",
            en:"Statistical modeling to identify the best body measurement predictors of the fat mass index."
        },
        fullDesc:{
            fr:"Analyse statistique complète pour déterminer le meilleur modèle de régression linéaire sur l'indice FFMI. Trois phases : chargement, préparation (traitement des valeurs atypiques), modélisation. Exploration de la corrélation entre mesures corporelles (cou, poitrine, abdomen, hanches) et l'indice cible.",
            en:"Full statistical analysis to find the best linear regression model on the FFMI index. Three phases: loading, preparation (outlier handling), modeling. Correlation exploration between body measurements (neck, chest, abdomen, hips) and the target index."
        },
        techStack:["R","Régression linéaire","ggplot2","Statistiques"],
        github:"https://github.com/Matthiasdfrt/Regression-sur-donnees-reelles", icon:"trending-up",
        image:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:7, title:{fr:"Dashboard Milliardaires Asie",en:"Asian Billionaires Dashboard"}, year:"2022",
        shortDesc:{
            fr:"Tableau de bord Tableau Desktop analysant la répartition géographique et la fortune des milliardaires asiatiques en 2022.",
            en:"Tableau Desktop dashboard analyzing the geographic distribution and wealth of Asian billionaires in 2022."
        },
        fullDesc:{
            fr:"Projet de business intelligence sur la répartition géographique et la fortune des milliardaires en Asie en 2022. Exploration du dataset, préparation et typage des variables, puis visualisations : top 10 des fortunes, carte par pays, personne la plus riche par pays, répartition fortunes héritées vs construites.",
            en:"Business intelligence project on the geographic distribution and wealth of billionaires in Asia in 2022. Dataset exploration, variable preparation, then visualizations: top 10 fortunes, map by country, richest person per country, inherited vs. self-made breakdown."
        },
        techStack:["Tableau Desktop","Business Intelligence","Data Visualization"],
        github:"https://github.com/Matthiasdfrt/Construction-et-presentation-d-indicateurs-de-performance", icon:"pie-chart",
        image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:8, title:{fr:"Gestion de Stock — Proxi Wulverdinghe",en:"Inventory System — Proxi"}, year:"2024",
        shortDesc:{
            fr:"Solution autonome hors-ligne : BDD SQLite, outil CLI, interface caisse PyQt5 et dashboard d'analyse des ventes.",
            en:"Standalone offline solution: SQLite database, CLI tool, PyQt5 POS interface, and sales analytics dashboard."
        },
        fullDesc:{
            fr:"Suite à une coupure internet dans un magasin Proxi, solution complète autonome. BDD modélisée en UML et implémentée sous SQLite. Outil CLI Python (ajout, rangement, retrait, recherche) avec logs horodatés. Interface caisse PyQt5 avec lecture EAN, mise à jour stock et tickets TXT. Dashboard ventes via Matplotlib et Seaborn.",
            en:"Following an internet outage at a Proxi store, a complete standalone solution. DB modeled in UML and implemented in SQLite. Python CLI tool (add, shelve, remove, search) with timestamped logs. PyQt5 POS GUI with EAN scanning, stock updates and TXT receipts. Sales dashboard via Matplotlib and Seaborn."
        },
        techStack:["Python","SQLite","PyQt5","Matplotlib","Seaborn","UML"],
        github:"https://github.com/Matthiasdfrt/Gestion-de-Stock-Proxi-Wulverdinghe", icon:"shopping-cart",
        image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:9, title:{fr:"Challenge DataViz — SNCF",en:"DataViz Challenge — SNCF"}, year:"2023",
        shortDesc:{
            fr:"🏆 1ère place de notre département du concours national DataViz IUT : analyse de l'accessibilité ferroviaire et des disparités socio-économiques.",
            en:"🏆 1st place of our department at the national IUT DataViz competition: rail accessibility and socio-economic disparities."
        },
        fullDesc:{
            fr:"Concours national IUT : une journée pour analyser des données SNCF réelles. 1ère place au niveau local. Problématique : l'accessibilité ferroviaire impacte-t-elle les disparités socio-économiques ? Analyse des départs par type de train et région, croisée avec la médiane du niveau de vie. Carte dynamique sous Tableau, classement des 7 gares les plus actives.",
            en:"National IUT competition: one day to analyze real SNCF data. 1st place locally. Research question: does rail accessibility impact socio-economic disparities? Analysis of departures by train type and region, crossed with median income. Dynamic map in Tableau, ranking of the 7 busiest stations."
        },
        techStack:["Tableau","Data Visualization","Analyse exploratoire"],
        github:"https://github.com/Matthiasdfrt", icon:"zap",
        image:"https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:10, title:{fr:"Reporting BDD — Gotham City",en:"DB Reporting — Gotham City"}, year:"2022",
        shortDesc:{
            fr:"Identification de Batman et analyse socio-économique de Gotham à partir d'une base de données relationnelle.",
            en:"Identifying Batman and socio-economic analysis of Gotham City from a relational database."
        },
        fullDesc:{
            fr:"Mission du chef de police de Gotham : retrouver l'identité de Batman depuis des fichiers hétérogènes. Nettoyage et normalisation des sources, insertion dans SQLite, requêtes SQL pour identifier le suspect. Analyse statistique des habitants (génération, finances, police) avec graphiques R et Excel.",
            en:"Gotham City chief of police mission: identify Batman from heterogeneous data files. Cleaning and normalizing sources, SQLite insertion, SQL queries to identify the suspect. Statistical analysis of residents (generations, finances, police) with R and Excel charts."
        },
        techStack:["Python","SQL","SQLite","R","Excel"],
        github:"https://github.com/Matthiasdfrt", icon:"search",
        image:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:11, title:{fr:"Traitement de Fichiers — Conseil de Classe",en:"File Processing — School Reports"}, year:"2022",
        shortDesc:{
            fr:"Lecture, nettoyage et restructuration de 6 fichiers hétérogènes (CSV, TXT) pour générer les bulletins de notes d'un lycée.",
            en:"Reading, cleaning and restructuring 6 heterogeneous files (CSV, TXT) to generate student report cards."
        },
        fullDesc:{
            fr:"Aide à la proviseure d'un lycée pour son conseil de classe. Traitement de 6 fichiers différents (3 CSV, 3 TXT) contenant des relevés de notes. Définition d'une structure commune, nettoyage des données, stockage en liste de listes Python, génération des bulletins au format CSV via NumPy.",
            en:"Assistance to a high school principal for the board meeting. Processing 6 differently structured files (3 CSV, 3 TXT) with grade records. Definition of a common structure, data cleaning, storage as Python nested lists, then generating report cards in CSV format via NumPy."
        },
        techStack:["Python","NumPy","CSV","Traitement de données"],
        github:"https://github.com/Matthiasdfrt", icon:"file-text",
        image:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:12, title:{fr:"Analyse Exploratoire — Vélos New York",en:"Exploratory Analysis — NYC Bikes"}, year:"2022",
        shortDesc:{
            fr:"Première analyse exploratoire en R sur un jeu de données de location de vélos à New York pour juin 2022.",
            en:"First exploratory analysis in R on a NYC bike rental dataset for June 2022."
        },
        fullDesc:{
            fr:"Première SAÉ axée sur R. Analyse exploratoire d'un dataset de location de vélos à New York (juin 2022). Chargement, nettoyage (suppression des durées négatives), puis graphiques pour analyser la répartition des locations par heure, jour et type d'usager.",
            en:"First project focused on R. Exploratory analysis of a NYC bike rental dataset (June 2022). Loading, cleaning (removing negative durations), then charts analyzing rental distribution by hour, day, and user type."
        },
        techStack:["R","Analyse exploratoire","ggplot2","Statistiques descriptives"],
        github:"https://github.com/Matthiasdfrt", icon:"bar-chart",
        image:"https://images.unsplash.com/photo-1755544624610-30db0fd65109?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1755544624610-30db0fd65109?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:13, title:{fr:"Veille — Production de Données en Entreprise",en:"Research — Data Production in Business"}, year:"2022",
        shortDesc:{
            fr:"Travail de veille informationnelle et synthèse sur les mécanismes de production de données en entreprise, formalisé en poster.",
            en:"Information research and synthesis on data production mechanisms in organizations, formalized as a poster."
        },
        fullDesc:{
            fr:"Veille sur les mécanismes de production de données en entreprise : ERP/PGI, système d'information, pyramide de Ranoff, Total Quality Management. Carte mentale pour identifier les points clés, puis création d'un poster clair et accessible pour un public non technique.",
            en:"Research on data production mechanisms in organizations: ERP, information systems, Ranoff pyramid, Total Quality Management. Mind map to identify key points, then design of a clear poster for a non-technical audience."
        },
        techStack:["Veille informationnelle","Synthèse","Communication","Poster"],
        github:"https://github.com/Matthiasdfrt", icon:"book-open",
        image:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:14, title:{fr:"Inégalités H/F en Normandie (EN)",en:"Gender Inequalities in Normandy (EN)"}, year:"2022",
        shortDesc:{
            fr:"Étude des disparités hommes/femmes dans le monde socioprofessionnel normand, présentée en anglais sous forme de poster.",
            en:"Study of gender disparities in the Normandy professional world, presented in English as a poster."
        },
        fullDesc:{
            fr:"Recherche INSEE sur les différences hommes/femmes dans le monde socioprofessionnel normand. Croisement de données sur études, emploi, salaires et plafond de verre. Poster bilingue structuré (Introduction → Studies → Work → Conclusion) et présentation orale en anglais devant jury.",
            en:"INSEE research on gender differences in the Normandy professional world. Cross-referencing data on education, employment, wages, and the glass ceiling. Structured bilingual poster (Introduction → Studies → Work → Conclusion) and oral presentation in English before a jury."
        },
        techStack:["INSEE","Analyse de données","Communication (EN)","Poster"],
        github:"https://github.com/Matthiasdfrt", icon:"users",
        image:"https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id:15, title:{fr:"Enquête Statistique — Lycéens & Nourriture",en:"Statistical Survey — Students & Food"}, year:"2022",
        shortDesc:{
            fr:"Conduite d'une enquête statistique complète : conception du questionnaire, analyse sous R et soutenance orale.",
            en:"Full statistical survey: questionnaire design, R analysis and oral defense."
        },
        fullDesc:{
            fr:"Enquête statistique de bout en bout sur les lycéens et la nourriture. Conception d'un questionnaire (tous types de questions). Analyse sous R à partir d'un dataset réel fourni par le Crédit Agricole (terrain impossible COVID). Visualisations graphiques adaptées et soutenance orale devant jury.",
            en:"End-to-end statistical survey on high school students and food. Questionnaire design (all question types). R analysis from a real dataset provided by Crédit Agricole (fieldwork impossible due to COVID). Appropriate data visualizations and oral defense before a jury."
        },
        techStack:["R","Statistiques","Conception de questionnaire","Visualisation"],
        github:"https://github.com/Matthiasdfrt", icon:"clipboard",
        image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
        banner:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1200"
    }
];

// ── État global ────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'fr';
let activeTag   = null;
let searchQuery = '';

// ── Catégories de tags ─────────────────────────────────────────────────
const tagCategories = {
    fr: [
        { label:'Python',           match: t => t === 'Python' },
        { label:'R',                match: t => t === 'R' },
        { label:'SQL / BDD',        match: t => ['SQL','SQLite','MongoDB','NoSQL','ETL','SQLAlchemy'].includes(t) },
        { label:'Machine Learning', match: t => ['XGBoost','Scikit-Learn','SMOTE','ACP','CAH','Régression linéaire'].includes(t) },
        { label:'Visualisation',    match: t => ['Chart.js','Tableau','Tableau Desktop','Matplotlib','Seaborn','ggplot2','Data Visualization'].includes(t) },
        { label:'Web',              match: t => ['Flask','PHP','HTML/CSS','JavaScript','Bootstrap 5','Streamlit'].includes(t) },
        { label:'Statistiques',     match: t => ['Statistiques','Statistiques descriptives','Analyse exploratoire','FactoMineR'].includes(t) }
    ],
    en: [
        { label:'Python',           match: t => t === 'Python' },
        { label:'R',                match: t => t === 'R' },
        { label:'SQL / DB',         match: t => ['SQL','SQLite','MongoDB','NoSQL','ETL','SQLAlchemy'].includes(t) },
        { label:'Machine Learning', match: t => ['XGBoost','Scikit-Learn','SMOTE','ACP','CAH','Régression linéaire'].includes(t) },
        { label:'Visualisation',    match: t => ['Chart.js','Tableau','Tableau Desktop','Matplotlib','Seaborn','ggplot2','Data Visualization'].includes(t) },
        { label:'Web',              match: t => ['Flask','PHP','HTML/CSS','JavaScript','Bootstrap 5','Streamlit'].includes(t) },
        { label:'Statistics',       match: t => ['Statistiques','Statistiques descriptives','Analyse exploratoire','FactoMineR'].includes(t) }
    ]
};

function getActiveTags() {
    return tagCategories[currentLang].filter(cat =>
        projectsData.some(p => p.techStack.some(t => cat.match(t)))
    );
}

function projectMatchesTag(project, tagLabel) {
    const cat = tagCategories[currentLang].find(c => c.label === tagLabel);
    return cat ? project.techStack.some(t => cat.match(t)) : false;
}

// ── Thème ──────────────────────────────────────────────────────────────
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-icon').setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
}

// ── Langue ─────────────────────────────────────────────────────────────
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    renderAllProjects();
    if (!document.getElementById('all-projects-view').classList.contains('hidden')) {
        renderTagFilters();
        filterAndRender();
    }
}

function applyTranslations() {
    document.getElementById('lang-toggle-text').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = translations[currentLang][el.getAttribute('data-i18n')];
        if (val && typeof val === 'string') el.innerHTML = val;
    });
    const si = document.getElementById('search-input');
    if (si) si.placeholder = translations[currentLang]['search-placeholder'];
    const countEl = document.getElementById('total-projects-count');
    if (countEl) countEl.textContent = `${projectsData.length} ${translations[currentLang]['count-projects']}`;
}

// ── Création d'une carte ───────────────────────────────────────────────
function createCardHTML(project, dataIndex, animIndex) {
    const noPreview = translations[currentLang]['no-preview'];
    const more      = translations[currentLang]['card-more'];
    const img = project.image
        ? `<img src="${project.image}" alt="${project.title[currentLang]}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">`
        : `<div class="w-full h-full bg-[#f5f5f7] dark:bg-[#2c2c2e] flex items-center justify-center text-[#86868b]">${noPreview}</div>`;

    return `
        <div class="project-card card-animate group cursor-pointer bg-white dark:bg-[#1c1c1e] rounded-[2.5rem] p-4
                    shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                    dark:shadow-none dark:border dark:border-[#38383a]/50 dark:hover:border-[#a1a1a6]
                    transform hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col h-full"
             data-index="${dataIndex}" style="animation-delay:${(animIndex||0)*40}ms">
            <div class="w-full h-48 sm:h-56 rounded-[1.8rem] overflow-hidden mb-6 relative" style="transform: translateZ(0)">
                ${img}
                <div class="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-sm">
                    <i data-lucide="${project.icon}" class="w-5 h-5"></i>
                </div>
            </div>
            <div class="px-4 pb-4 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight">${project.title[currentLang]}</h3>
                    <span class="text-sm font-medium text-[#86868b] dark:text-[#a1a1a6] mt-1">${project.year}</span>
                </div>
                <p class="text-[#86868b] dark:text-[#a1a1a6] font-medium leading-relaxed flex-grow">${project.shortDesc[currentLang]}</p>
                <div class="mt-6 flex items-center gap-2 text-[#0071e3] font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    ${more} <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </div>
            </div>
        </div>`;
}

// ── Rendu accueil (aperçu 4 projets) ──────────────────────────────────
function renderAllProjects() {
    const previewGrid     = document.getElementById('projects-preview-grid');
    const viewAllContainer = document.getElementById('view-all-container');
    previewGrid.innerHTML = projectsData.slice(0, 4).map((p, i) => createCardHTML(p, i, i)).join('');
    if (projectsData.length > 4) viewAllContainer.classList.remove('hidden');
    lucide.createIcons();
    attachCardEvents();
}

function attachCardEvents() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openModal(projectsData[+card.getAttribute('data-index')]));
    });
}

// ── Tags + filtre ──────────────────────────────────────────────────────
function renderTagFilters() {
    const container = document.getElementById('tag-filters');
    if (!container) return;
    const allLabel = translations[currentLang]['tag-all'];
    container.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `tag-filter ${activeTag === null ? 'active' : ''}`;
    allBtn.textContent = allLabel;
    allBtn.addEventListener('click', () => { activeTag = null; renderTagFilters(); filterAndRender(); });
    container.appendChild(allBtn);

    getActiveTags().forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tag-filter ${activeTag === cat.label ? 'active' : ''}`;
        btn.textContent = cat.label;
        btn.addEventListener('click', () => {
            activeTag = activeTag === cat.label ? null : cat.label;
            renderTagFilters();
            filterAndRender();
        });
        container.appendChild(btn);
    });
}

function filterAndRender() {
    const grid      = document.getElementById('all-projects-grid');
    const noResults = document.getElementById('no-results');
    const resCount  = document.getElementById('results-count');
    const query     = searchQuery.trim().toLowerCase();

    const filtered = projectsData.filter(p => {
        const matchSearch = !query
            || p.title[currentLang].toLowerCase().includes(query)
            || p.shortDesc[currentLang].toLowerCase().includes(query);
        const matchTag = activeTag === null || projectMatchesTag(p, activeTag);
        return matchSearch && matchTag;
    });

    grid.innerHTML = filtered.map((p, i) => createCardHTML(p, projectsData.indexOf(p), i)).join('');
    noResults.classList.toggle('hidden', filtered.length > 0);
    grid.classList.toggle('hidden', filtered.length === 0);

    const isFiltering = query || activeTag !== null;
    if (isFiltering) {
        resCount.textContent = translations[currentLang]['results-count'](filtered.length);
        resCount.classList.remove('hidden');
    } else {
        resCount.classList.add('hidden');
    }

    lucide.createIcons();
    attachCardEvents();
}

// ── Navigation SPA ─────────────────────────────────────────────────────
function showAllProjectsPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const homeView        = document.getElementById('home-view');
    const allProjectsView = document.getElementById('all-projects-view');
    setTimeout(() => {
        homeView.classList.add('hidden');
        allProjectsView.classList.remove('hidden');
        searchQuery = ''; activeTag = null;
        const input = document.getElementById('search-input');
        const clear = document.getElementById('search-clear');
        if (input) input.value = '';
        if (clear) { clear.style.opacity = '0'; clear.style.pointerEvents = 'none'; }
        renderTagFilters();
        filterAndRender();
    }, 300);
}

function showHomePage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const homeView        = document.getElementById('home-view');
    const allProjectsView = document.getElementById('all-projects-view');
    setTimeout(() => {
        allProjectsView.classList.add('hidden');
        homeView.classList.remove('hidden');
    }, 300);
}

// ── Modale ─────────────────────────────────────────────────────────────
function openModal(project) {
    const modal        = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const bannerCont   = document.getElementById('modal-banner-container');
    const bannerImg    = document.getElementById('modal-banner');

    document.getElementById('modal-year').textContent  = `Projet — ${project.year}`;
    document.getElementById('modal-title').textContent = project.title[currentLang];
    document.getElementById('modal-desc').textContent  = project.fullDesc[currentLang];

    if (project.banner) {
        bannerImg.src = project.banner;
        bannerImg.alt = project.title[currentLang];
        bannerCont.classList.remove('hidden');
    } else {
        bannerCont.classList.add('hidden');
    }

    document.getElementById('modal-tech-stack').innerHTML = project.techStack
        .map(t => `<span class="px-4 py-2 rounded-full text-sm font-medium bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-transparent dark:border-[#38383a] text-[#1d1d1f] dark:text-[#f5f5f7]">${t}</span>`)
        .join('');

    const ghBtn = document.getElementById('modal-github-link');
    ghBtn.href = project.github || '#';
    ghBtn.style.display = project.github ? 'flex' : 'none';

    document.body.classList.add('modal-open');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        modalContent.classList.remove('translate-y-8', 'scale-95', 'opacity-0');
        modalContent.classList.add('translate-y-0', 'scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const modal        = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const bannerImg    = document.getElementById('modal-banner');
    modalContent.classList.remove('translate-y-0', 'scale-100', 'opacity-100');
    modalContent.classList.add('translate-y-8', 'scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('modal-open');
        setTimeout(() => { bannerImg.src = ''; }, 300);
    }, 300);
}

// ── Init ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();

    if (document.documentElement.classList.contains('dark')) {
        document.getElementById('theme-icon').setAttribute('data-lucide', 'sun');
    }

    applyTranslations();
    renderAllProjects();
    lucide.createIcons();

    // ── Mobile menu ───────────────────────────────────────────────────
    const mobileMenuBtn      = document.getElementById('mobile-menu-btn');
    const mobileMenu         = document.getElementById('mobile-menu');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

    function openMobileMenu() {
        mobileMenuBtn.classList.add('is-open');
        mobileMenu.classList.add('is-open');
        mobileMenuBackdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        mobileMenuBackdrop.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu();
    });

    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

    // Close menu when a mobile nav link is tapped
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileMenu, 150);
        });
    });

    // Swipe down to close
    let touchStartY = 0;
    mobileMenu.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
    mobileMenu.addEventListener('touchend', e => {
        if (e.changedTouches[0].clientY - touchStartY > 60) closeMobileMenu();
    }, { passive: true });

    // Navigation
    document.getElementById('view-all-btn')?.addEventListener('click', showAllProjectsPage);
    document.getElementById('back-home-btn').addEventListener('click', showHomePage);
    document.getElementById('nav-logo').addEventListener('click', showHomePage);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            const allView = document.getElementById('all-projects-view');
            if (!allView.classList.contains('hidden')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                showHomePage();
                setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' }), 350);
            }
        });
    });

    // Modale
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        const modal = document.getElementById('project-modal');
        if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) closeModal();
    });

    // Recherche
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        const hasVal = searchQuery.length > 0;
        searchClear.style.opacity      = hasVal ? '1' : '0';
        searchClear.style.pointerEvents = hasVal ? 'auto' : 'none';
        filterAndRender();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.opacity      = '0';
        searchClear.style.pointerEvents = 'none';
        searchInput.focus();
        filterAndRender();
    });
});

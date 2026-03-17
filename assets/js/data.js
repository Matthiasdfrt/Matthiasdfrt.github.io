/* ================================================================
   data.js — Source de vérité pour tous les projets
   
   COMMENT AJOUTER UN PROJET :
   Copie un objet dans PROJECTS[] et modifie les champs.
   Tous les champs sont optionnels sauf id, title, category.
================================================================ */

const PROJECTS = [
  {
    id: 1,
    title: "Prédiction de churn client",
    category: "Machine Learning",
    year: "2024",
    status: "Production",       // "Production" | "Académique" | "En cours" | "Archive"
    shortDesc: "Modèle de classification pour identifier les clients à risque de désabonnement avec un score F1 de 0.91.",
    longDesc: `Ce projet visait à réduire le taux de désabonnement d'une plateforme SaaS en 
    identifiant proactivement les clients à risque. J'ai construit un pipeline complet de la 
    collecte des données brutes (CRM + logs d'utilisation) jusqu'au déploiement du modèle 
    en API REST consommée par l'équipe commerciale.
    
    Le principal défi était le déséquilibre des classes (95% non-churn / 5% churn), résolu 
    par une combinaison SMOTE + class_weight, ce qui a permis d'atteindre un F1-score de 0.91 
    sur la classe minoritaire.`,
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "SMOTE", "FastAPI", "Docker"],
    highlights: [
      "F1-score de 0.91 sur la classe minoritaire",
      "Pipeline MLOps avec retraining automatique mensuel",
      "API REST déployée en production (500+ requêtes/jour)",
      "Réduction du churn de 18% en 6 mois"
    ],
    github: "https://github.com/alexmoreau/churn-prediction",
    demo: null,  // pas de démo publique
    tags: ["Python", "XGBoost", "Scikit-learn"],  // tags affichés sur la carte
    featured: true,  // mis en avant (première dans la grille principale)
  },
  {
    id: 2,
    title: "Pipeline ETL temps réel",
    category: "Data Engineering",
    year: "2024",
    status: "Production",
    shortDesc: "Architecture de traitement de flux de données en temps réel pour l'analyse de transactions financières.",
    longDesc: `Architecture orientée événements pour ingérer, transformer et stocker 
    des flux de transactions bancaires en temps réel. Le pipeline traite jusqu'à 10 000 
    événements/seconde avec une latence P99 inférieure à 200ms.
    
    Kafka gère l'ingestion multi-sources, Spark Streaming applique les transformations 
    métier (enrichissement, normalisation, détection d'anomalies basique), et PostgreSQL 
    stocke les données transformées avec partitionnement temporel.`,
    stack: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Python", "Docker", "Kubernetes", "Grafana"],
    highlights: [
      "Traitement de 10 000 événements/seconde",
      "Latence P99 < 200ms",
      "Monitoring temps réel avec Grafana",
      "Tolérance aux pannes (zero downtime)"
    ],
    github: "https://github.com/alexmoreau/realtime-etl",
    demo: null,
    tags: ["Apache Kafka", "Spark", "PostgreSQL"],
    featured: true,
  },
  {
    id: 3,
    title: "Analyse de sentiment multilingue",
    category: "NLP / Deep Learning",
    year: "2023",
    status: "Académique",
    shortDesc: "Fine-tuning de BERT pour l'analyse de sentiment sur des avis produits en français et anglais.",
    longDesc: `Projet de fin de L3 : fine-tuning de CamemBERT (variante française de BERT) 
    sur un dataset d'avis e-commerce (150 000 exemples, 5 classes de sentiment). 
    
    Le modèle dépasse les baselines classiques (SVM, LogReg TF-IDF) de +12 points F1 
    sur le jeu de test, et gère nativement le code-switching français/anglais fréquent 
    dans les avis produits de la plateforme cible.`,
    stack: ["HuggingFace Transformers", "PyTorch", "CamemBERT", "BERT", "Python", "Weights & Biases"],
    highlights: [
      "Accuracy de 89% sur 5 classes",
      "+12 points F1 vs baseline SVM",
      "Support natif du code-switching FR/EN",
      "Entraîné sur 150 000 exemples annotés"
    ],
    github: "https://github.com/alexmoreau/multilingual-sentiment",
    demo: "https://huggingface.co/alexmoreau/camembert-sentiment",
    tags: ["HuggingFace", "PyTorch", "BERT"],
    featured: true,
  },
  {
    id: 4,
    title: "Dashboard BI interactif",
    category: "Data Visualisation",
    year: "2024",
    status: "Production",
    shortDesc: "Tableau de bord analytique pour le suivi KPI d'une startup SaaS, déployé en production pour 200+ utilisateurs.",
    longDesc: `Dashboard opérationnel développé en alternance pour une startup SaaS B2B. 
    Regroupe les KPIs issus de 4 sources (PostgreSQL, Stripe, HubSpot, Google Analytics) 
    via des connecteurs Python et un cache Redis pour les requêtes lourdes.
    
    L'interface Streamlit permet aux équipes métier (non-tech) de filtrer, exporter et 
    partager les vues sans dépendre des data analysts.`,
    stack: ["Streamlit", "Plotly", "Pandas", "PostgreSQL", "Redis", "Stripe API", "HubSpot API"],
    highlights: [
      "200+ utilisateurs actifs quotidiens",
      "Connexion à 4 sources de données hétérogènes",
      "Cache Redis (temps de chargement < 1.5s)",
      "Export CSV/Excel natif"
    ],
    github: null,  // repo privé
    demo: "https://dashboard-demo.alexmoreau.dev",
    tags: ["Streamlit", "Plotly", "Pandas"],
    featured: true,
  },
  {
    id: 5,
    title: "Détection d'anomalies industrielles",
    category: "Computer Vision",
    year: "2023",
    status: "Académique",
    shortDesc: "Système de vision par ordinateur pour détecter des défauts de fabrication sur une ligne de production.",
    longDesc: `Projet en partenariat avec une PME industrielle : détection automatique de 
    défauts (rayures, déformations, inclusions) sur des pièces métalliques en sortie de 
    chaîne de production.
    
    Architecture YOLOv8 fine-tuné sur un dataset propriétaire de 3 200 images annotées 
    avec 7 classes de défauts. Déployé sur edge (Jetson Nano) pour traitement local 
    sans dépendance réseau.`,
    stack: ["OpenCV", "YOLOv8", "PyTorch", "FastAPI", "NVIDIA Jetson", "Python", "Label Studio"],
    highlights: [
      "mAP@0.5 de 0.94 sur le jeu de test",
      "Inférence en temps réel (30 FPS sur Jetson Nano)",
      "7 classes de défauts détectés",
      "Réduction des coûts de contrôle qualité estimée à 40%"
    ],
    github: "https://github.com/alexmoreau/industrial-anomaly-detection",
    demo: null,
    tags: ["OpenCV", "YOLO", "FastAPI"],
    featured: true,
  },
  {
    id: 6,
    title: "Plateforme de déploiement ML",
    category: "MLOps",
    year: "2024",
    status: "En cours",
    shortDesc: "Infrastructure CI/CD pour le déploiement automatisé de modèles ML avec monitoring et retraining.",
    longDesc: `Plateforme interne (alternance) pour standardiser le cycle de vie des 
    modèles ML : du notebook de recherche à la mise en production. Intègre le versioning 
    des modèles (MLflow), le packaging (Docker), le déploiement (Kubernetes) et la 
    surveillance de la dérive des données.
    
    Actuellement en cours de déploiement sur l'infrastructure de l'entreprise, avec 
    3 modèles déjà migrés vers la plateforme.`,
    stack: ["Docker", "Kubernetes", "MLflow", "GitHub Actions", "Prometheus", "Grafana", "FastAPI"],
    highlights: [
      "3 modèles déjà migrés en production",
      "Réduction du temps de déploiement de 3 jours à 2 heures",
      "Monitoring de la dérive des features (data drift)",
      "Rollback automatique si dégradation des métriques"
    ],
    github: "https://github.com/alexmoreau/ml-platform",
    demo: null,
    tags: ["Docker", "MLflow", "GitHub Actions"],
    featured: true,
  },

  /* -------------------------------------------------------
     PROJETS SUPPLÉMENTAIRES (visibles dans "Voir tous")
  ------------------------------------------------------- */
  {
    id: 7,
    title: "Forecasting de séries temporelles",
    category: "Machine Learning",
    year: "2023",
    status: "Académique",
    shortDesc: "Comparaison de modèles ARIMA, Prophet et LSTM pour la prévision de ventes retail.",
    longDesc: `Étude comparative sur 3 ans de données de ventes (1 million de lignes) 
    d'une enseigne retail. Benchmarking systématique de ARIMA, SARIMA, Prophet et un 
    LSTM bidirectionnel. Prophet s'est révélé le meilleur compromis précision/coût 
    computationnel pour ce cas d'usage.`,
    stack: ["Python", "Prophet", "LSTM", "TensorFlow", "ARIMA", "statsmodels"],
    highlights: [
      "MAPE de 4.2% avec Prophet",
      "Dataset de 3 ans, 200+ SKUs",
      "Rapport comparatif complet"
    ],
    github: "https://github.com/alexmoreau/time-series-forecasting",
    demo: null,
    tags: ["Prophet", "LSTM", "Python"],
    featured: false,
  },
  {
    id: 8,
    title: "Système de recommandation",
    category: "Machine Learning",
    year: "2023",
    status: "Académique",
    shortDesc: "Moteur de recommandation hybride (collaborative filtering + content-based) pour une plateforme de streaming fictive.",
    longDesc: `Projet académique de système de recommandation hybride combinant le 
    filtrage collaboratif (ALS via Spark MLlib) et une approche content-based 
    (embeddings TF-IDF sur métadonnées). Le modèle hybride surpasse chaque approche 
    seule de 8% sur le NDCG@10.`,
    stack: ["Python", "Apache Spark", "ALS", "Scikit-learn", "TF-IDF", "NumPy"],
    highlights: [
      "NDCG@10 de 0.74",
      "Dataset MovieLens 25M",
      "Scalable via Spark MLlib"
    ],
    github: "https://github.com/alexmoreau/recommendation-engine",
    demo: null,
    tags: ["Spark", "ALS", "Python"],
    featured: false,
  },
  {
    id: 9,
    title: "Analyse exploratoire COVID-19",
    category: "Data Visualisation",
    year: "2022",
    status: "Archive",
    shortDesc: "Dashboard de visualisation des données pandémiques avec données OWID, déployé sur Heroku.",
    longDesc: `Premier projet public : analyse et visualisation des données Our World In Data 
    sur la pandémie COVID-19. Cartes choroplèthes, courbes de tendance, corrélations entre 
    indicateurs socio-économiques et mortalité.`,
    stack: ["Python", "Plotly Dash", "Pandas", "GeoPandas", "Heroku"],
    highlights: [
      "Visualisation de 200+ pays",
      "Mise à jour automatique des données (OWID API)",
      "500+ vues à son pic"
    ],
    github: "https://github.com/alexmoreau/covid-dashboard",
    demo: null,
    tags: ["Plotly Dash", "GeoPandas", "Python"],
    featured: false,
  },
];

/* Extraire toutes les catégories uniques */
const ALL_CATEGORIES = ["Tous", ...new Set(PROJECTS.map(p => p.category))];

/* Export pour les autres modules */
if (typeof module !== 'undefined') {
  module.exports = { PROJECTS, ALL_CATEGORIES };
}

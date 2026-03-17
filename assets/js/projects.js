/* ================================================================
   projects.js — Rendu des projets, Recherche, Filtres, Modal, Panneau complet
   Dépend de : data.js (chargé avant dans index.html)
================================================================ */

/* ---------------------------------------------------------------
   ÉTAT GLOBAL
--------------------------------------------------------------- */
const ProjectsState = {
  activeFilter: "Tous",
  searchQuery: "",
  maxVisible: 6,       // nombre de cartes visibles dans la section principale
};

/* ---------------------------------------------------------------
   1. INITIALISATION
--------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildFilterBar();
  renderMainGrid();
  renderAllProjectsPanel();
  initSearch();
  initModal();
  initAllProjectsPanel();
  updateProjectsCount();
});

/* ---------------------------------------------------------------
   2. FILTER BAR — génération dynamique
--------------------------------------------------------------- */
function buildFilterBar() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;

  ALL_CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "Tous" ? " active" : "");
    btn.textContent = cat;
    btn.dataset.category = cat;
    btn.addEventListener("click", () => setFilter(cat));
    bar.appendChild(btn);
  });
}

function setFilter(category) {
  ProjectsState.activeFilter = category;

  // Mettre à jour les boutons actifs
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  applyFilters();
}

/* ---------------------------------------------------------------
   3. SEARCH — input + clear button
--------------------------------------------------------------- */
function initSearch() {
  const input   = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  if (!input) return;

  input.addEventListener("input", () => {
    ProjectsState.searchQuery = input.value.trim().toLowerCase();
    clearBtn.classList.toggle("visible", ProjectsState.searchQuery.length > 0);
    applyFilters();
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    ProjectsState.searchQuery = "";
    clearBtn.classList.remove("visible");
    input.focus();
    applyFilters();
  });
}

/* ---------------------------------------------------------------
   4. APPLY FILTERS — combine catégorie + recherche + limite maxVisible
--------------------------------------------------------------- */
function applyFilters() {
  const { activeFilter, searchQuery, maxVisible } = ProjectsState;

  // 1. Calculer quels projets passent les filtres (catégorie + recherche)
  const matchingIds = new Set(
    PROJECTS.filter(p => {
      const matchCat = activeFilter === "Tous" || p.category === activeFilter;
      const matchSearch = !searchQuery
        || p.title.toLowerCase().includes(searchQuery)
        || p.category.toLowerCase().includes(searchQuery)
        || p.shortDesc.toLowerCase().includes(searchQuery)
        || p.stack.some(s => s.toLowerCase().includes(searchQuery))
        || p.tags.some(t => t.toLowerCase().includes(searchQuery))
        || String(p.year).includes(searchQuery);
      return matchCat && matchSearch;
    }).map(p => p.id)
  );

  // 2. Parcourir toutes les cartes et appliquer visibilité :
  //    - hors filtre  → hidden
  //    - dans filtre mais dépasse la limite → hidden
  //    - dans filtre et dans la limite → visible
  const cards = document.querySelectorAll("#mainGrid .card");
  let visibleCount = 0;

  cards.forEach(card => {
    const id = parseInt(card.dataset.id);
    const passesFilter = matchingIds.has(id);

    if (!passesFilter) {
      // Hors filtre : masquer
      card.classList.add("hidden");
      card.dataset.hiddenByLimit = "false";
    } else if (visibleCount < maxVisible) {
      // Dans le filtre et sous la limite : afficher
      card.classList.remove("hidden");
      card.dataset.hiddenByLimit = "false";
      visibleCount++;
    } else {
      // Dans le filtre mais dépasse la limite : masquer
      card.classList.add("hidden");
      card.dataset.hiddenByLimit = "true";
    }
  });

  // 3. Message "aucun résultat"
  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.classList.toggle("visible", matchingIds.size === 0);
  }

  // 4. Mises à jour affichage
  updateResultsMeta(matchingIds.size);
  updateProjectsCount();
}

function updateResultsMeta(count) {
  const el = document.getElementById("resultsMeta");
  if (!el) return;
  const total = PROJECTS.length;
  const q = ProjectsState.searchQuery;
  const f = ProjectsState.activeFilter;

  if (!q && f === "Tous") {
    el.innerHTML = `<span>${total}</span> projets au total`;
  } else {
    el.innerHTML = `<span>${count}</span> résultat${count > 1 ? "s" : ""} sur ${total}`;
  }
}

/* ---------------------------------------------------------------
   5. RENDER MAIN GRID (featured / premiers N projets)
--------------------------------------------------------------- */
function renderMainGrid() {
  const grid = document.getElementById("mainGrid");
  if (!grid) return;

  // Projets featured en premier, puis les autres
  const featured = PROJECTS.filter(p => p.featured);
  const others   = PROJECTS.filter(p => !p.featured);
  const ordered  = [...featured, ...others];

  ordered.forEach(project => {
    const card = createCard(project);
    grid.appendChild(card);
  });

  // Gestion "Voir plus" : masquer les cartes au-delà de maxVisible
  updateVisibilityByLimit();
}

function updateVisibilityByLimit() {
  // Déléguer entièrement à applyFilters qui gère maintenant la limite
  applyFilters();
}

function updateProjectsCount() {
  const el = document.getElementById("projectsCount");
  if (!el) return;
  const shown  = document.querySelectorAll("#mainGrid .card:not(.hidden)").length;
  const total  = PROJECTS.length;
  el.innerHTML = `Affichage de <span>${shown}</span> sur <span>${total}</span> projets`;
}

/* ---------------------------------------------------------------
   6. CARD FACTORY — crée un élément .card depuis un objet projet
--------------------------------------------------------------- */
function createCard(project, isAllPanel = false) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = project.id;

  card.innerHTML = `
    <div class="card-category">${escHtml(project.category)}</div>
    <h3 class="card-title">${escHtml(project.title)}</h3>
    <p class="card-desc">${escHtml(project.shortDesc)}</p>
    <div class="card-tags">
      ${project.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join("")}
    </div>
    <div class="card-footer">
      <span class="card-year">${project.year}</span>
      <span class="card-open">
        Détails
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  `;

  // Ouvrir la modal au clic
  card.addEventListener("click", () => openModal(project.id));
  return card;
}

/* ---------------------------------------------------------------
   7. ALL PROJECTS PANEL
--------------------------------------------------------------- */
function renderAllProjectsPanel() {
  const grid = document.getElementById("allGrid");
  if (!grid) return;

  const ordered = [...PROJECTS.filter(p => p.featured), ...PROJECTS.filter(p => !p.featured)];
  ordered.forEach(project => {
    const card = createCard(project, true);
    // Les cartes du panneau passent source="all-panel" à openModal
    card.removeEventListener("click", card._clickHandler);
    card._clickHandler = () => openModal(project.id, "all-panel");
    card.addEventListener("click", card._clickHandler);
    grid.appendChild(card);
  });
}

function initAllProjectsPanel() {
  const openBtn  = document.getElementById("showAllBtn");
  const closeBtn = document.getElementById("allClose");
  const overlay  = document.getElementById("allProjectsOverlay");
  if (!overlay) return;

  openBtn?.addEventListener("click", () => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  closeBtn?.addEventListener("click", closeAllPanel);

  // Fermer avec Echap
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeAllPanel();
  });
}

function closeAllPanel() {
  const overlay = document.getElementById("allProjectsOverlay");
  overlay?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------------
   8. PROJECT DETAIL MODAL
   La modal s'ouvre au-dessus de tout (y compris le panneau "Tous")
   grâce à un z-index supérieur géré via la classe .modal-above-all
--------------------------------------------------------------- */
// Contexte d'ouverture : "main" | "all-panel"
let _modalSource = "main";

function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");
  if (!overlay) return;

  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
  closeBtn?.addEventListener("click", closeModal);

  // Échap : ferme la modal en premier, puis le panneau si déjà fermé
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const modalOpen   = document.getElementById("modalOverlay")?.classList.contains("open");
    const panelOpen   = document.getElementById("allProjectsOverlay")?.classList.contains("open");

    if (modalOpen) {
      closeModal();            // 1er Échap → ferme la modal
    } else if (panelOpen) {
      closeAllPanel();         // 2e Échap → ferme le panneau
    }
  });
}

function openModal(projectId, source = "main") {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  _modalSource = source;
  populateModal(project);

  const overlay = document.getElementById("modalOverlay");
  const drawer  = document.getElementById("modalDrawer");

  // Si ouvert depuis le panneau "Tous" → z-index supérieur au panneau (300)
  if (source === "all-panel") {
    overlay.classList.add("modal-above-all");
  } else {
    overlay.classList.remove("modal-above-all");
  }

  overlay.classList.add("open");
  drawer.classList.add("open");

  // Ne pas bloquer le scroll du panneau "Tous" si on est dedans
  if (source === "main") {
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const drawer  = document.getElementById("modalDrawer");
  overlay.classList.remove("open");
  drawer.classList.remove("open");
  overlay.classList.remove("modal-above-all");

  // Restaurer le scroll uniquement si ouvert depuis la page principale
  if (_modalSource === "main") {
    document.body.style.overflow = "";
  }
  _modalSource = "main";
}

function populateModal(p) {
  // Catégorie
  document.getElementById("modalCategory").textContent = p.category;

  // Titre
  document.getElementById("modalTitle").textContent = p.title;

  // Description longue (gestion saut de lignes)
  document.getElementById("modalDesc").innerHTML =
    p.longDesc.trim().replace(/\n\s*\n/g, "</p><p>").replace(/^/, "<p>").replace(/$/, "</p>");

  // Chips (année + statut)
  const chipsEl = document.getElementById("modalChips");
  const statusClass = p.status === "Production" ? "accent" : "";
  chipsEl.innerHTML = `
    <span class="chip">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 1v5l3 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      ${p.year}
    </span>
    <span class="chip ${statusClass}">${p.status}</span>
  `;

  // Liens (GitHub + Démo)
  const linksEl = document.getElementById("modalLinks");
  linksEl.innerHTML = "";

  if (p.github) {
    const a = document.createElement("a");
    a.href = p.github;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "modal-link github";
    a.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
      Voir sur GitHub
    `;
    linksEl.appendChild(a);
  } else {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = "🔒 Repo privé";
    linksEl.appendChild(span);
  }

  if (p.demo) {
    const a = document.createElement("a");
    a.href = p.demo;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "modal-link demo";
    a.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 9.5l7-7M4 2.5h5.5V8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Démo live
    `;
    linksEl.appendChild(a);
  }

  // Stack technique
  const stackEl = document.getElementById("modalStack");
  stackEl.innerHTML = p.stack.map(s => `<span class="stack-tag">${escHtml(s)}</span>`).join("");

  // Points clés
  const hlEl = document.getElementById("modalHighlights");
  hlEl.innerHTML = p.highlights.map(h => `<li>${escHtml(h)}</li>`).join("");
}

/* ---------------------------------------------------------------
   UTILS
--------------------------------------------------------------- */
function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
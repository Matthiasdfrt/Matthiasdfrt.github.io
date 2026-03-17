/* ================================================================
   main.js — Navigation, Scroll Reveal, Compteurs, Formulaire
   Portfolio Alex Moreau — Data Science
================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollReveal();
  initCounters();
  initSmoothScroll();
  initContactForm();
});

/* ---------------------------------------------------------------
   1. NAVIGATION — header sticky + hamburger
--------------------------------------------------------------- */
function initNav() {
  const header    = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  /* Header scroll behavior */
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // état initial

  /* Hamburger toggle */
  hamburger?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* Fermer le menu mobile au clic sur un lien */
  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ---------------------------------------------------------------
   2. SCROLL REVEAL — IntersectionObserver
--------------------------------------------------------------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // déclenche une seule fois
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal, .reveal-group").forEach(el => {
    observer.observe(el);
  });
}

/* ---------------------------------------------------------------
   3. COMPTEURS ANIMÉS
--------------------------------------------------------------- */
function initCounters() {
  const statsBar = document.querySelector(".stats-bar");
  if (!statsBar) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll("[data-count]").forEach(el => {
            animateCounter(el, parseInt(el.dataset.count), 1300);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(statsBar);
}

/**
 * Anime un élément DOM de 0 à `target` en `duration`ms
 * Utilise une courbe easeOutExpo pour un effet naturel
 */
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();

  const tick = now => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------
   4. SMOOTH SCROLL — respect de l'offset du header fixe
--------------------------------------------------------------- */
function initSmoothScroll() {
  const NAV_HEIGHT = 72;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return; // ignorer les ancres vides

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ---------------------------------------------------------------
   5. FORMULAIRE DE CONTACT
--------------------------------------------------------------- */
function initContactForm() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", handleFormSubmit);
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const name    = document.getElementById("contactName")?.value.trim();
  const email   = document.getElementById("contactEmail")?.value.trim();
  const subject = document.getElementById("contactSubject")?.value.trim();
  const message = document.getElementById("contactMessage")?.value.trim();
  const btn     = document.getElementById("submitBtn");

  /* Validation */
  if (!name || !email || !message) {
    showToast("⚠ Merci de remplir les champs obligatoires.", "error");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("⚠ Adresse email invalide.", "error");
    return;
  }

  /* Simulation d'envoi (remplacer par votre backend / Formspree / EmailJS) */
  btn.disabled = true;
  btn.textContent = "Envoi en cours…";

  try {
    /*
     * TODO : remplacer ce setTimeout par un vrai appel API, ex :
     *
     * await fetch("https://formspree.io/f/VOTRE_ID", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify({ name, email, subject, message }),
     * });
     */
    await new Promise(res => setTimeout(res, 900));

    showToast("✓ Message envoyé avec succès !");
    ["contactName","contactEmail","contactSubject","contactMessage"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });

  } catch (err) {
    showToast("✗ Erreur lors de l'envoi. Réessayez.", "error");
    console.error("Form error:", err);
  } finally {
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14 2L2 7l4.5 2.5L9 14l5-12z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
      </svg>
      Envoyer le message`;
  }
}

/* ---------------------------------------------------------------
   6. TOAST NOTIFICATION
--------------------------------------------------------------- */
/**
 * Affiche une notification temporaire
 * @param {string} msg   - texte à afficher
 * @param {string} type  - "success" (défaut) | "error"
 */
function showToast(msg, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = msg;
  toast.style.background = type === "error" ? "#ff4455" : "var(--accent)";
  toast.style.color       = type === "error" ? "#fff"    : "#000";
  toast.classList.add("show");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("show"), 3500);
}

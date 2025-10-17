// JS for the CV website

// 1) Dynamic current year
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Email
const EMAIL_USER = "tilemachosbs7";
const EMAIL_DOMAIN = "gmail.com";
const fullEmail = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
const emailEl = document.getElementById("email");
if (emailEl) {
  emailEl.href = `mailto:${fullEmail}`;
  emailEl.textContent = fullEmail;
}

// 3) Theme toggle (auto → dark → light)
const root = document.documentElement;
const btn = document.getElementById("theme");

function setTheme(next) {
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  if (btn) btn.title = `Theme: ${next}`;
}

const saved = localStorage.getItem("theme");
setTheme(saved || "auto");

if (btn) {
  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "auto";
    const next = current === "auto" ? "dark" : current === "dark" ? "light" : "auto";
    setTheme(next);
  });
}

// 4) Back-to-top
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

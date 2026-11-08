const langToggle = document.getElementById("langToggle");
let currentLang = "fr";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });
  langToggle.textContent = lang === "fr" ? "EN" : "FR";
  langToggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
}

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "fr" ? "en" : "fr");
});

document.getElementById("year").textContent = new Date().getFullYear();

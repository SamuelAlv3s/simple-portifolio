/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((tab) => {
      tab.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");

    if (target.id === "projects") {
      document.querySelector(".filters__header-title").classList.add("active");
    } else {
      document
        .querySelector(".filters__header-title")
        .classList.remove("active");
    }
  });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

const srMain = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 0,
});

sr.reveal(".profile__border");
sr.reveal(".profile__name", { delay: 500 });
sr.reveal(".profile__profession", { delay: 600 });
sr.reveal(".profile__social", { delay: 700 });
sr.reveal(".profile__buttons", { delay: 800 });
sr.reveal(".scroll-down-indicator", { delay: 900 });
// sr.reveal(".filters__content", { delay: 900 });
// sr.reveal(".filters", { delay: 1000 });

srMain.reveal(".filters");

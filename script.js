const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

const dayTabs = document.querySelectorAll(".day-tab");
const scheduleDays = document.querySelectorAll(".schedule-day");

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedDay = tab.dataset.day;

    dayTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    scheduleDays.forEach((day) => {
      day.classList.toggle("active", day.id === `day-${selectedDay}`);
    });
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

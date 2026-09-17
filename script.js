document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE MENU */
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }


  /* SCROLL REVEAL */
  const revealItems = document.querySelectorAll(
    ".world-card, .audience-card, .experience-copy, .experience-visual, .karaoke-inner"
  );

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition = "opacity .8s ease, transform .8s ease";
    revealObserver.observe(item);
  });


  /* ADD VISIBLE STYLE WITHOUT NEEDING EXTRA CSS */
  const style = document.createElement("style");

  style.textContent = `
    .world-card.visible,
    .audience-card.visible,
    .experience-copy.visible,
    .experience-visual.visible,
    .karaoke-inner.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;

  document.head.appendChild(style);


  /* SMALL PARALLAX EFFECT */
  const planet = document.querySelector(".planet-orbit");

  window.addEventListener(
    "scroll",
    () => {

      if (!planet || window.innerWidth < 801) return;

      const y = window.scrollY;

      planet.style.transform =
        `translateY(calc(-50% + ${y * 0.08}px))`;
    },
    { passive: true }
  );


  /* CURRENT YEAR */
  const footerYear = document.querySelector("footer small");

  if (footerYear) {
    footerYear.textContent =
      `© ${new Date().getFullYear()} KELORA. All rights reserved.`;
  }

});

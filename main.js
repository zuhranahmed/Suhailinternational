// // Reveal Sections

const createSectionObserver = function () {
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    }
  };
  return new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.25,
  });
};

const allSections = document.querySelectorAll(".section-reveal");

allSections.forEach(function (section) {
  section.classList.add("section-hidden");
  createSectionObserver().observe(section);
});

// Responsive Navbar

const burgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navItems = document.querySelector(".navbar__links");
const navItemsSecondary = document.querySelector(".navbar-secondary__links");

const navSlideIn = () => {
  burgerIcon.addEventListener("click", () => {
    navItems.classList.add("show-nav");
  });
};
const navSlideOut = () => {
  closeIcon.addEventListener("click", () => {
    navItems.classList.remove("show-nav");
  });
};

//
const navSlideInSec = () => {
  burgerIcon.addEventListener("click", () => {
    navItemsSecondary.classList.add("show-nav");
  });
};
const navSlideOutSec = () => {
  closeIcon.addEventListener("click", () => {
    navItemsSecondary.classList.remove("show-nav");
  });
};

navSlideIn();
navSlideOut();
navSlideInSec();
navSlideOutSec();

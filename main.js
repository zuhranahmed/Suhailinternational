// Swiper JS Code Start

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  zoom: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".swiper-container-2", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Swiper JS Code end

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

const navSlideIn = () => {
  burgerIcon.addEventListener("click", () => {
    navItems.classList.add("show-nav");
    console.log("click");
  });
};
const navSlideOut = () => {
  closeIcon.addEventListener("click", () => {
    navItems.classList.remove("show-nav");
    console.log("click");
  });
};

navSlideIn();
navSlideOut();

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// build the nav
window.onload = () => {
  (() => {
    for (section of sections) {
      let sectionElement = document.createElement("li");
      sectionElement.innerText = section.dataset.nav;
      sectionElement.dataset.nav = section.dataset.nav;
      //adding click events to each nav item
      sectionElement.onclick = (event) => {
        //scrolling to the right section
        document
          .getElementById(
            event.target.dataset.nav.toLowerCase().replace(/\s/g, "")
          )
          .scrollIntoView({
            behavior: "smooth",
          });
      };
      nav.appendChild(sectionElement);
    }
  })();
};
// Add class 'active' to section when near top of viewport

window.onscroll = function () {
  for (section of sections) {
    if (section.getBoundingClientRect().top < 50) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
};

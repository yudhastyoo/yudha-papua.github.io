// const navbar = document.querySelector(".nav");

// let lastScrollTop = 0;

// window.addEventListener(
//   "scroll",
//   () => {
//     var { pageYOffset } = window;
//     if (pageYOffset > lastScrollTop) {
//       navbar.classList.remove("visible");
//     } else if (pageYOffset < lastScrollTop) {
//       navbar.classList.add("visible");
//     }
//     lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
//   },
//   { passive: true }
// );

// progress scroll bar
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBar.style.width = `${width}%`;
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Animation
window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("job-title").style.opacity = 1;
});

// Tabs Experience
function openTab(evt, tabName) {
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to be opened
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab-link")[0].className += " active";

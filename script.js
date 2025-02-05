// Data of projects
const projects = [
  {
    title: "Project, City and state",
    description: "This project was made using HTML, CSS, and JavaScript...",
    images: [
      "./images/landing-carousel-images-1.png",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
  {
    title: "Project, City and state",
    description: "This project was made using React and Node.js...",
    images: [
      "./images/victor-wJ4kpIZOjtE-unsplash.jpg",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
  {
    title: "Project, City and state",
    description: "This project was made using Python and Flask...",
    images: [
      "./images/justin-chrn-DaQcLTlz83k-unsplash.jpg",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
  {
    title: "Project, City and state",
    description: "This project was made using Python and Flask...",
    images: [
      "./images/justin-chrn-DaQcLTlz83k-unsplash.jpg",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
  {
    title: "Project, City and state",
    description: "This project was made using Python and Flask...",
    images: [
      "./images/justin-chrn-DaQcLTlz83k-unsplash.jpg",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
  {
    title: "Project, City and state",
    description: "This project was made using Python and Flask...",
    images: [
      "./images/justin-chrn-DaQcLTlz83k-unsplash.jpg",
      "./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg",
      "./images/baptiste-merel-ddYN_sypNOQ-unsplash.jpg",
    ],
  },
];

let currentProject = 0;
let currentImage = 0;

const slideshowImage = document.getElementById("slideshow-image");
const projectTitle = document.getElementById("project-title");
const projectText = document.getElementById("project-text");

function showProject(index) {
  currentProject = index;
  currentImage = 0;
  updateContent();
  startSlideshow();
}

function updateContent() {
  projectTitle.textContent = projects[currentProject].title;
  projectText.textContent = projects[currentProject].description;
  slideshowImage.src = projects[currentProject].images[currentImage];
}

function startSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    currentImage = (currentImage + 1) % projects[currentProject].images.length;
    slideshowImage.src = projects[currentProject].images[currentImage];
  }, 3000);
}

// Initialize
let slideshowInterval;
startSlideshow();

const urlParams = new URLSearchParams(window.location.search);
const projectIndex = parseInt(urlParams.get("project"), 10);
showProject(projectIndex);
// Update the content based on the selected project
const project = projects[projectIndex];
if (project) {
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").textContent =
    project.description;
  document.getElementById("project-image").src = project.image;
} else {
  document.body.innerHTML = "<h1>Project not found</h1>";
}

function openSearch() {
  document.getElementById("searchOverlay").style.display = "flex";
}

function closeSearch() {
  document.getElementById("searchOverlay").style.display = "none";
}

// Close overlay when clicking outside the search container
window.onclick = function (event) {
  const overlay = document.getElementById("searchOverlay");
  if (event.target === overlay) {
    closeSearch();
  }
};

// Add this to your JavaScript file
const searchTrigger = document.querySelector(".search-trigger"); // Add this class to your search button
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

searchTrigger.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Set the src attribute to the data-src value
        img.classList.remove("lazy"); // Remove the lazy class
        observer.unobserve(img); // Stop observing the image
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image); // Start observing each lazy image
  });
});

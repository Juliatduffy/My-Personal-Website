// Menu toggling stuff
function openMenu() {
  document.getElementById("side-menu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("side-menu").style.width = "0px";
}

// side bar stuff
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".menu-text a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// load underlines
document.addEventListener("DOMContentLoaded", function () {
  const highlightElements = document.querySelectorAll(".highlight"); // Select all elements with the class 'highlight'
  const delayBase = 400; // Base delay in milliseconds

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(highlightElements).indexOf(entry.target);
        const delay = index * delayBase; // 500ms delay per element index

        if (entry.isIntersecting) {
          // Set a timeout to add the 'active' class after a delay
          entry.target.dataset.timeoutId = setTimeout(() => {
            entry.target.classList.add("active");
          }, delay);
        } else {
          // Clear the timeout if the element is not intersecting and remove the 'active' class
          if (entry.target.dataset.timeoutId) {
            clearTimeout(entry.target.dataset.timeoutId);
            entry.target.dataset.timeoutId = null;
          }
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.1, // Adjust the threshold as needed
    }
  );

  highlightElements.forEach((element) => observer.observe(element));
});

// load underlines 1
document.addEventListener("DOMContentLoaded", function () {
  const highlight1Elements = document.querySelectorAll(".highlight1"); // Select all elements with the class 'highlight1'
  const delayBase = 100; // Base delay in milliseconds

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(highlight1Elements).indexOf(entry.target);
        const delay = index * delayBase; // 500ms delay per element index

        if (entry.isIntersecting) {
          // Set a timeout to add the 'active' class after a delay
          entry.target.dataset.timeoutId = setTimeout(() => {
            entry.target.classList.add("active");
          }, delay);
        } else {
          // Clear the timeout if the element is not intersecting and remove the 'active' class
          if (entry.target.dataset.timeoutId) {
            clearTimeout(entry.target.dataset.timeoutId);
            entry.target.dataset.timeoutId = null;
          }
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.1, // Adjust the threshold as needed
    }
  );

  highlight1Elements.forEach((element) => observer.observe(element));
});

// underline-purple animation
document.addEventListener("DOMContentLoaded", function () {
  const purpleElements = document.querySelectorAll(".underline-purple");
  const delayBase = 150; // optional staggered delay

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(purpleElements).indexOf(entry.target);
        const delay = index * delayBase;

        if (entry.isIntersecting) {
          entry.target.dataset.timeoutId = setTimeout(() => {
            entry.target.classList.add("active");
          }, delay);
        } else {
          if (entry.target.dataset.timeoutId) {
            clearTimeout(entry.target.dataset.timeoutId);
            entry.target.dataset.timeoutId = null;
          }
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  purpleElements.forEach((el) => observer.observe(el));
});

// Education drop downs
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".dropdown-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const description = button.parentElement.nextElementSibling;
      const isVisible = description.style.display === "block";
      description.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "+" : "-"; // Toggle arrow icon
    });
  });
});

//underline attempt 2

document.addEventListener("DOMContentLoaded", () => {
  const emphasizes = document.querySelectorAll(".emphasize");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("line-visible");
        } else {
          entry.target.classList.remove("line-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  emphasizes.forEach((emphasize) => {
    observer.observe(emphasize);
  });
});

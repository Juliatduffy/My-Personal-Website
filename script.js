// Menu toggling stuff
function openMenu() {
    document.getElementById('side-menu').style.width = "250px";
 }

function closeMenu() {
    document.getElementById('side-menu').style.width = "0px";
 }

// side bar stuff
   document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.menu-text a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


 // load underline
 document.addEventListener('DOMContentLoaded', function() {
    const highlightElement = document.getElementById('highlight');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.1 // Adjust the threshold as needed
    });

    observer.observe(highlightElement);
  });
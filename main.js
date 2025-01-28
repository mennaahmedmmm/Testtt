// Select toggle button and navigation menu

const toggleBtn = document.getElementById('toggle-btn');
const navMenu = document.getElementById('nav-menu');

// Toggle the menu display
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show'); 
  toggleBtn.classList.toggle('open');
});

// Close menu on navigation link click
const navLinks = document.querySelectorAll('.nav-menu a'); 

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const sectionId = link.getAttribute('href').substring(1); 
    const section = document.getElementById(sectionId); 
    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });

    // Hide the menu
    navMenu.classList.remove('show');
    toggleBtn.classList.remove('open'); 
  });
});
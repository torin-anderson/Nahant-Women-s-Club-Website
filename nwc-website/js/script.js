// Function to fetch and insert HTML content
const includeHTML = () => {
  // 1. Fetch the header
  fetch('/partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      // After loading header, highlight the active link
      setActiveLink();
    })
    .catch(error => console.error('Error loading the header:', error));

  // 2. Fetch the footer
  fetch('/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading the footer:', error));
};

// Function to set the active class on the current page's navigation link
const setActiveLink = () => {
    // Get the current page's path (e.g., "/about.html")
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find all navigation links in the newly loaded header
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
};

// Run the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', includeHTML);
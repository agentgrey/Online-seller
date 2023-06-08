// Get all the navigation items
const navigationItems = document.querySelectorAll('.navigation li');

// Get all the sections
const sections = document.querySelectorAll('.section');

// Add click event listener to each navigation item
navigationItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the data-section attribute value
    const sectionName = item.dataset.section;

    // Remove 'active' class from all navigation items
    navigationItems.forEach(navItem => {
      navItem.classList.remove('active');
    });

    // Remove 'active' class from all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Add 'active' class to the clicked navigation item
    item.classList.add('active');

    // Show the corresponding section
    const selectedSection = document.querySelector(`.${sectionName}`);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  });
});

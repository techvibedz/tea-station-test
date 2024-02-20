document.addEventListener('DOMContentLoaded', function () {
  const navBtn = document.getElementById('nav-btn');
  const navClose = document.getElementById('nav-close');
  const navbar = document.getElementById('navbar');

  // Add a click event listener to the navBtn
  navBtn.addEventListener('click', function () {
    // Toggle the 'showNav' class on the navbar
    navbar.classList.toggle('showNav');
  });

  // Add a click event listener to the navClose button
  navClose.addEventListener('click', function () {
    // Remove the 'showNav' class to close the navbar
    navbar.classList.remove('showNav');
  });

  // Close the navbar if a user clicks outside the navbar
  document.addEventListener('click', function (event) {
    const isNavClicked = navbar.contains(event.target);
    const isNavBtnClicked = navBtn.contains(event.target);
    
    // Close the navbar if it's open and the click is outside the navbar or not on the navBtn
    if (navbar.classList.contains('showNav') && !isNavClicked && !isNavBtnClicked) {
      navbar.classList.remove('showNav');
    }
  });
});

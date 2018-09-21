var menuToggle = document.getElementById("menu-toggle");
var mobileMenu = document.getElementById("mobile-menu");
// Listen for menu toggle click
menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile-menu_active');
});
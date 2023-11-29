// Select the header element
var header = document.querySelector('header');

// Add scroll event listener to window
window.addEventListener('scroll', function() {
    // Check if scrolled down
    if (window.scrollY > 80) {
        // Add 'scrolled' class to header
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class from header
        header.classList.remove('scrolled');
    }
});
var navbar = document.querySelector('.mobile-navbar');
var bgHide = document.querySelector('.background-hide');
var mainElement = document.querySelector('main');
var burger = document.querySelector('.burger');
var hedear = document.querySelector('header');
document.querySelector('.burger-click').addEventListener('click', function() {
    navbar.classList.toggle('show');
    mainElement.classList.toggle('blur');
    bgHide.classList.toggle('show');
    burger.classList.toggle('show');
    header.style.position = 'static';
});
document.querySelector('.background-hide').addEventListener('click', function() {
    console.log('click');
    navbar.classList.remove('show');
    mainElement.classList.remove('blur');
    bgHide.classList.remove('show');
    burger.classList.remove('show');
    header.style.position = 'sticky';
});

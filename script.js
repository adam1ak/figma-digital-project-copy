var navbar = document.querySelector('.mobile-navbar');
var bgHide = document.querySelector('.background-hide');
var mainElement = document.querySelector('main');
var burger = document.querySelector('.burger');
var hedear = document.querySelector('header');
var body = document.querySelector('body');
var header = document.querySelector('header');

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            header.style.filter = "blur(5px)";
            mainElement.classList.toggle('blur');
            body.style.overflow = 'hidden';
        },
        750
    )
});

document.querySelector("#popup-close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    header.style.filter = "none";
    mainElement.classList.remove('blur')
    body.style.overflow = 'visible';
});
document.querySelector("#popup-link-close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    header.style.filter = "none";
    mainElement.classList.remove('blur')
    body.style.overflow = 'visible';
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.querySelector('.burger-click').addEventListener('click', function() {
    navbar.classList.toggle('show');
    mainElement.classList.toggle('blur');
    bgHide.classList.toggle('show');
    burger.classList.toggle('show');
    header.style.position = 'static';
    body.style.overflow = 'hidden';
});
document.querySelector('.background-hide').addEventListener('click', function() {
    console.log('click');
    navbar.classList.remove('show');
    mainElement.classList.remove('blur');
    bgHide.classList.remove('show');
    burger.classList.remove('show');
    header.style.position = 'sticky';
    body.style.overflow = 'visible';
});

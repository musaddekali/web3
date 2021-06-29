// Venilla JavaScript
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const navItem = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__item a');

// Show and Hide Mobile Nav 
menuBtn.addEventListener('click', () => {
    header.classList.toggle('mobile-nav-active');
});

//Hide menu when click any link and add active class
navLink.forEach((link) => {
    link.addEventListener('click', function () {
        let current = document.querySelectorAll('.active');
        current[0].className = current[0].className.replace(' active', '');
        this.parentNode.className += ' active';

        let hash = this.hash;
        if (hash !== '') {
            if (header.classList.contains('mobile-nav-active')) {
                header.classList.remove('mobile-nav-active');
            }
        }
    });
    ;
});

// jQuery plugins
(function () {
    let headerHeight = $('.header').height();
    // Smooth Scrolling 
    $('a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            let hash = this.hash;
            let scrollto = $(hash).offset().top - (headerHeight + 15);
            $('html, body').animate({
                scrollTop: scrollto
            }, 800);
        }
    });
    // Owl Carousel init 
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["<span>&larr;</span>", "<span>&rarr;</span>"],
        dots: false,
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });
})();
// End jQuery

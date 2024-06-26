document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('open');
        menuLinks.classList.toggle('open');
    });

    const skillsCarousel = document.querySelector('.skills-carousel .carousel');
    skillsCarousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        skillsCarousel.scrollLeft += e.deltaY;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Handle dynamic greeting based on time of day
    const greeting = document.getElementById('greeting');
    const hours = new Date().getHours();

    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }

    // Handle vertical navigation scroll and active state
    const dots = document.querySelectorAll('.vertical-nav .dot');
    const sections = document.querySelectorAll('main section');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            // Add the active class to the clicked dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let currentIndex = sections.length - 1;
        for (let i = sections.length - 1; i >= 0; i--) {
            if (window.scrollY + window.innerHeight / 2 >= sections[i].offsetTop) {
                currentIndex = i;
                break;
            }
        }
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');

        // Dynamic header background change on scroll
        const header = document.querySelector('.dynamic-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Handle carousel functionality for projects
    const carouselItems = document.querySelectorAll('.projects-carousel .carousel-item');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectIndicators = document.querySelectorAll('.projects-carousel .slide-indicator');

    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            projectTitle.textContent = item.getAttribute('data-title');
            projectDescription.textContent = item.getAttribute('data-description');
            carouselItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            projectIndicators.forEach(i => i.classList.remove('active'));
            projectIndicators[index].classList.add('active');
        });
    });

    projectIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            carouselItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
            carouselItems.forEach(i => i.classList.remove('active'));
            carouselItems[index].classList.add('active');
            projectIndicators.forEach(i => i.classList.remove('active'));
            indicator.classList.add('active');
        });
    });

    // Handle carousel functionality for skills
    const skillItems = document.querySelectorAll('.skills-carousel .carousel-item');
    const skillTitle = document.getElementById('skill-title');
    const skillDescription = document.getElementById('skill-description');
    const skillIndicators = document.querySelectorAll('.skills-carousel .slide-indicator');

    skillItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            skillTitle.textContent = item.getAttribute('data-title');
            skillDescription.textContent = item.getAttribute('data-description');
            skillItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            skillIndicators.forEach(i => i.classList.remove('active'));
            skillIndicators[index].classList.add('active');
        });
    });

    skillIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            skillItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
            skillItems.forEach(i => i.classList.remove('active'));
            skillItems[index].classList.add('active');
            skillIndicators.forEach(i => i.classList.remove('active'));
            indicator.classList.add('active');
        });
    });
});

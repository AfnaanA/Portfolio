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
    const carouselItems = document.querySelectorAll('.carousel-item');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const slideIndicators = document.querySelectorAll('.slide-indicator');

    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            projectTitle.textContent = item.getAttribute('data-title');
            projectDescription.textContent = item.getAttribute('data-description');
            carouselItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            slideIndicators.forEach(i => i.classList.remove('active'));
            slideIndicators[index].classList.add('active');
        });
    });

    slideIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            carouselItems[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
            carouselItems.forEach(i => i.classList.remove('active'));
            carouselItems[index].classList.add('active');
            slideIndicators.forEach(i => i.classList.remove('active'));
            indicator.classList.add('active');
        });
    });

    // Skills Carousel Navigation
    const skillItems = document.querySelectorAll('.skills-carousel .carousel .skill-item');
    const prevBtn = document.querySelector('.skills-carousel .slide-bar .prev-btn');
    const nextBtn = document.querySelector('.skills-carousel .slide-bar .next-btn');
    let currentSkillIndex = 0;

    function updateSkillCarousel(index) {
        skillItems.forEach((item, i) => {
            item.style.display = (i === index || i === index + 1) ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSkillIndex = (currentSkillIndex - 2 + skillItems.length) % skillItems.length;
        updateSkillCarousel(currentSkillIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentSkillIndex = (currentSkillIndex + 2) % skillItems.length;
        updateSkillCarousel(currentSkillIndex);
    });

    // Initialize carousel display
    updateSkillCarousel(currentSkillIndex);
});

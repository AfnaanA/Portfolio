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

    // Initialize SplideJS for the skills section
    new Splide('#splide', {
        type       : 'loop',
        perPage    : 3,
        perMove    : 1,
        gap        : '1rem',
        pagination : true,
        autoplay   : true,
        breakpoints: {
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            },
        },
    }).mount();
});


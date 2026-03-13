window.addEventListener('DOMContentLoaded', event => {
    const sideNav = document.body.querySelector('#sideNav');

    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -35%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const cards = document.querySelectorAll('.timeline-card, .project-card, .skill-box, .goal-card, .highlight-card');

    const revealOnScroll = () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';
        card.style.transition = 'all 0.6s ease';
    });

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});

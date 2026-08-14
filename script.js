// for mobile nav toggle

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// for active state
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// for animation

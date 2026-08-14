const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});
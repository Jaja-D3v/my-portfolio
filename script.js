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

// this is for animation

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((element) => {
    observer.observe(element);
});


// for changing tab 

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


// for mouise indicator

const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        scrollIndicator.classList.add("hide");
    } else {
        scrollIndicator.classList.remove("hide");
    }
});
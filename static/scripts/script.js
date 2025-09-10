window.addEventListener('DOMContentLoaded', () => {
    window.location.hash = '#home'; // Ensure URL hash is set to #home
    const targetSection = document.getElementById('home');
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 31, 63, 0.98)';
    } else {
        header.style.background = 'rgba(0, 31, 63, 0.95)';
    }
});

// Mobile menu toggle (basic implementation)
document.querySelector('.mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Resume download functionality with analytics
document.querySelector('.resume-download').addEventListener('click', function (e) {
    console.log('Resume downloaded');

    setTimeout(() => {
        alert('Thank you for downloading my resume! Feel free to reach out if you have any questions.');
    }, 500);
});
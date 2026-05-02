// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('mobileDrawer');
const iMenu = document.getElementById('iconMenu');
const iClose = document.getElementById('iconClose');

menuBtn.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  iMenu.style.display = open ? 'none' : 'block';
  iClose.style.display = open ? 'block' : 'none';
});

document.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    drawer.classList.remove('open');
    iMenu.style.display = 'block';
    iClose.style.display = 'none';
  });
});

// Footer year
document.getElementById('footerYear').textContent =
  `© ${new Date().getFullYear()} Play Space Events. All rights reserved.`;

// Scroll-spy: highlight the nav link for the current section
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [
  { id: 'home',       link: document.querySelector('.nav-links a[href="#home"]') },
  { id: 'about',      link: document.querySelector('.nav-links a[href="#about"]') },
  { id: 'facilities', link: document.querySelector('.nav-links a[href="#facilities"]') },
  { id: 'services',   link: document.querySelector('.nav-links a[href="#services"]') },
  { id: 'contact',    link: document.querySelector('.nav-links a[href="#contact"]') },
];

function updateActive() {
  const scrollY = window.scrollY + 100;
  let current = sections[0];
  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el && el.offsetTop <= scrollY) current = s;
  });
  navLinks.forEach(a => a.classList.remove('active'));
  if (current.link) current.link.classList.add('active');
}

window.addEventListener('scroll', updateActive, { passive: true });
updateActive();

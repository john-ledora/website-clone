const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('mobile-menu-close-btn');

openBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});
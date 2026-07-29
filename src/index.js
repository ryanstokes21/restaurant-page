import './style.css';
import loadHome from './components/home.js';
import loadAbout from './components/about.js';
import loadMenu from './components/menu.js';

const nav = document.getElementById('nav');
loadHome();

nav.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;

  switch (button.textContent) {
    case 'Home':
      loadHome();
      break;
    case 'Menu':
      loadMenu();
      break;
    case 'About':
      loadAbout();
      break;
  }
});

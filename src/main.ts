import './estilo.scss';
import Typed from 'typed.js';
import('@fortawesome/fontawesome-free/js/brands.min');
import('@fortawesome/fontawesome-free/js/fontawesome.min');
import('@fortawesome/fontawesome-free/js/solid.min');

addEventListener('DOMContentLoaded', () => {
  const typed = new Typed(".texto", {
    strings: ["FullStack", "Designer", "Geek", "Dev", "Rodrigo^10000"],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

const loader: HTMLDivElement = document.querySelector('.app-loading');
loader.style.display = 'none';

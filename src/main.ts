import Typed from 'typed.js';
import './estilo.scss';

addEventListener('DOMContentLoaded', () => {
  const typed = new Typed(".texto", {
    strings: ["WebMaster", "Designer", "Geek", "Rodrigo^10000"],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

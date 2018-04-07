import Typed from 'typed.js';
import './estilo.css';

addEventListener('DOMContentLoaded', function(){
  const typed = new Typed(".texto", {
    strings: ["WebMaster", "Designer", "Geek","Rodrigo"],
    typeSpeed: 100,
    startDelay: 10,
    backSpeed: 100,
    backDelay: 500,
  });
});

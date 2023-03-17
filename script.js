let menubtn = document.getElementById('menubtn');
let menubtnSidebar = document.getElementById('menubtn-sidebar');
let mySidebar = document.getElementById('mySidebar');
let main = document.getElementById('main');
let sidebarLinks = document.querySelectorAll('.side-links')
let desktopNav = document.getElementById('desktop-nav');
let mobileNav = document.getElementById('mobile-nav');
let media = window.matchMedia("(min-width: 48rem)")
/*   let skills = [].slice.call(document.getElementById('hero-skills').children); */

/*   let ram = window.requestAnimationFrame || window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  let position = 0;
  let animateSkills = () => {
    position += 1;
    skills.forEach(skill => {
      while()
      skill.style.top = position + "px";
      if(Math.abs(skill.offsetTop) > 600){
        skill.style.top = "-572px"
      }
    });


    if (Math.abs(position) >= 100){
      position = -100;
    }

    ram(animateSkills)
  }
  animateSkills(); */





let openNav = () => {
  if (media.matches) {
    desktopNav.style.left = '20rem';
  }
  mySidebar.style.left = '0';
  main.style.left = '20rem';

  menubtn.innerHTML = "&#10005;";
  menubtnSidebar.innerHTML = "&#10005;";
  menubtn.addEventListener('click', closeNav)
  menubtn.removeEventListener('click', openNav)
  menubtnSidebar.addEventListener('click', closeNav)
  menubtnSidebar.removeEventListener('click', openNav)
}

menubtn.addEventListener('click', openNav)
menubtnSidebar.addEventListener('click', openNav)


let closeNav = () => {
  if (media.matches) {
    main.style.left = '5rem';
    mySidebar.style.left = '-15rem';
    desktopNav.style.left = '5rem';
  } else {
    main.style.left = '0';
    mySidebar.style.left = '-20rem';
  }
  menubtn.innerHTML = '&#9776;'
  menubtnSidebar.innerHTML = '&#9776;'
  menubtn.removeEventListener('click', closeNav)
  menubtn.addEventListener('click', openNav)
  menubtnSidebar.removeEventListener('click', closeNav)
  menubtnSidebar.addEventListener('click', openNav)
}

sidebarLinks.forEach(el => el.addEventListener('click', closeNav))

let navDisplays = () => {
  if (media.matches) {
    mySidebar.style.left = '-15rem';
    main.style.left = '5rem';
    desktopNav.style.left = '5rem';
    desktopNav.style.display = 'flex';
    mobileNav.style.display = 'none';
  } else {
    mySidebar.style.left = '-20rem';
    main.style.left = '0rem';
    desktopNav.style.display = 'none';
    mobileNav.style.display = 'flex';
  }
  closeNav();
}
window.addEventListener('resize', navDisplays)

/* Test for language change */

let pageLanguages = {
  en: true,
  es: true,
};

// Figure out the language, default to English because that's
// what I speak.
var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);

let heroCopyP1 = document.querySelectorAll('#hero-copy p')[0];
let heroCopyP2 = document.querySelectorAll('#hero-copy p')[1];
let contactButton = document.querySelector('.contactButton');

let translation = {
  es: {
    heroCopyP1: 'Mi misión es diseñar sitios y apps web que la gente use con gusto. Desde el concepto y el maquetado hasta la publicación en línea.',
    heroCopyP2: `Desarrollo en HTML, CSS, y JavaScript, uso GitHub para control de versiones. Aquí está <a class="link" href="">mi CV</a> en pdf.`,
    contactButton: 'Contáctame',
  }
}

if (/^es\b/.test(lang)) {
  heroCopyP1.textContent = translation['es'].heroCopyP1;
  heroCopyP2.innerHTML = translation['es'].heroCopyP2;
  contactButton.innerHTML = translation['es'].contactButton;
}


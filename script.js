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

/* Translation to spanish */
/* Automatically shows version in spanish if clients browser language is set to spanish */

let pageLanguages = {
  en: true,
  es: true,
};

//1. Figure out the language, default to English.
var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);

// 2. Select text elements to translate.
let aboutMeLink = document.querySelector('a.side-links');
let heroCopyP1 = document.querySelectorAll('#hero-copy p')[0];
let heroCopyP2 = document.querySelectorAll('#hero-copy p')[1];
let contactButton = document.querySelectorAll('.contact-button');
let portfolioTitle = document.querySelectorAll('.portfolio-title');
let portfolioCopy = document.querySelector('#portfolio>p');
let projectCopy = document.querySelectorAll('.card-content p');
let projectDetailsLink = document.querySelectorAll('.project-link a');
let contactTitle = document.querySelector('#contact h2');
let contactCopy = document.querySelector('#contact>p');
let contactSectionButton = document.querySelector('#contact span');
let contactEmail = document.querySelector('#contact h4 a');
let cvDownload = document.querySelectorAll('#sidebar-icons a')[1];

// 3. Store each text translation in an object.
let translation = {
  es: {
    aboutMeLink: "Sobre Mi",
    heroCopyP1: "Mi misión es diseñar sitios y apps web que la gente use con gusto. Desde el concepto y el maquetado hasta la publicación en línea.",
    heroCopyP2: `Desarrollo en HTML, CSS, y JavaScript, uso GitHub para control de versiones. Aquí está <a class="link" href="">mi CV</a> en pdf.`,
    contactButton: "Contáctame",
    portfolioTitle: "Galería",
    portfolioCopy: "Estos son algunos de mis ultimos trabajos:",
    projectCopy1: "Web app de renovación de planos de projecto para la industria de la construcción.",
    projectCopy2: "Landing page con formulario de contacto para empresa de diseño de sistemas (en curso).",
    projectCopy3: "Landing page con calendario de agendamiento para empresa de mejoras automotrices (en curso).",
    projectDetailsLink: "Ver más",
    contactTitle: "Una llamada rápida?",
    contactCopy: `Cualquier consulta que tengas, llámame o escribeme al whatsapp.<br> Feliz de ayudar.`,
    contactSectionButton: "contáctame",
    contactEmail: "O envíame un email",
    cvDownload: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="64" viewBox="0 0 32 64" fill="#57eaea"><path d="M29.7,0H2.4C1.1,0,.05,2.57.05,5.73V58.27C.05,61.43,1.1,64,2.4,64H29.7c1.3,0,2.35-2.57,2.35-5.73V5.73C32.05,2.57,31,0,29.7,0ZM11.89,10.56,14.45,13V6.4h3.2V13l2.56-2.48,2.24,2.24-6.4,6.4-6.4-6.4ZM20,53.37a6.13,6.13,0,0,1-8.6,0,6.16,6.16,0,0,1-.17-8.59l.3-.32,2.23,2.12-.29.31a3.06,3.06,0,1,0,4.44,0l-.3-.31,2.23-2.12.3.31A6.15,6.15,0,0,1,20,53.37ZM9.55,43.21V39.86l5.23-2.25L9.55,35.35V32l13,5.62ZM24.05,24h-16V20.8h16Z"/></svg>`,
    cvDownloadLinkES: "/assets/img/JOSEMARVAL_FRONTENDJUNIOR_ES.pdf",
  }
}

// 4. Figure out the language, default to English.
var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);

// 5. Check if client's language is spanish, and if so, apply translations.
if (/^es\b/.test(lang)) {
  aboutMeLink.textContent = translation['es'].aboutMeLink;
  heroCopyP1.textContent = translation['es'].heroCopyP1;
  heroCopyP2.innerHTML = translation['es'].heroCopyP2;
  contactButton.forEach(button => { button.textContent = translation['es'].contactButton });
  portfolioTitle.textContent = translation['es'].portfolioTitle;
  portfolioTitle.forEach(link => { link.textContent = translation['es'].portfolioTitle });
  portfolioCopy.textContent = translation['es'].portfolioCopy;
  projectCopy[0].textContent = translation['es'].projectCopy1;
  projectCopy[1].textContent = translation['es'].projectCopy2;
  projectCopy[2].textContent = translation['es'].projectCopy3;
  projectDetailsLink.forEach(link => { link.textContent = translation['es'].projectDetailsLink });
  contactTitle.textContent = translation['es'].contactTitle;
  contactCopy.innerHTML = translation['es'].contactCopy;
  contactSectionButton.textContent = translation['es'].contactSectionButton;
  contactEmail.textContent = translation['es'].contactEmail;
  cvDownload.innerHTML = translation['es'].cvDownload;
  cvDownload.href = translation['es'].cvDownloadLinkES;
}
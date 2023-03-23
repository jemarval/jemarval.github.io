/* Navigation */
let menubtn = document.getElementById('menubtn');
let menubtnSidebar = document.getElementById('menubtn-sidebar');
let mySidebar = document.getElementById('mySidebar');
let main = document.getElementById('main');
let sidebarLinks = document.querySelectorAll('.side-links')
let desktopNav = document.getElementById('desktop-nav');
let mobileNav = document.getElementById('mobile-nav');
let media = window.matchMedia("(min-width: 48rem)")

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
    mySidebar.style.left = '-20.5rem';
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
    mySidebar.style.left = '-20.5rem';
    main.style.left = '0rem';
    desktopNav.style.display = 'none';
    mobileNav.style.display = 'flex';
  }
  closeNav();
}

window.addEventListener('resize', navDisplays);

/* --------------------- */
/* Project Detail Modals */
let body = document.body;
let modal = document.querySelector('#project-modal');
let projects = document.querySelectorAll('#project-modal section');
let projectLink = document.querySelectorAll('.project-link button');
let closeModalBtn = document.getElementById('close-modal-btn');
let nextProjectBtn = document.getElementById('next-modal-btn');
let previousProjectBtn = document.getElementById('previous-modal-btn');

// modal[0].style.display = 'block';

let id;

let openModal = event => {
  body.style.overflow = 'hidden';
  body.style.height = '100%';
  id = event.target.dataset.projectid;
  modal.style.display = 'block';
  projects[id].style.display = 'block';
  modal.scrollTo(0,0);
}

projectLink.forEach(link => link.addEventListener('click', openModal))

let closeModal = () => {
  body.style.overflow = 'auto';
  body.style.height = 'auto';
  modal.style.display = 'none';
  projects[id].style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);


let nextProject = () => {
  projects[id].style.display = 'none';
  if (id >= projects.length - 1) {
    id = 0;
  } else { id++ }
  projects[id].style.display = 'block';
  modal.scrollTo(0,0);
}

nextProjectBtn.addEventListener('click', nextProject);

let previousProject = () => {
  projects[id].style.display = 'none';
  if (id <= 0) {
    id = projects.length - 1;
  } else { id-- };
  projects[id].style.display = 'block';
  modal.scrollTo(0,0);
}

previousProjectBtn.addEventListener('click', previousProject);

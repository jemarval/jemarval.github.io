  let menubtn = document.getElementById('menubtn');
  let mySidebar = document.getElementById('mySidebar');
  let main = document.getElementById('main');
  let sidebarLinks = document.querySelectorAll('.side-links')

  let openNav = () => {
    mySidebar.style.left = '0';
    main.style.left = '20rem';
    menubtn.innerHTML = "&#10005;"
    
    menubtn.addEventListener('click', closeNav)
    menubtn.removeEventListener('click', openNav)
  }

  menubtn.addEventListener('click', openNav)


  let closeNav = () => {
    mySidebar.style.left = '-20rem';
    main.style.left = '0';
    menubtn.innerHTML = '&#9776;'
    menubtn.removeEventListener('click', closeNav)
    menubtn.addEventListener('click', openNav)
  }

  sidebarLinks.forEach(el => el.addEventListener('click', closeNav))
//   sidebarLinks.addEventListener('click', closeNav)
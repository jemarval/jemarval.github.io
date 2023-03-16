  let menubtn = document.getElementById('menubtn');
  let menubtnSidebar = document.getElementById('menubtn-sidebar');
  let mySidebar = document.getElementById('mySidebar');
  let main = document.getElementById('main');
  let sidebarLinks = document.querySelectorAll('.side-links')
  let desktopNav = document.getElementById('desktop-nav');
  let mobileNav = document.getElementById('mobile-nav');
  let media = window.matchMedia("(min-width: 48rem)")

  let openNav = () => {
    if(media.matches){
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
        if(media.matches){
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
    if(media.matches){
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
//   sidebarLinks.addEventListener('click', closeNav)
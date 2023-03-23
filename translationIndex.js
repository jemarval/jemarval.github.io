/* Translation to spanish */
/* Automatically shows version in spanish if clients browser language is set to spanish */

let pageLanguages = {
    en: true,
    es: true,
  };
  
  //1. Figure out the language, default to English.
  var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);
  
  // 2. Select text elements to translate.
  //(main)
  let homeLink = document.querySelectorAll('a.side-links')[0];
  let aboutMeLink = document.querySelectorAll('a.side-links')[1];
  let heroCopyP1 = document.querySelectorAll('#hero-copy p')[0];
  let heroCopyP2 = document.querySelectorAll('#hero-copy p')[1];
  let contactButton = document.querySelectorAll('.contact-button');
  let portfolioTitle = document.querySelectorAll('.portfolio-title');
  let portfolioCopy = document.querySelector('#portfolio>p');
  let projectCopy = document.querySelectorAll('.card-content p');
  let projectDetailsLink = document.querySelectorAll('.project-link button');
  let contactTitle = document.querySelector('#contact h2');
  let contactCopy = document.querySelector('#contact>p');
  let contactSectionButton = document.querySelector('#contact span');
  let contactEmail = document.querySelector('#contact h4 a');
  let cvDownload = document.querySelectorAll('#sidebar-icons a')[1];
  //(project modal)
  let projectDetailsCopy = document.querySelectorAll('.project-details-copy');
  let mobileScreenTitle = document.querySelectorAll('.mobile-screen-title');
  
  // 3. Store each text translation in an object.
  let translation = {
    es: {
      //(main)
      homeLink: "Inicio",
      aboutMeLink: "Sobre Mi",
      heroCopyP1: "Mi enfoque es desarrollar apps y sitios web atractivos, eficientes y perfectamente funcionales que encanten al usuario. Desde el concepto y el maquetado, hasta la publicación en línea.",
      heroCopyP2: `Hago wireframing y prototipos con Figma. Desarrollo en HTML, CSS, y JavaScript. Uso GitHub para control de versiones. Aquí está <a class="link" href="/assets/img/josemarval_frontend_es.pdf">mi CV</a> descargable en pdf.`,
      contactButton: "Contáctame",
      portfolioTitle: "Galería",
      portfolioCopy: "Estos son algunos de mis últimos trabajos:",
      projectCopy1: "Web app de renovación de planos de projecto para la industria de la construcción.",
      projectCopy2: "Sitio web para empresa de automatización de procesos (en curso).",
      projectCopy3: "Landing page con calendario de agendamiento para empresa de mejoras automotrices (en curso).",
      projectDetailsLink: "Ver más",
      contactTitle: "Una llamada rápida?",
      contactCopy: `Llámame o escribeme al whatsapp.<br> Feliz de ayudar.`,
      contactSectionButton: "contáctame",
      contactEmail: "O envíame un email",
      cvDownload: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="64" viewBox="0 0 32 64" fill="var(--clr-light-blue)"><path d="M29.7,0H2.4C1.1,0,.05,2.57.05,5.73V58.27C.05,61.43,1.1,64,2.4,64H29.7c1.3,0,2.35-2.57,2.35-5.73V5.73C32.05,2.57,31,0,29.7,0ZM11.89,10.56,14.45,13V6.4h3.2V13l2.56-2.48,2.24,2.24-6.4,6.4-6.4-6.4ZM20,53.37a6.13,6.13,0,0,1-8.6,0,6.16,6.16,0,0,1-.17-8.59l.3-.32,2.23,2.12-.29.31a3.06,3.06,0,1,0,4.44,0l-.3-.31,2.23-2.12.3.31A6.15,6.15,0,0,1,20,53.37ZM9.55,43.21V39.86l5.23-2.25L9.55,35.35V32l13,5.62ZM24.05,24h-16V20.8h16Z"/></svg>`,
      cvDownloadLinkES: "/assets/img/josemarval_frontend_es.pdf",
      //(project modal)
      projectDetailsCopy1: `<h2>Cloudplot</h2>
      <h3>Web Application</h3>
      <p>Cliente: Bitnapse Chile</p>
      <h4>El Proyecto</h4>
      <p>Muchos equipos técnicos en construcción aún siguen usando el correo electrónico para solicitar impresión y renovación de planos, documentos y especificaciones de proyecto. La falta de seguimiento en correos genera pérdidas de tiempo y dinero.</p>
      <p>Con CloudPlot, los ingenieros pueden cargar sus archivos, hacer solicitudes y rastrear el avance de sus requerimientos. La app procesa la distribución, asignación de tareas, rastreo de avance, costos y comunicaciones internas de forma automática.</p><h4>Conocimientos aplicados</h4>`,
      projectDetailsCopy2: `<h2>Bitnapse.cl</h2>
      <h3>Website</h3>
      <p>Cliente: Bitnapse Chile</p>
      <h4>El proyecto</h4>
      <p>Bitnapse diseña sistemas automatizados para el manejo de los procesos internos, comunicaciones y costos de pequeñas y medianas empresas, a través de software accesible a los empleados por cuentas personalizadas en móvil o web.
      </p>
      <p>Su sitio web muestra y describe sus servicios, y ofrece a sus prospectos clientes formas de contactarlos fácilmente.</p>
      <h4>Conocimientos aplicados</h4>`,
      projectDetailsCopy3: `<h2>JMProtec</h2>
      <h3>Website</h3>
      <p>Cliente: JM Protec</p>
      <h4>El proyecto</h4>
      <p>JM protec ofrece tratamientos especializados de protección y mejora estética a componentes de vidrio y espejos en automóviles.</p>
      <p>Su sitio web debe mostrar sus servicios y ofrecer a sus clientes un sistema de agendamiento, que considere las fechas y horas disponibles dentro de su horario de trabajo.</p>
      <h4>Conocimientos aplicados</h4>`,
      mobileScreenTitle : "Móvil",
    }
  }
  
  // 4. Figure out the language, default to English.
  var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);
  
  // 5. Check if client's language is spanish, and if so, apply translations.
  if (/^en\b/.test(lang)) {
    //(main)
    homeLink.textContent = translation['es'].homeLink;
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
    //(project modal)
    projectDetailsCopy[0].innerHTML = translation['es'].projectDetailsCopy1;
    projectDetailsCopy[1].innerHTML = translation['es'].projectDetailsCopy2;
    projectDetailsCopy[2].innerHTML = translation['es'].projectDetailsCopy3;
    mobileScreenTitle.forEach(title => title.textContent = translation['es'].mobileScreenTitle)
  }
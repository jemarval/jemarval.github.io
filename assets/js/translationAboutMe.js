/* Translation to spanish */
/* Automatically shows version in spanish if clients browser language is set to spanish */

let pageLanguages = {
    en: true,
    es: true,
};

//1. Figure out the language, default to English.
var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);

// 2. Select text elements to translate.
let homeLink = document.querySelectorAll('a.side-links')[0];
let aboutMeLink = document.querySelectorAll('a.side-links')[1];
let heroCopyP1 = document.querySelectorAll('#hero-copy p')[0];
let heroCopyP2 = document.querySelectorAll('#hero-copy p')[1];
let contactButton = document.querySelectorAll('.contact-button');
let portfolioTitle = document.querySelectorAll('.portfolio-title');
let contactTitle = document.querySelector('#contact h2');
let contactCopy = document.querySelector('#contact>p');
let contactSectionButton = document.querySelector('#contact span');
let contactEmail = document.querySelector('#contact h4 a');
let cvDownload = document.querySelectorAll('#sidebar-icons a')[1];
let introCopy = document.querySelector('#intro-copy');
let educationTitle = document.querySelector('#education>h2');
let certificateDate = document.querySelectorAll('.certification-copy p');
let civilEngineer = document.querySelectorAll('.certification-copy')[2];
let hobbiesTitle = document.querySelector('#hobbies>h2');
let hobbies = document.querySelectorAll('.hobbies h3');
let hobby2 = document.querySelector('#hobby-photo h3')

// 3. Store each text translation in an object.
let translation = {
    es: {
        homeLink: "Inicio",
        aboutMeLink: "Sobre Mi",
        contactButton: "Contáctame",
        portfolioTitle: "Galería",
        educationTitle: 'Educación',
        contactTitle: "Una llamada rápida?",
        contactCopy: `Cualquier consulta que tengas, llámame o escribeme al whatsapp.<br> Feliz de ayudar.`,
        contactSectionButton: "contáctame",
        contactEmail: "O envíame un email",
        cvDownload: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="64" viewBox="0 0 32 64" fill="var(--clr-light-blue)"><path d="M29.7,0H2.4C1.1,0,.05,2.57.05,5.73V58.27C.05,61.43,1.1,64,2.4,64H29.7c1.3,0,2.35-2.57,2.35-5.73V5.73C32.05,2.57,31,0,29.7,0ZM11.89,10.56,14.45,13V6.4h3.2V13l2.56-2.48,2.24,2.24-6.4,6.4-6.4-6.4ZM20,53.37a6.13,6.13,0,0,1-8.6,0,6.16,6.16,0,0,1-.17-8.59l.3-.32,2.23,2.12-.29.31a3.06,3.06,0,1,0,4.44,0l-.3-.31,2.23-2.12.3.31A6.15,6.15,0,0,1,20,53.37ZM9.55,43.21V39.86l5.23-2.25L9.55,35.35V32l13,5.62ZM24.05,24h-16V20.8h16Z"/></svg>`,
        cvDownloadLinkES: "/assets/img/josemarval_frontend_es.pdf",
        introCopyHtml: `<h2>Sobre mi</h2>
      <p>Soy desarrollador Front-end, cursando  actualmente ingeniería Full Stack. Me gusta trabajar en equipo para lograr diseños funcionales y visualmente atractivos.</p>
      <p>Desde niño siento interés por la programación, la web y la computación en general. En ese entonces me auto enseñaba a diseñar sitios web por diversión, usando Macromedia Dreamweaver 2.0. Cuando encuentro algo que no sé hacer, tengo la habilidad de encontrar cómo hacerlo.</p>
      <img src="/assets/img/dw.gif" alt="">
      <p>Soy también graduado Ingeniero Civil, analista estructural, y un ávido aprendiz de tecnologías de desarrollo web y móvil profesional.</p>
      <p class="focus">Me gustaría ayudarte en tu proyecto y ser parte de tu equipo. <br> <a href="https://wa.me/56984186986" target="_blank">Llámame o escribeme por WhatsApp</a> o <a href="mailto:jemarval@gmail.com">envíame un email</a> y lo coordinamos.</p>`,
        fullStackDate: 'Actual',
        civilEngineerCopy: `<h3>Ingeniero Civil</h3>
      <h4>Instituto Politécnico Santiago Marino</h4>
      <p>2007</p>`,
        hobbiesTitle: 'Cuando no estoy frente al computador...',
        hobby0: 'Salgo a correr,',
        hobby1: 'viajo,',
        hobby2: 'y lleno mis DDs de fotos.'
    }
}

// 4. Figure out the language, default to English.
var lang = (navigator.language || navigator.userLanguage || 'es').substr(0, 2);

// 5. Check if client's language is spanish, and if so, apply translations.
if (/^es\b/.test(lang)) {
    homeLink.textContent = translation['es'].homeLink;
    aboutMeLink.textContent = translation['es'].aboutMeLink;
    contactButton.forEach(button => { button.textContent = translation['es'].contactButton });
    portfolioTitle.forEach(link => { link.textContent = translation['es'].portfolioTitle });
    contactTitle.textContent = translation['es'].contactTitle;
    contactCopy.innerHTML = translation['es'].contactCopy;
    contactSectionButton.textContent = translation['es'].contactSectionButton;
    contactEmail.textContent = translation['es'].contactEmail;
    introCopy.innerHTML = translation['es'].introCopyHtml;
    educationTitle.textContent = translation['es'].educationTitle;
    certificateDate[0].textContent = translation['es'].fullStackDate;
    civilEngineer.innerHTML = translation['es'].civilEngineerCopy;
    hobbiesTitle.textContent = translation['es'].hobbiesTitle;
    hobbies[0].textContent = translation['es'].hobby0;
    hobbies[1].textContent = translation['es'].hobby1;
    hobby2.textContent = translation['es'].hobby2;
    cvDownload.innerHTML = translation['es'].cvDownload;
    cvDownload.href = translation['es'].cvDownloadLinkES;
}
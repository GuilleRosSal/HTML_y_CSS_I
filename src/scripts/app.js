import { CookingPot, createIcons, SignalHigh, SignalLow, SignalMedium, Timer } from 'lucide';

createIcons({
  icons: {
    CookingPot,
    SignalLow,
    SignalMedium,
    SignalHigh,
    Timer,
  },
});

//Lógica para indicar la página activa en el menú de navegación.
const updatedNavLinks = () => {
  const normalize = (path) => path.replace(/\/$/, '') || '/';

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = normalize(window.location.pathname);

  navLinks.forEach((link) => {
    const linkHref = normalize(link.getAttribute('href'));

    link.classList.remove('active');
    link.removeAttribute('aria-current');

    if (currentPath === linkHref) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
};

updatedNavLinks();

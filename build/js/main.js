// NAV TOGGLING FUNCTION

const toggleNav = () => {
  const mobileNavBtn = document.querySelector(`#mobile-nav-btn`);
  const mobileNav = document.querySelector(`#mobile-nav`);

  mobileNavBtn.onclick = () => {
    mobileNav.classList.toggle(`translate-x-full`);
  };

  mobileNav.onclick = () => {
    mobileNav.classList.toggle(`translate-x-full`);
  };
};

// CHANGE HEADER STYLES ON SCROLL

const headerScroll = () => {
  const header = document.querySelector(`#header`);
  const headerLogo = document.querySelector(`#header__logo`);
  const mobileNavBtn = document.querySelector(`#mobile-nav-btn`);
  const mainNav = document.querySelector(`#main-nav`);

  let scrollPosition = scrollY;

  if (scrollPosition >= 60) {
    header.classList.add(`screen-scrolled-header`);
    headerLogo.classList.add(`screen-scrolled-logo`);
    mobileNavBtn.classList.add(`screen-scrolled-btn`);

    header.classList.remove(`sm:h-[250px]`);
    header.classList.remove(`sm:flex-col`);
    header.classList.remove(`sm:justify-end`);
    headerLogo.classList.remove(`sm:text-7xl`);
    mainNav.classList.remove(`md:text-2xl`);
  } else {
    header.classList.remove(`screen-scrolled-header`);
    headerLogo.classList.remove(`screen-scrolled-logo`);
    mobileNavBtn.classList.remove(`screen-scrolled-btn`);

    header.classList.add(`sm:h-[250px]`);
    header.classList.add(`sm:flex-col`);
    header.classList.add(`sm:justify-end`);
    headerLogo.classList.add(`sm:text-7xl`);
    mainNav.classList.add(`md:text-2xl`);
  }

  window.onscroll = () => {
    let scrollPosition = scrollY;

    if (scrollPosition >= 60) {
      header.classList.add(`screen-scrolled-header`);
      headerLogo.classList.add(`screen-scrolled-logo`);
      mobileNavBtn.classList.add(`screen-scrolled-btn`);

      header.classList.remove(`sm:h-[250px]`);
      header.classList.remove(`sm:flex-col`);
      header.classList.remove(`sm:justify-end`);
      headerLogo.classList.remove(`sm:text-7xl`);
      mainNav.classList.remove(`md:text-2xl`);
    } else {
      header.classList.remove(`screen-scrolled-header`);
      headerLogo.classList.remove(`screen-scrolled-logo`);
      mobileNavBtn.classList.remove(`screen-scrolled-btn`);

      header.classList.add(`sm:h-[250px]`);
      header.classList.add(`sm:flex-col`);
      header.classList.add(`sm:justify-end`);
      headerLogo.classList.add(`sm:text-7xl`);
      mainNav.classList.add(`md:text-2xl`);
    }
  };
};

const initApp = () => {
  toggleNav();
  headerScroll();
};

initApp();

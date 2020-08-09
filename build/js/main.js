'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var logo = document.querySelector('.page-header__logo');
  var menu = document.querySelector('.header-menu');
  var toggle = document.querySelector('.page-header__toggle');

  var activateJS = function () {
    header.classList.remove('page-header--noJS');
    logo.classList.remove('page-header__logo--noJS');
    menu.classList.remove('header-menu--noJS');
    toggle.classList.remove('page-header__toggle--noJS');
    toggle.addEventListener('click', onOpenMenu);
  };

  var onOpenMenu = function () {
    menu.style.display = 'block';
    logo.style.display = 'none';
    toggle.style.position = 'absolute';
    toggle.style.right = '0';
    toggle.classList.add('page-header__toggle--close');
    toggle.addEventListener('click', onCloseMenu);
    toggle.removeEventListener('click', onOpenMenu);
  };

  var onCloseMenu = function () {
    menu.style.display = 'none';
    logo.style.display = 'block';
    toggle.style.position = 'static';
    toggle.classList.remove('page-header__toggle--close');
    toggle.addEventListener('click', onOpenMenu);
    toggle.removeEventListener('click', onCloseMenu);
  };

  var onResizeJS = function () {
    if (window.innerWidth < 1024) {
      activateJS();
    } else {
      header.classList.add('page-header--noJS');
      logo.classList.add('page-header__logo--noJS');
      menu.classList.add('header-menu--noJS');
      toggle.classList.add('page-header__toggle--noJS');
      toggle.removeEventListener('click', onOpenMenu);
    }
  };
  if (window.innerWidth < 1024) {
    activateJS();
  }
  window.addEventListener('resize', onResizeJS);
})();

(function () {
  var elements = document.querySelectorAll('#tel');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '00000000000',
    });
  }
})();

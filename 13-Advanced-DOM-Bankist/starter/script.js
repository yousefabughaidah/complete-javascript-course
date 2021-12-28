'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1'); // remember that this is an id, hence the hash.

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////

// page navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabbed componnet
// add an event handler for each tab using EVENT DELEGATION!
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // [GUARD CLAUSE] - if there's nothing clicked at all, end the function.

  tabs.forEach(t => t.classList.remove('operations__tab--active')); // remove the 'active class' on all tabs
  clicked.classList.add('operations__tab--active'); // add the 'active class' to the tab that was clicked

  // activating the content area
  tabsContent.forEach(t => t.classList.remove('operations__content--active')); // remove the 'active class' on the content tabs
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) // selects the content tab based on the data set
    .classList.add('operations__content--active'); // adds the content class
});

// menu fade out on highlight component
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    const els = [...siblings, logo];

    els.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

nav.addEventListener('mouseover', e => handleHover(e, 0.5));
nav.addEventListener('mouseout', e => handleHover(e, 1));


///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));

const header = document.querySelector('.header'); // to select one element
const allSections = document.querySelectorAll('.section'); // to select a GROUP of elements (in this case, all sections)
// console.log(allSections);

// document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // to get all the buttons
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div'); // first, define the element
message.classList.add('cookie-message'); // then add a style to it
message.innerHTML =
  'We use cookies for improved functionaility and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // define the html
header.before(message);

// header.prepend(message); // append it (put it at the bottom)
// header.append(message.cloneNode(true)); // clone it at put it at the top

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

btnScrollTo.addEventListener('click', function (e) {
  // find the coordinations of the section
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading! :D');

//   setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading! :D');
// });

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading! :D');
// };

// const h1 = document.querySelector('h1');

// // Going downwards (choosing childs)
// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.firstElementChild);

// // going upwards: (choosing parents)
// console.log(h1.parentNode);
// console.log(h1.parentElement); // this is the one we're usually interested in

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // going sideways: (choosing sibnlings)
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)'
// })

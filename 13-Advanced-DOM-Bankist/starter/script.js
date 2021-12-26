'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1'); // remember that this is an id, hence the hash.

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

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to a common parent element.
// 2. Determine what element originiated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

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

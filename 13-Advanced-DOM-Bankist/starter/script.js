'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

message.style.backgroundColor = '#37383d';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);
console.log(logo.dataset.whoIsAmazing);

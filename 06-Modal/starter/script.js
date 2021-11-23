'use strict';

// select the elements that you need, and store them into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // querySelectorAll is used to capture all buttons

// functions
const closeModal = function () {
    modal.classList.add('hidden'); // we use the .add to add a class to the element
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden'); // we use the .add to add a class to the element
    overlay.classList.remove('hidden');
};

// the code
// open the modal on clicking the button
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// close the modal when clicking the 'x' or the overlay
btnCloseModal.addEventListener('click', closeModal); // we are not calling the function, we only want JS to execute the function on the click
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

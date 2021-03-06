'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});

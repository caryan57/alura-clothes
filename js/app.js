import { hideWrappedElements } from './helpers/hideWrappedElements.js';
import { manageDropImage } from './helpers/dropImage.js';
import { scrollAnimation } from './helpers/animateAnchor.js';
import { validateForm } from './helpers/validateForm.js';

const galleries = document.querySelectorAll('.carrousel__gallery');

if (galleries) {
  hideWrappedElements(galleries);
}

const inputDropImage = document.querySelector('.drop-image__file');

if (inputDropImage) {
  manageDropImage(inputDropImage);
}

const heroBtnLink = document.querySelector('.hero__content__info-button');

if (heroBtnLink) {
  scrollAnimation(heroBtnLink);
}

// Contact Validation
const contactForm = document.querySelector('.footer__item-form');
const contactInputs = contactForm.querySelectorAll('[data-form]');

validateForm(contactInputs);

// Login Validation
const loginForm = document.querySelector('.login__form');

if (loginForm) {
  const loginInputs = loginForm.querySelectorAll('[data-form]');
  validateForm(loginInputs);
}

// Products Validation
const productsForm = document.querySelector('.createProducts__form');

if (productsForm) {
  const productsInputs = document.querySelectorAll('[data-input]');
  validateForm(productsInputs);
}

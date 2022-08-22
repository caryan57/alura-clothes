import { hideWrappedElements } from './helpers/hideWrappedElements.js';
import { manageDropImage } from './helpers/dropImage.js';
import { scrollAnimation } from './helpers/animateAnchor.js';

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

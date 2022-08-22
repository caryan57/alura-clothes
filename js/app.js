import { hideWrappedElements } from './helpers/hideWrappedElements.js';
import { manageDropImage } from './helpers/dropImage.js';

const galleries = document.querySelectorAll('.carrousel__gallery');
hideWrappedElements(galleries);

const inputDropImage = document.querySelector('.drop-image__file');
manageDropImage(inputDropImage);

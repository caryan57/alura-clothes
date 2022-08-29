import { productsServices } from '../service/products-service.js';

const form = document.querySelector('.createProducts__form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const imageFile = document.querySelector('[data-inputValue-image]').files[0];
  let imageUrl;
  imageFile == undefined
    ? (imageUrl = '../../assets/img/clothes/image_default.jpg')
    : (imageUrl = `../../assets/img/clothes/${imageFile.name}`);

  const title = document.querySelector('[data-inputValue-title]').value;
  const category = document.querySelector('[data-inputValue-category]').value;
  const price = parseInt(
    document.querySelector('[data-inputValue-price]').value
  );
  const stock = parseInt(
    document.querySelector('[data-inputValue-stock]').value
  );
  const description = document.querySelector(
    '[data-inputValue-description]'
  ).value;

  productsServices
    .registerProduct(imageUrl, title, category, price, stock, description)
    .then(response => console.log(response))
    .catch(error => console.log(error));
});

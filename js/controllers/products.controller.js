import { productsServices } from '../service/products-service.js';

const createUserProductItem = (id, imageUrl, title, price, category) => {
  const item = document.createElement('li');
  item.classList.add('carrousel__gallery__item');

  const content = `
  <div class="carrousel__image">
    <img src=${imageUrl} alt="" />
  </div>
  <div class="carrousel__content">
    <p class="carrousel__content__title">${title}</p>
    <p class="carrousel__content__price">$${price}</p>
    <p class="carrousel__content__category">${category}</p>
  </div>
  `;

  item.innerHTML = content;

  return item;
};

const createAdminProductItem = (id, imageUrl, title, price, category, url) => {
  const item = document.createElement('li');
  item.classList.add('carrousel__gallery__item');

  const content = `
  <div class="carrousel__image">
    <img src=${imageUrl} alt="" />
  </div>
  <div class="carrousel__content">
    <p class="carrousel__content__title">${title}</p>
    <p class="carrousel__content__price">$${price}</p>
    <p class="carrousel__content__category">${category}</p>
  </div>
  <div class="carrousel__gallery__actions">
    <button class="gallery__action-delete"><i class="fa-solid fa-trash"></i></button>
    <button class="gallery__action-edit" href=""><a href="./editProduct.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a></button>
  </div>
  `;

  item.innerHTML = content;

  // Delete Button Function
  const deleteBtn = item.querySelector('.gallery__action-delete');
  deleteBtn.addEventListener('click', e => {
    Swal.fire({
      title: '¿De verdad desea eliminar este artículo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00A300',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado', 'Su artículo fue borrado con éxito', 'success');

        setTimeout(function () {
          productsServices.deleteProduct(id);
        }, 1000);
      }
    });
  });

  return item;
};

const gallery = document.querySelector('.full-carrousel__gallery');
const currentLocation = document.location;

productsServices
  .getProducts()
  .then(data => {
    data.forEach(item => {
      if (currentLocation.href.includes('showUserProducts')) {
        const productElement = createUserProductItem(
          item.id,
          item.imageUrl,
          item.title,
          item.price,
          item.category
        );
        gallery.appendChild(productElement);
      } else {
        const productElement = createAdminProductItem(
          item.id,
          item.imageUrl,
          item.title,
          item.price,
          item.category,
          currentLocation
        );
        gallery.appendChild(productElement);
      }
    });
  })
  .catch(error => console.log(error));

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
const searchForm = document.querySelector('.header__search-form');

// Find items function
const findItemsBySearch = () => {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    // Delete previous items
    const prevGalleryItems = gallery.querySelectorAll(
      '.carrousel__gallery__item'
    );

    prevGalleryItems.forEach(item => {
      item.remove();
    });

    const searchValue = document.querySelector(
      '.header__search-form__input'
    ).value;

    productsServices.findProducts(searchValue).then(data => {
      if (Object.keys(data).length === 0) {
        createNoProductsMsg();
      } else {
        // Remove not found message if existed before
        const notFoundMessage = document.querySelector(
          '.gallery__no-products-message'
        );

        if (notFoundMessage) {
          notFoundMessage.remove();
        }

        // Create elements found!
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
          }
        });
      }
    });
  });

  const createNoProductsMsg = () => {
    const element = document.createElement('li');
    element.classList.add('gallery__no-products-message');
    element.innerHTML = `
    <h2>No hubo resultados, vuelva a intentarlo</h2>
    <a href="./showUserProducts.html">Ver todo</a>
    `;
    gallery.appendChild(element);
  };
};

findItemsBySearch();

// Create elements depending of json elements
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

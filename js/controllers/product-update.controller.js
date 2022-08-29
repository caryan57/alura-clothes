import { productsServices } from '../service/products-service.js';
import { updateThumbnail } from '../helpers/updateThumbnail.js';

const form = document.querySelector('.createProducts__form');
const url = new URL(window.location);
const id = url.searchParams.get('id');

const getDataProduct = id => {
  if (id === null) {
    Swal.fire({
      type: 'error',
      icon: 'error',
      title: '¡No existe ese producto!',
      text: 'Verifica tu información',
      confirmButtonText: 'Volver',
      backdrop: `
        rgba(176, 43, 52, 0.7)
    `,
    }).then(result => {
      if (result.isConfirmed) {
        window.location = './showProducts.html';
      }
    });

    title.value = '';
    category.value = '';
    price.value = '';
    stock.value = '';
    description.value = '';
  }

  const data = productsServices.getProduct(id);
  return data;
};

const showProductData = async () => {
  const imageFile = document.querySelector('[data-inputValue-image]');
  const title = document.querySelector('[data-inputValue-title]');
  const category = document.querySelector('[data-inputValue-category]');
  const price = document.querySelector('[data-inputValue-price]');
  const stock = document.querySelector('[data-inputValue-stock]');
  const description = document.querySelector('[data-inputValue-description]');

  try {
    const product = await getDataProduct(id);

    if (Object.keys(product).length === 0) {
      throw new Error();
    } else {
      title.value = product.title;
      category.value = product.category;
      price.value = product.price;
      stock.value = product.stock;
      description.value = product.description;

      updateThumbnailWithData(product.imageUrl, imageFile);
    }
  } catch (error) {
    Swal.fire({
      type: 'error',
      icon: 'error',
      title: '¡No existe ese producto!',
      text: 'Verifique que la información es correcta',
      confirmButtonText: 'Volver',
      backdrop: `
        rgba(176, 43, 52, 0.7)
    `,
    }).then(result => {
      if (result.isConfirmed) {
        window.location = './showProducts.html';
      }
    });
  }
};

const updateThumbnailWithData = async (imgUrl, imgInput) => {
  let imgUrlArray = imgUrl.split('/');
  const imgFilename = imgUrlArray[5];
  const imageContainer = imgInput.closest('.createProducts__drop-image');

  const toDataURL = url =>
    fetch(url)
      .then(response => response.blob())
      .then(
        blob =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  const dataUrlFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  toDataURL(imgUrl).then(data => {
    const fileData = dataUrlFile(data, imgFilename);
    const fileList = new DataTransfer();
    fileList.items.add(fileData);

    const newFileList = fileList.files;
    imgInput.files = newFileList;

    const file = imgInput.files[0];
    updateThumbnail(imageContainer, file);
  });
};

const getInputDataAndUpdate = () => {
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

  productsServices.updateProduct(
    id,
    imageUrl,
    title,
    category,
    price,
    stock,
    description
  );
};

showProductData();

form.addEventListener('submit', e => {
  e.preventDefault();

  getInputDataAndUpdate();
});

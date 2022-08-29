const url = 'http://localhost:3000/products';

const getProducts = () =>
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  }).then(response => response.json());

const getProduct = id =>
  fetch(`${url}/${id}`).then(response => response.json());

const registerProduct = (
  imageUrl,
  title,
  category,
  price,
  stock,
  description
) =>
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      id: uuid.v4(),
      title,
      category,
      price,
      stock,
      imageUrl,
      description,
    }),
  });

const updateProduct = (
  id,
  imageUrl,
  title,
  category,
  price,
  stock,
  description
) => {
  return fetch(`${url}/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify({
      id,
      title,
      category,
      price,
      stock,
      imageUrl,
      description,
    }),
  });
};

const findProducts = value => {
  return fetch(`${url}?q=${value}`).then(response => response.json());
};

const deleteProduct = id => {
  return fetch(`${url}/${id}`, { method: 'DELETE' });
};

export const productsServices = {
  getProducts,
  getProduct,
  registerProduct,
  updateProduct,
  findProducts,
  deleteProduct,
};

const loginForm = document.querySelector('.login__form');

function loginSubmit() {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    window.location.href = '../../../pages/products/showProducts.html';
  });
}

loginSubmit();

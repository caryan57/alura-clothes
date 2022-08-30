/*import { userServices } from '../../service/users-service.js';*/

const loginForm = document.querySelector('.login__form');

const loginSubmit = async () => {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    sessionStorage.setItem('authState', 1);
    window.location.href = '../../../pages/products/showProducts.html';

    /*
    userServices
      .loginUser(emailInput.value, passwordInput.value)
      .then(response => response.json())
      .then(data => {
        if (data.accessToken === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El email o la contraseña no son válidos',
          });
        } else {
          const token = data.accessToken;
          sessionStorage.setItem('accessToken', token);
          sessionStorage.setItem('authState', true);
          window.location.href = '../../../pages/products/showProducts.html';
        }
      });*/
  });
};

loginSubmit();

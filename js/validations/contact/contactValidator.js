const contactForm = document.querySelector('.footer__item-form');
const contactInputs = contactForm.querySelectorAll('[data-form]');

function formSubmit() {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    contactInputs.forEach(input => {
      input.value = '';
    });

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Su mensaje fue enviado correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  });
}

formSubmit();

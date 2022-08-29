export function validateForm(inputs) {
  const errorsMgs = {
    name: {
      valueMissing: 'Este campo no puede estar vacío',
    },
    message: {
      valueMissing: 'Este campo no puede estar vacío',
    },
    email: {
      valueMissing: 'Este campo no puede estar vacío',
      typeMismatch: 'Ingresa un correo con un formato válido',
      patternMismatch: 'Ingresa un correo con un formato válido',
    },
    password: {
      valueMissing: 'Este campo no puede estar vacío',
      patternMismatch:
        'Verifica que la contraseña es de al menos 8 a 12 caracteres y contiene una letra minúscula, una mayúscula, un carácter especial y un número.',
    },
    category: {
      valueMissing: 'Este campo no puede estar vacío',
    },
    title: {
      valueMissing: 'Este campo no puede estar vacío',
    },
    price: {
      valueMissing: 'Este campo no puede estar vacío',
      patternMismatch: 'Este campo solo acepta números',
    },
    stock: {
      valueMissing: 'Este campo no puede estar vacío',
      patternMismatch: 'Este campo solo acepta números',
    },
    description: {
      valueMissing: 'Este campo no puede estar vacío',
    },
  };

  const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
  ];

  inputs.forEach(input => {
    input.addEventListener('blur', e => {
      let error = '';
      const inputContainer = input.parentElement;
      const errorSpan = inputContainer.querySelector('.error--message');

      if (!input.validity.valid) {
        // Add class of error to the input
        input.classList.add('input--error');
        // Create error span if does not exists
        if (errorSpan == null) {
          errorTypes.forEach(errorType => {
            // Check if errorType exists in the input and select error message
            if (input.validity[errorType]) {
              if (input.dataset.form) {
                const errorContent = errorsMgs[input.dataset.form][errorType];
                error = createErrorMessage(errorContent);
              }

              if (input.dataset.input) {
                const errorContent = errorsMgs[input.dataset.input][errorType];
                error = createErrorMessage(errorContent);
              }
            }
          });

          // Append child error
          inputContainer.appendChild(error);
        } else {
          // If error has been created, return
          errorTypes.forEach(errorType => {
            if (input.validity[errorType]) {
              let errMsg;

              if (input.dataset.form) {
                errMsg = errorsMgs[input.dataset.form][errorType];
              }

              if (input.dataset.input) {
                errMsg = errorsMgs[input.dataset.input][errorType];
              }

              errorSpan.innerText = errMsg;
            }
          });
          return;
        }
      } else {
        // If there is no error and the input is valid, remove the error span and error styles
        input.classList.remove('input--error');

        if (errorSpan) {
          errorSpan.remove();
        } else {
          return;
        }
      }
    });
  });
}

function createErrorMessage(message) {
  const span = document.createElement('span');
  span.innerText = message;
  span.classList.add('error--message');

  return span;
}

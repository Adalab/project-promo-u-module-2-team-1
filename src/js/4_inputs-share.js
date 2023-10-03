/* eslint-disable no-lonely-if */
/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';

const btnShare = document.querySelector('.js_btn_card');
const msgShareError = document.querySelector('.js_share_error');
const shareSection = document.querySelector('.js-share__result');

const urlTwitter = document.querySelector('.js__twitter');
const urlCard = document.querySelector('.js__cardUrl');

function handleBtnShare(event) {
  event.preventDefault();
  const patron = /^[0-9]+$/;

  // Validar si todos los campos están rellenados:
  if (
    inputName.value === '' ||
    inputJob.value === '' ||
    inputPhone.value === '' ||
    inputEmail.value === '' ||
    inputLinkedin.value === '' ||
    inputGithub.value === ''
  ) {
    //Si faltan campos por rellenar
    msgShareError.innerHTML = 'Faltan campos por rellenar';
  } else {
    //Si todos los campos están rellenados, comprobar si hay foto:
    if (inputPhoto.value === '') {
      msgShareError.innerHTML = 'Añade una imagen para continuar';
    } else {
      // Si hay foto, validar la dirección de correo electrónico:
      if (inputEmail.value.includes('@') && inputEmail.value.includes('.')) {
        // Correo electrónico es ok
        // Validar el número de teléfono usando la expresión regular:
        if (patron.test(inputPhone.value)) {
          // El número de teléfono es válido
          msgShareError.innerHTML = '';
          // Todo ok, realizamos fetch
          fetch('https://dev.adalab.es/api/card/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((responseJSON) => {
              if (responseJSON.success === false) {
                msgShareError.innerHTML = responseJSON.error;
              } else {
                shareSection.classList.remove('collapsed');
                urlCard.href = responseJSON.cardURL;
                urlCard.innerHTML = responseJSON.cardURL;
                urlTwitter.href = `https://twitter.com/intent/tweet?url=${responseJSON.cardURL}&text=Dicen+que+las+tarjetas+de+presentaci%c3%b3n+han+muerto%2c+pero...+%c2%a1qu%c3%a9+va!+Aqu%c3%ad+os+dejo+la+m%c3%ada+%3b)+Si+quieres+una+tarjeta+igual+de+guay+haz+click+aqu%c3%ad+https%3a%2f%2ftinyurl.com%2fadapickleteam%0d%0a%0d%0a`;
              }
              localStorage.setItem('definitiveCard', JSON.stringify(data));
            });
        } else {
          // El número de teléfono no es válido
          msgShareError.innerHTML = 'Por favor, ingresa una teléfono válido.';
          shareSection.classList.add('collapsed');
        }
      } else {
        // La dirección de correo electrónico no es válida
        msgShareError.innerHTML =
          'Por favor, ingresa una dirección de correo electrónico válida.';
        shareSection.classList.add('collapsed');
      }
    }
  }
}

const dataLS = JSON.parse(localStorage.getItem('definitiveCard'));
function getValues() {
  if (dataLS !== null) {
    data.palette = dataLS.palette;
    data.name = dataLS.name;
    data.job = dataLS.job;
    data.phone = dataLS.phone;
    data.email = dataLS.email;
    data.linkedin = dataLS.linkedin;
    data.github = dataLS.github;
    data.photo = dataLS.photo;
  }
}

btnShare.addEventListener('click', handleBtnShare);

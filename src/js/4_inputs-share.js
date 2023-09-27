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

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON.success === false) {
        msgShareError.innerHTML = 'Faltan campos por rellenar';
      } else {
        shareSection.classList.remove('collapsed');
        urlCard.href = responseJSON.cardURL;
        urlCard.innerHTML = responseJSON.cardURL;
        urlTwitter.href = `https://twitter.com/intent/tweet?url=${responseJSON.cardURL}&text=Dicen+que+las+tarjetas+de+presentaci%c3%b3n+han+muerto%2c+pero...+%c2%a1qu%c3%a9+va!+Aqu%c3%ad+os+dejo+la+m%c3%ada+%3b)+Si+quieres+una+tarjeta+igual+de+guay+haz+click+aqu%c3%ad+https%3a%2f%2ftinyurl.com%2fadapickleteam%0d%0a%0d%0a`;
      }
      localStorage.setItem('definitiveCard', JSON.stringify(responseJSON));
    });

  if (
    inputName.value === '' ||
    inputJob.value === '' ||
    inputPhone.value === '' ||
    inputEmail.value === '' ||
    inputLinkedin.value === '' ||
    inputGithub.value === '' ||
    inputPhoto.value === ''
  ) {
    msgShareError.innerHTML = 'Faltan campos por rellenar';
  } else if (inputEmail.value.includes(`. @`)) {
    msgShareError.innerHTML = '';
    shareSection.classList.remove('collapsed');
  } else if (patron.test(inputPhone.value)) {
    msgShareError.innerHTML = '';
    shareSection.classList.remove('collapsed');
  } else {
    msgShareError.innerHTML = 'Faltan campos por rellenar';
  }
}
const dataLS = JSON.parse(localStorage.getItem('definitiveCard'));
btnShare.addEventListener('click', handleBtnShare);

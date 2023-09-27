/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';

const btnShare = document.querySelector('.js_btn_card');
const msgShareError = document.querySelector('.js_share_error');
const shareSection = document.querySelector('.js-share__result');

const urlTwitter = document.querySelector('.js__twitter');
const urlCard = document.querySelector('.js__cardUrl');
const msgBox = document.querySelector('.js__msgBox');

function handleBtnShare(event) {
  event.preventDefault();
  const patron = /^[0-9]+$/;
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

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON.success === false) {
        msgBox.innerHTML = 'Faltan campos por rellenar';
      } else {
        shareSection.classList.remove('collapsed');
        urlCard.href = responseJSON.cardURL;
        urlCard.innerHTML = responseJSON.cardURL;
        urlTwitter.href = `https://twitter.com/intent/tweet?url=${responseJSON.cardURL}&text=Ya%20estoy%20suscrita%20al%20Adalab%20Tech%20Summit%21%21%21&hashtags=Adalab`;
      }
    });
  localStorage.setItem('definitiveCard', JSON.stringify(responseJSON));
}

btnShare.addEventListener('click', handleBtnShare);
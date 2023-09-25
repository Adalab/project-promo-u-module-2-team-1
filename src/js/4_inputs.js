/* eslint-disable no-undef */
'use strict';

const btnShare = document.querySelector('.js_btn_card');
const msgShareError = document.querySelector('.js_share_error');
const shareSection = document.querySelector('.js-share__result');
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
  
}

btnShare.addEventListener('click', handleBtnShare);

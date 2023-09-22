/* eslint-disable no-undef */
'use strict';

const btnShare = document.querySelector('.js_btn_card');
const msgShareError = document.querySelector('.js_share_error');
function chihuahua() {
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
    msgShareError.innerHTML = 'la has cagado';
  } else if (inputEmail.value.includes(`. @`)) {
    msgShareError.innerHTML = '';
  } else if (patron.test(inputPhone.value)) {
    msgShareError.innerHTML = '';
  } else {
    msgShareError.innerHTML = 'la has cagado';
  }
}

btnShare.addEventListener('click', chihuahua);

'use strict';

// código del preview
//CONSTANTES DE LOS INPUTS
const inputPalette = document.querySelector('.js-input-palette');
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputPhone = document.querySelector('.js-input-phone');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
// const inputPhoto = document.querySelector ('.js-input-photo');

//CONSTANTES DE LA TARJETA DE PREVIEW
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
// const previewPhoto = document.querySelector ('.js-preview-photo');

const data = {
  palette: 1,
  name: 'María García',
  job: 'Front-end developer',
  phone: '+34 666666666',
  email: 'mariagar@example.com',
  linkedin: 'mariagar',
  github: 'mariagar',
  photo: 'data:image/png;base64,2342ba...',
};

function updatePreview() {
  previewName.innerHTML = data.name;

  //añadir if para que se muestre Nombre Apellido al borrar la usuaria
  previewEmail.href = `mailto:${data.email}`;
  previewJob.innerHTML = data.job;
  previewPhone.href = `tel:+34${data.phone}`;
  previewLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  previewGithub.href = `https://github.com/${data.github}`;
}

function handleInputName() {
  data.name = inputName.value;
  updatePreview();
}
function handleInputJob() {
  data.job = inputJob.value;
  updatePreview();
}
function handleInputPhone() {
  data.phone = inputPhone.value;
  updatePreview();
}
function handleInputEmail() {
  data.email = inputEmail.value;
  updatePreview();
}
function handleInputLinkedin() {
  data.linkedin = inputLinkedin.value;
  updatePreview();
}
function handleInputGithub() {
  data.github = inputGithub.value;
  updatePreview();
}

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);

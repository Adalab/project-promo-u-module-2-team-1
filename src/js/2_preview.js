'use strict';

// código del preview
//CONSTANTES DE LOS INPUTS
const inputPalette = document.querySelector('.js-input-palette');
let inputName = document.querySelector('.js-input-name');
let inputJob = document.querySelector('.js-input-job');
let inputPhone = document.querySelector('.js-input-phone');
let inputEmail = document.querySelector('.js-input-email');
let inputLinkedin = document.querySelector('.js-input-linkedin');
let inputGithub = document.querySelector('.js-input-github');
// const inputPhoto = document.querySelector ('.js-input-photo');

//CONSTANTES DE LA TARJETA DE PREVIEW
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
// const previewPhoto = document.querySelector ('.js-preview-photo');

//Botón reset
const rstBtn = document.querySelector('.js-reset-buton');

//Valores por defecto
const previewNameDefault = 'Nombre Apellido';
const previewJobDefault = 'Front-end developer';

const data = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

// FUNCIONES
//CONDICIONALES PARA DEVOLVER EL VALOR POR DEFECTO EN NOMBRE Y PUESTO

function checkEmptyName() {
  if (inputName.value === '') {
    data.name = previewNameDefault;
  } else {
    data.name = inputName.value;
  }
}
function checkEmptyJob() {
  if (inputJob.value === '') {
    data.job = previewJobDefault;
  } else {
    data.job = inputJob.value;
  }
}
// ACTUALIZAR DATOS DE TARJETA DE PREVIEW
function updatePreview() {
  checkEmptyName();
  checkEmptyJob();
  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
  previewEmail.href = `mailto:${data.email}`;
  previewPhone.href = `tel:+34${data.phone}`;
  previewLinkedin.href = `https://www.linkedin.com/in/${data.linkedin}`;
  previewGithub.href = `https://github.com/${data.github}`;
}
// BORRAR @ DE GITHUB
function deleteGithubAtSign() {
  const withAts = data.github;
  const withoutAts = withAts.replace(/@/, '');
  data.github = withoutAts;
}
// RESETEAR DATOS
function resetData() {
  inputName.value = '';
  inputJob.value = '';
  inputPhone.value = '';
  inputEmail.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  data.name = inputName.value;
  data.job = inputJob.value;
  data.phone = inputPhone.value;
  data.email = inputEmail.value;
  data.linkedin = inputLinkedin.value;
  data.github = inputGithub.value;
}

//QUE EMPIECE LA FIESTA

updatePreview();

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
  deleteGithubAtSign();
  updatePreview();
}
function handleReset() {
  resetData();
  updatePreview();
}

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);
rstBtn.addEventListener('click', handleReset);

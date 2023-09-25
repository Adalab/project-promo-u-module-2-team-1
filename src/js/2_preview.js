/* eslint-disable no-undef */
'use strict';

// código del preview
//CONSTANTES DE LOS INPUTS PALETA COLORES
const inputPaletteOne = document.querySelector('.js-input-palette-one');
const inputPaletteTwo = document.querySelector('.js-input-palette-two');
const inputPaletteThree = document.querySelector('.js-input-palette-three');
//CONSTANTES DE LOS INPUTS
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputPhone = document.querySelector('.js-input-phone');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const inputPhoto = document.querySelector('.js-input-photo');

//CONSTANTES DE LA TARJETA DE PREVIEW
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
// const previewPhoto = document.querySelector ('.js-preview-photo');
const previewLateralDec = document.querySelector('.js-lateral-decoration');

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

//LET'S GET THE PARTY STARTED!
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

//FUNCIÓN MANEJADORA PALETA COLORES 1
function handleInputPaletteOne() {
  previewName.style.color = '#114e4e';
  previewLateralDec.style.borderColor = '#438792';

  previewPhone.style.color = '#114e4e';
  previewPhone.style.borderColor = '#a2deaf';

  previewEmail.style.color = '#114e4e';
  previewEmail.style.borderColor = '#a2deaf';

  previewLinkedin.style.color = '#114e4e';
  previewLinkedin.style.borderColor = '#a2deaf';

  previewGithub.style.color = '#114e4e';
  previewGithub.style.borderColor = '#a2deaf';
}

//FUNCIÓN MANEJADROA PALETA COLORES 2
function handleInputPaletteTwo() {
  previewName.style.color = '#420101';
  previewLateralDec.style.borderColor = '#bd1010';

  previewPhone.style.color = '#420101';
  previewPhone.style.borderColor = '#bd1010';

  previewEmail.style.color = '#420101';
  previewEmail.style.borderColor = '#bd1010';

  previewLinkedin.style.color = '#420101';
  previewLinkedin.style.borderColor = '#bd1010';

  previewGithub.style.color = '#420101';
  previewGithub.style.borderColor = '#bd1010';
}

//FUNCIÓN MANEJADORA PALETA COLORES 3
function handleInputPaletteThree() {
  previewName.style.color = '#3e5b65';
  previewLateralDec.style.borderColor = '#eab052';

  previewPhone.style.color = '#3e5b65';
  previewPhone.style.borderColor = '#a0c0cf';

  previewEmail.style.color = '#3e5b65';
  previewEmail.style.borderColor = '#a0c0cf';

  previewLinkedin.style.color = '#3e5b65';
  previewLinkedin.style.borderColor = '#a0c0cf';

  previewGithub.style.color = '#3e5b65';
  previewGithub.style.borderColor = '#a0c0cf';
}

// RESETEAR DATOS
function resetData() {
  inputPaletteOne.checked = true;
  handleInputPaletteOne();
  inputName.value = '';
  inputJob.value = '';
  inputPhone.value = '';
  inputEmail.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  inputPhoto.value = '';
  data.name = inputName.value;
  data.job = inputJob.value;
  data.phone = inputPhone.value;
  data.email = inputEmail.value;
  data.linkedin = inputLinkedin.value;
  data.github = inputGithub.value;
  data.photo = '';
  profileImage.style.backgroundImage = `url('./assets/images/snoopy.jpg')`;
  profilePreview.style.backgroundImage = ``;
  msgShareError.innerHTML = '';
  shareSection.classList.add('collapsed');
}

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);
rstBtn.addEventListener('click', handleReset);

//EVENTOS LISTENER PALETAS DE COLORES
inputPaletteOne.addEventListener('input', handleInputPaletteOne);
inputPaletteTwo.addEventListener('input', handleInputPaletteTwo);
inputPaletteThree.addEventListener('input', handleInputPaletteThree);

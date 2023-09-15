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
// const inputPhoto = document.querySelector ('.js-input-photo');

//CONSTANTES DE LA TARJETA DE PREVIEW
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
// const previewPhoto = document.querySelector ('.js-preview-photo');
const previewLateralDec = document.querySelector('.js-lateral-decoration');

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

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);

//EVENTOS LISTENER PALETAS DE COLORES
inputPaletteOne.addEventListener('input', handleInputPaletteOne);
inputPaletteTwo.addEventListener('input', handleInputPaletteTwo);
inputPaletteThree.addEventListener('input', handleInputPaletteThree);

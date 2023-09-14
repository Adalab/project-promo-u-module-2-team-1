'use strict';

//Query selectors
const design = document.querySelector('.js-design');
const fill = document.querySelector('.js-fill');
const share = document.querySelector('.js-share');
const fillFormContent = document.querySelector('.js-fillFormContent');
const designFormContent = document.querySelector('.js-designFormContent');
const shareFormContent = document.querySelector('.js-shareFormContent')

//Datos generales-variables globales

//Funciones

//funciones Open/close Design form
function openDesign() {
  designFormContent.classList.remove('collapsed');
}
function closeDesign() {
  designFormContent.classList.add('collapsed');
}
//funciones Open/close Fill form
function openFill() {
  fillFormContent.classList.remove('collapsed');
}
function closeFill() {
  fillFormContent.classList.add('collapsed');
}
//funciones Open/close Share form
function openShare() {
  shareFormContent.classList.remove('collapsed');
}
function closeShare() {
  shareFormContent.classList.add('collapsed');
}

//funciones del listener para cada formulario

//Función handle listener elemento Form Design
function handleClickDesign() {
  openDesign();
  closeFill();
  closeShare();
}
//Función handle listener elemento Form Fill
function handleClickFill() {
  closeDesign();
  openFill();
  closeShare();
}
//Función handle listener elemento Form Share
function handleClickShare() {
  closeDesign();
  closeFill();
  openShare();
}

//Eventos
design.addEventListener('click', handleClickDesign);
fill.addEventListener('click', handleClickFill);
share.addEventListener('click', handleClickShare);

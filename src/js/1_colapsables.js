'use strict';

// código de los colapsables

//Query selectors
const design = document.querySelector('.js-design');
const fill = document.querySelector('.js-fill');
const share = document.querySelector('.js-share');
const designFormContent = document.querySelector('.js-designFormContent');
const fillFormContent = document.querySelector('.js-fillFormContent');
const shareFormContent = document.querySelector('.js-shareFormContent');
const designArrow = document.querySelector('.js-design-arrow');
const fillArrow = document.querySelector('.js-fill-arrow');
const shareArrow = document.querySelector('.js-share-arrow');

//Datos generales-variables globales

//Funciones

//funciones Open/close Design form
function openDesign() {
  designFormContent.classList.remove('collapsed');
  designArrow.classList.remove('rotate__arrow');
}
function closeDesign() {
  designFormContent.classList.add('collapsed');
  designArrow.classList.add('rotate__arrow');
}
//funciones Open/close Fill form
function openFill() {
  fillFormContent.classList.remove('collapsed');
  fillArrow.classList.remove('rotate__arrow');
}
function closeFill() {
  fillFormContent.classList.add('collapsed');
  fillArrow.classList.add('rotate__arrow');
}
//funciones Open/close Share form
function openShare() {
  shareFormContent.classList.remove('collapsed');
  shareArrow.classList.remove('rotate__arrow');
}
function closeShare() {
  shareFormContent.classList.add('collapsed');
  shareArrow.classList.add('rotate__arrow');
}

//funciones del listener para cada formulario

//Función handle listener elemento Form Design
function handleClickDesign() {
  openDesign();
  closeFill();
  closeShare();
  msgShareError.innerHTML = '';
}
//Función handle listener elemento Form Fill
function handleClickFill() {
  closeDesign();
  openFill();
  closeShare();
  msgShareError.innerHTML = '';
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

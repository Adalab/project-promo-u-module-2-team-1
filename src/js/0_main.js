'use strict';

//Query selectors
const design = document.querySelector('.js-design');
const fill = document.querySelector('.js-fill');
const share = document.querySelector('.js-share');
const designHeader = document.querySelector('.js-design-header');
//Datos generales-variables globales

//Funciones

//funciones Open/close Design form
function openDesign() {
  design.classList.remove('collapsed');
}
function closeDesign() {
  design.classList.add('collapsed');
}
//funciones Open/close Fill form
function openFill() {
  fill.classList.remove('collapsed');
}
function closeFill() {
  fill.classList.add('collapsed');
}
//funciones Open/close Share form
function openShare() {
  share.classList.remove('collapsed');
}
function closeShare() {
  share.classList.add('collapsed');
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

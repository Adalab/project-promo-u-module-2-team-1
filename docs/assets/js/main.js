"use strict";const design=document.querySelector(".js-design"),fill=document.querySelector(".js-fill"),share=document.querySelector(".js-share"),designFormContent=document.querySelector(".js-designFormContent"),fillFormContent=document.querySelector(".js-fillFormContent"),shareFormContent=document.querySelector(".js-shareFormContent"),designArrow=document.querySelector(".js-design-arrow"),fillArrow=document.querySelector(".js-fill-arrow"),shareArrow=document.querySelector(".js-share-arrow");function openDesign(){designFormContent.classList.remove("collapsed"),designArrow.classList.remove("rotate__arrow")}function closeDesign(){designFormContent.classList.add("collapsed"),designArrow.classList.add("rotate__arrow")}function openFill(){fillFormContent.classList.remove("collapsed"),fillArrow.classList.remove("rotate__arrow")}function closeFill(){fillFormContent.classList.add("collapsed"),fillArrow.classList.add("rotate__arrow")}function openShare(){shareFormContent.classList.remove("collapsed"),shareArrow.classList.remove("rotate__arrow")}function closeShare(){shareFormContent.classList.add("collapsed"),shareArrow.classList.add("rotate__arrow")}function handleClickDesign(){openDesign(),closeFill(),closeShare(),msgShareError.innerHTML=""}function handleClickFill(){closeDesign(),openFill(),closeShare(),msgShareError.innerHTML=""}function handleClickShare(){closeDesign(),closeFill(),openShare()}design.addEventListener("click",handleClickDesign),fill.addEventListener("click",handleClickFill),share.addEventListener("click",handleClickShare);const inputPaletteOne=document.querySelector(".js-input-palette-one"),inputPaletteTwo=document.querySelector(".js-input-palette-two"),inputPaletteThree=document.querySelector(".js-input-palette-three"),inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputPhone=document.querySelector(".js-input-phone"),inputEmail=document.querySelector(".js-input-email"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),inputPhoto=document.querySelector(".js-input-photo"),previewName=document.querySelector(".js-preview-name"),previewJob=document.querySelector(".js-preview-job"),previewPhone=document.querySelector(".js-preview-phone"),previewEmail=document.querySelector(".js-preview-email"),previewLinkedin=document.querySelector(".js-preview-linkedin"),previewGithub=document.querySelector(".js-preview-github"),previewLateralDec=document.querySelector(".js-lateral-decoration"),rstBtn=document.querySelector(".js-reset-buton"),previewNameDefault="Nombre Apellido",previewJobDefault="Front-end developer",data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function checkEmptyName(){""===inputName.value?data.name="Nombre Apellido":data.name=inputName.value}function checkEmptyJob(){""===inputJob.value?data.job=previewJobDefault:data.job=inputJob.value}function updatePreview(){checkEmptyName(),checkEmptyJob(),previewName.innerHTML=data.name,previewJob.innerHTML=data.job,previewEmail.href="mailto:"+data.email,previewPhone.href="tel:+34"+data.phone,previewLinkedin.href="https://www.linkedin.com/in/"+data.linkedin,previewGithub.href="https://github.com/"+data.github}function deleteGithubAtSign(){const e=data.github.replace(/@/,"");data.github=e}function handleInputName(){data.name=inputName.value,updatePreview()}function handleInputJob(){data.job=inputJob.value,updatePreview()}function handleInputPhone(){data.phone=inputPhone.value,updatePreview()}function handleInputEmail(){data.email=inputEmail.value,updatePreview()}function handleInputLinkedin(){data.linkedin=inputLinkedin.value,updatePreview()}function handleInputGithub(){data.github=inputGithub.value,deleteGithubAtSign(),updatePreview()}function handleReset(){resetData(),updatePreview()}function handleInputPaletteOne(){previewName.style.color="#114e4e",previewLateralDec.style.borderColor="#438792",previewPhone.style.color="#114e4e",previewPhone.style.borderColor="#a2deaf",previewEmail.style.color="#114e4e",previewEmail.style.borderColor="#a2deaf",previewLinkedin.style.color="#114e4e",previewLinkedin.style.borderColor="#a2deaf",previewGithub.style.color="#114e4e",previewGithub.style.borderColor="#a2deaf"}function handleInputPaletteTwo(){previewName.style.color="#420101",previewLateralDec.style.borderColor="#bd1010",previewPhone.style.color="#420101",previewPhone.style.borderColor="#bd1010",previewEmail.style.color="#420101",previewEmail.style.borderColor="#bd1010",previewLinkedin.style.color="#420101",previewLinkedin.style.borderColor="#bd1010",previewGithub.style.color="#420101",previewGithub.style.borderColor="#bd1010"}function handleInputPaletteThree(){previewName.style.color="#3e5b65",previewLateralDec.style.borderColor="#eab052",previewPhone.style.color="#3e5b65",previewPhone.style.borderColor="#a0c0cf",previewEmail.style.color="#3e5b65",previewEmail.style.borderColor="#a0c0cf",previewLinkedin.style.color="#3e5b65",previewLinkedin.style.borderColor="#a0c0cf",previewGithub.style.color="#3e5b65",previewGithub.style.borderColor="#a0c0cf"}function resetData(){inputPaletteOne.checked=!0,handleInputPaletteOne(),inputName.value="",inputJob.value="",inputPhone.value="",inputEmail.value="",inputLinkedin.value="",inputGithub.value="",inputPhoto.value="",data.name=inputName.value,data.job=inputJob.value,data.phone=inputPhone.value,data.email=inputEmail.value,data.linkedin=inputLinkedin.value,data.github=inputGithub.value,data.photo="",profileImage.style.backgroundImage="url('./assets/images/preview.png')",profilePreview.style.backgroundImage="",msgShareError.innerHTML="",shareSection.classList.add("collapsed")}updatePreview(),inputName.addEventListener("input",handleInputName),inputJob.addEventListener("input",handleInputJob),inputPhone.addEventListener("input",handleInputPhone),inputEmail.addEventListener("input",handleInputEmail),inputLinkedin.addEventListener("input",handleInputLinkedin),inputGithub.addEventListener("input",handleInputGithub),rstBtn.addEventListener("click",handleReset),inputPaletteOne.addEventListener("input",handleInputPaletteOne),inputPaletteTwo.addEventListener("input",handleInputPaletteTwo),inputPaletteThree.addEventListener("input",handleInputPaletteThree);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);const btnShare=document.querySelector(".js_btn_card"),msgShareError=document.querySelector(".js_share_error"),shareSection=document.querySelector(".js-share__result"),urlTwitter=document.querySelector(".js__twitter"),urlCard=document.querySelector(".js__cardUrl");function handleBtnShare(e){e.preventDefault();const t=/^[0-9]+$/;""===inputName.value||""===inputJob.value||""===inputPhone.value||""===inputEmail.value||""===inputLinkedin.value||""===inputGithub.value?msgShareError.innerHTML="Faltan campos por rellenar":""===inputPhoto.value?msgShareError.innerHTML="Añade una imagen para continuar":inputEmail.value.includes("@")&&inputEmail.value.includes(".")?t.test(inputPhone.value)?(msgShareError.innerHTML="",fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!1===e.success?msgShareError.innerHTML=e.error:(shareSection.classList.remove("collapsed"),urlCard.href=e.cardURL,urlCard.innerHTML=e.cardURL,urlTwitter.href=`https://twitter.com/intent/tweet?url=${e.cardURL}&text=Dicen+que+las+tarjetas+de+presentaci%c3%b3n+han+muerto%2c+pero...+%c2%a1qu%c3%a9+va!+Aqu%c3%ad+os+dejo+la+m%c3%ada+%3b)+Si+quieres+una+tarjeta+igual+de+guay+haz+click+aqu%c3%ad+https%3a%2f%2ftinyurl.com%2fadapickleteam%0d%0a%0d%0a`),localStorage.setItem("definitiveCard",JSON.stringify(data))})):(msgShareError.innerHTML="Por favor, ingresa una teléfono válido.",shareSection.classList.add("collapsed")):(msgShareError.innerHTML="Por favor, ingresa una dirección de correo electrónico válida.",shareSection.classList.add("collapsed"))}const dataLS=JSON.parse(localStorage.getItem("definitiveCard"));btnShare.addEventListener("click",handleBtnShare);
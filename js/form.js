const formTag = document.querySelector("#formTag");
const buttonSubmit = document.querySelector('#buttonSubmit');
var modalTxt = document.querySelector('.modal__text');
var modal = document.querySelector('.modal');
var close = document.querySelector('.modal__button');


buttonSubmit.addEventListener ('click', event =>{
event.preventDefault();

if (validateForm(formTag)){
	const formData = new FormData(formTag);
		formData.append	("name", formTag.elements.name.value);
		formData.append	("phone", formTag.elements.phone.value);
		formData.append	("comment", formTag.elements.textarea.value);
		formData.append	("to", formTag.elements.email.value);


	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
	xhr.send(formData);
	xhr.addEventListener('load', () =>{
if (xhr.response.status == 1){
	modalTxt.textContent = 'Сообщение отправлено';
} else {
	modalTxt.textContent = 'Ошибка';	
}
		console.log(xhr.response);
		modal.style.display = 'flex';
	} )

}

function validateForm(formTag){
let valid = true;

if (!formTag.elements.name.checkValidity()){
		formTag.elements.name.style.border = 'red';
		formTag.elements.name.style.borderStyle = 'solid';
		formTag.elements.name.style.borderWidth = 2 +'px';
		formTag.elements.name.style.borderRadius = 5 +'px';
		valid = false;
}

if (!formTag.elements.phone.checkValidity()){
	formTag.elements.phone.style.border = 'red';
	formTag.elements.phone.style.borderStyle = 'solid';
	formTag.elements.phone.style.borderWidth = 2 +'px';
	formTag.elements.phone.style.borderRadius = 5 +'px';
		valid = false;
}

if (!formTag.elements.textarea.checkValidity()){
	formTag.elements.textarea.style.border = 'red';
	formTag.elements.textarea.style.borderStyle = 'solid';
	formTag.elements.textarea.style.borderWidth = 2 +'px';
	formTag.elements.textarea.style.borderRadius = 5 +'px';
    valid = false;
}
return valid;
}


});

close.addEventListener ('click', event =>{
	modal.style.display = 'none';
});

formTag.elements.name.addEventListener ('input', event =>{
	formTag.elements.name.style.border = 'none';

});

formTag.elements.textarea.addEventListener ('input', event =>{
	formTag.elements.textarea.style.border = 'none';

});

formTag.elements.phone.addEventListener ('input', event =>{
	formTag.elements.phone.style.border = 'none';

});
// checkbar registry //
document.addEventListener('DOMContentLoaded', () => {
	const checkboxImage = document.getElementById('checkboxImage');
	const checkmarkPath = checkboxImage.querySelector('.checkmark');

	checkboxImage.addEventListener('click', () => {
		 const isDisplayed = checkmarkPath.style.display === 'none';
		 checkmarkPath.style.display = isDisplayed ? 'block' : 'none';
	});
});

// Accept button animation
const acceptButton = document.querySelector('.main__acceptbutton');
acceptButton.addEventListener('click', () => {
	acceptButton.classList.add('animate-button');
	setTimeout(() => {
		 acceptButton.classList.remove('animate-button');
	}, 1000);
});

// add new member // 
function addParticipant() {
	let container = document.querySelector('.main__formblock');
	let formCount = document.querySelectorAll('.main__blockflexcontainer').length;
	if (formCount >= 5) {
	  return;
 }
	let newBlock = document.createElement('div');
	newBlock.className = 'main__blockflexcontainer';
	newBlock.innerHTML = `
  <div class="main__block">
						  <div class="main__nameteam block__form">
							  <input type="text" id="firstName" class="main__form form__greyblock" placeholder=" " required>
							  <label for="team-name" id="firstName" class="main__formlabel label__greyblock">Имя</label>
						  </div>
						  <div class="main__nameteam block__form">
							  <input type="text" id="lastName" class="main__form form__greyblock" placeholder=" " required>
							  <label for="team-name" id="lastName" class="main__formlabel label__greyblock">Фамилия</label>
						  </div>
						  <div class="main__nameteam block__form">
							  <input type="email" id="email" class="main__form form__greyblock" placeholder=" " required>
							  <label for="team-name" id="email" class="main__formlabel label__greyblock">Email</label>
						  </div>
							  <div class="main__nameteam block__form">
								  <input type="string" id="phoneNumber" class="main__form form__greyblock" placeholder=" " required>
								  <label for="team-name" id="phoneNumber" class="main__formlabel label__greyblock">Номер телефона</label>
							  </div>
						  <div class="main__loadresume">
							  <input type="file" id="resumeInput${formCount}" class="main__resumeinput" hidden accept=".doc, .docx, .pdf" hidden>
							  <div class="main__resumeimg">
								  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									  <path d="M17.0204 7.28008H7.09064M17.0203 12.2127H7.08797M13.7476 17.1441H7.08797M3.27246 2.18176H20.727V22.2387H3.27246V2.18176Z" stroke="#2D3988" stroke-width="1.61324" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								  </div>
								  <div class="main__resumetext" onclick="document.getElementById('resumeInput${formCount}').click()">
						  <span class="main__resumespan">Загрузить резюме </span><span id="optionalText">(необязательно)</span>
							  </div>
						 </div>
					  </div>
					  <svg class="main__cross" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						  <path d="M1 13.5L4.59348 9.90652L12.9989 1.5" stroke="#9A9A9A" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
						  <path d="M13 13.5L9.40652 9.90652L1 1.5" stroke="#9A9A9A" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
`;
	container.appendChild(newBlock);
	let cross = newBlock.querySelector('.main__cross');
	cross.addEventListener('click', removeParticipant);


	let resumeInput = newBlock.querySelector('.main__resumeinput');
	resumeInput.addEventListener('change', function() {
		 let fileName = this.files[0].name;
		 let resumeSpan = this.closest('.main__loadresume').querySelector('.main__resumespan');
		 resumeSpan.textContent = fileName;
		 let optionalText = this.closest('.main__loadresume').querySelector('#optionalText');
		 if (optionalText) {
			  optionalText.style.display = 'none';
		 }
	});
	updateFormCount();
}


// Remove a participant
function removeParticipant(event) {
	let block = event.currentTarget.closest('.main__blockflexcontainer');
	block.remove();
	updateFormCount();
}

// Update participant count
function updateFormCount() {
	let formCount = document.querySelectorAll('.main__blockflexcontainer').length;
	let countSpan = document.querySelector('.members__numberspan');
	countSpan.textContent = formCount;

	let formBlock = document.querySelector('.main__formblock');
	let crosses = document.querySelectorAll('.main__cross');
	crosses.forEach(cross => {
		 if (formCount > 1) {
			  cross.style.visibility = 'visible';
		 } else {
			  cross.style.visibility = 'hidden'
		 }
	});
}

// Initialize the remove function for the initial participant
document.addEventListener('DOMContentLoaded', () => {
	let initialCross = document.querySelector('.main__cross');
	if (initialCross) {
		 initialCross.addEventListener('click', removeParticipant);
	}
});


// Загрузить файлы с резюме на страницу// 
document.getElementById('resumeInput').addEventListener('change', function() {
	let fileName = this.files[0].name;
	document.querySelector('.main__resumespan').textContent = fileName;
	document.getElementById('optionalText').style.display = 'none';
});


function validateForm() {
	// Получаем элементы формы
	const teamName = document.querySelector('#team-name').value;
	const firstName = document.querySelector('#firstName').value;
	const lastName = document.querySelector('#lastName').value;
	const email = document.querySelector('#email').value;
	const phoneNumber = document.querySelector('#phoneNumber').value;
	const isChecked = document.querySelector('#checkboxImage .checkmark').style.display !== 'none';

	// Проверяем заполненность полей
	if (!teamName || !firstName || !lastName || !email || !phoneNumber || !isChecked) {
		 alert('Пожалуйста, заполните все обязательные поля и согласитесь с условиями.');
		 return false;
	}

	return true;
}

document.addEventListener('DOMContentLoaded', function() {
	const currentLangBtn = document.getElementById('currentLang');
	const currentUrl = window.location.href;

	if (currentUrl.includes('page_kaz.html')) {
		 currentLangBtn.textContent = 'ҚАЗ';
	} else if (currentUrl.includes('page_rus.html')) {
		 currentLangBtn.textContent = 'РУС';
	} else if (currentUrl.includes('page_eng.html')) {
		 currentLangBtn.textContent = 'ENG';
	}
});


function submitForm() {
	if (validateForm()) {
		 const teamNameValue = document.querySelector('#team-name').value;
		 const participantElements = document.querySelectorAll('.main__block');

		 const formData = new FormData();
		 formData.append('TeamName', teamNameValue);
		 

		 participantElements.forEach((part, index) => {
			  formData.append(`Members[${index}].FirstName`, part.querySelector('#firstName').value);
			  formData.append(`Members[${index}].LastName`, part.querySelector('#lastName').value);
			  formData.append(`Members[${index}].EMail`, part.querySelector('#email').value);
			  formData.append(`Members[${index}].PhoneNumber`, part.querySelector('#phoneNumber').value);
			  const fileInput = part.querySelector(`.main__resumeinput`);
			  if (fileInput && fileInput?.files) {
					formData.append(`Members[${index}].File`, fileInput.files[0]);
			  }
		 });

		 fetch('https://localhost:44372/api/Registration/Add', {
			  method: 'POST',
			  body: formData,
		 })
			  .then(response => {
					if (!response.ok) {
						 throw new Error('Network response was not ok ' + response.statusText);
					}
					return response.json();
			  })
			  .then(data => {
					console.log('Success:', data);
					window.location.href = 'registry-complete.html';
			  })
			  .catch((error) => {
					console.error('Error:', error);
			  });
	}
}
document.querySelector('.main__acceptbutton').addEventListener('click', submitForm);
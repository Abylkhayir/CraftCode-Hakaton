// Timer //
function countdown() {
	const endDate = new Date("March 22, 2024 00:00:00").getTime();
	const now = new Date().getTime();
	const timeLeft = endDate - now;

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.querySelector('.timer__day').innerHTML = days + " <span class='timer__lower'>дней</span>";
	document.querySelector('.timer__hour').innerHTML = hours + " <span class='timer__lower'>часов</span>";
	document.querySelector('.timer__minute').innerHTML = minutes + " <span class='timer__lower'>минут</span>";
	document.querySelector('.timer__second').innerHTML = seconds + " <span class='timer__lower'>секунд</span>";
}

let timer = setInterval(countdown, 1000); 


// programm hidden // 
let titles = document.getElementsByClassName("table__title");
let bodies = document.getElementsByClassName("table__body");
let i;

for (i = 0; i < titles.length; i++) {
    (function(index){
        titles[index].addEventListener("click", function() {
            let content = bodies[index];
            if (content.classList.contains('collapsing')) {
                content.classList.remove('collapsing');
                setTimeout(() => {
                    content.style.display = "block";
                }, 10);
            } else {
                content.style.display = "block";
                setTimeout(() => {
                    content.classList.add('collapsing');
                    setTimeout(() => {
                        content.style.display = "none";
                    }, 500);
                }, 10);
            }
        });
    })(i);
}

//desktop slider about hakaton // 
document.addEventListener('DOMContentLoaded', function() {
	let slidesContainer = document.querySelector('.sliders__slides');
	let slides = document.querySelectorAll('.sliders__slide');
	let currentIndex = 0;

	function nextSlide() {
		 currentIndex++;
		 if (currentIndex >= slides.length) {
			  currentIndex = 0;
		 }
		 slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	setInterval(nextSlide, 3000);
});


// mobile slider // 
document.addEventListener('DOMContentLoaded', (event) => {
	const list = document.querySelector('.mentors__list');
	const slides = list.querySelectorAll('.mentors__block');
	const progressContainer = document.querySelector('.slider-progress');
	let currentSlide = 0;

	// Create progress indicators
	slides.forEach((slide, index) => {
		 const progressBar = document.createElement('div');
		 progressBar.className = 'progress-bar' + (index === 0 ? ' active' : '');
		 progressContainer.appendChild(progressBar);
	});

	const progressBars = progressContainer.querySelectorAll('.progress-bar');

	// Function to go to a slide
	const goToSlide = (index) => {
		 list.style.transform = `translateX(-${index * 100}%)`;
		 progressBars.forEach((bar, i) => {
			  bar.classList[i === index ? 'add' : 'remove']('active');
		 });
		 currentSlide = index;
	};

	// Auto-scroll functionality
	const startAutoScroll = () => {
		 return setInterval(() => {
			// TODO condition
			console.log("WIDTH: ",window.innerWidth);
			if(window.innerWidth >350){
				return;
			}
			  let nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
			  goToSlide(nextSlide);
		 }, 3000); // Change slide every 3 seconds
	};

	let intervalId = startAutoScroll();

	// Click event on progress bars for manual control
	progressBars.forEach((bar, index) => {
		 bar.addEventListener('click', () => {
			  clearInterval(intervalId); // Stop auto-scrolling
			  goToSlide(index);
			  intervalId = startAutoScroll(); // Start auto-scrolling again
		 });
	});
});

// checkbar registry //
document.addEventListener('DOMContentLoaded', () => {
	const checkboxImage = document.getElementById('checkboxImage');
	const checkmarkPath = checkboxImage.querySelector('.checkmark');

	checkboxImage.addEventListener('click', () => {
		 const isDisplayed = checkmarkPath.style.display === 'none';
		 checkmarkPath.style.display = isDisplayed ? 'block' : 'none';
	});
});


// add new member // 
function addParticipant() {
	let container = document.querySelector('.main__formblock');
	let formCount = document.querySelectorAll('.main__blockflexcontainer').length;
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
						<svg class="main__cross"  xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
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
			  cross.style.display = 'block';
			  formBlock.style.marginRight = '0'; // Reset margin-right when crosses are visible
		 } else {
			  cross.style.display = 'none';
			  formBlock.style.marginRight = '24px'; // Add margin-right when crosses are hidden
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
	let currentLang = localStorage.getItem('selectedLang') || 'РУС';
	document.getElementById('currentLang').textContent = currentLang;

	let langLinks = document.querySelectorAll('.lang-link');
	langLinks.forEach(function(link) {
		 link.addEventListener('click', function() {
			  localStorage.setItem('selectedLang', link.dataset.lang);
		 });
	});
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
			  const fileInput = part.querySelector('#resumeInput');
			  if (fileInput.files[0]) {
					formData.append(`Members[${index}].File`, fileInput.files[0]);
			  }
		 });

		 fetch('YOUR_API_ENDPOINT', {
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
			  alert('Форма успешно отправлена!');
		 })
		 .catch((error) => {
			  console.error('Error:', error);
			  alert('Произошла ошибка при отправке формы: ' + error.message);
		 });
	}
}
document.querySelector('.main__acceptbutton').addEventListener('click', submitForm);





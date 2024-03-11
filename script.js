// Timer
function countdown() {
	const endDate = new Date("March 22, 2024 00:00:00").getTime();
	const now = new Date().getTime();
	const timeLeft = endDate - now;

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	// Check screen width
	const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const dayText = screenWidth <= 430 ? "дней" : "дней";
	const hourText = screenWidth <= 430 ? "час" : "часов";
	const minuteText = screenWidth <= 430 ? "мин" : "минут";
	const secondText = screenWidth <= 430 ? "сек" : "секунд";

	document.querySelector('.timer__day').innerHTML = days + " <span class='timer__lower'>" + dayText + "</span>";
	document.querySelector('.timer__hour').innerHTML = hours + " <span class='timer__lower'>" + hourText + "</span>";
	document.querySelector('.timer__minute').innerHTML = minutes + " <span class='timer__lower'>" + minuteText + "</span>";
	document.querySelector('.timer__second').innerHTML = seconds + " <span class='timer__lower'>" + secondText + "</span>";
}

let timer = setInterval(countdown, 1000);


// функция скролла //
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Programm hidden
let titles = document.getElementsByClassName("table__title");
let bodies = document.getElementsByClassName("table__body");
for (let i = 0; i < titles.length; i++) {
	titles[i].addEventListener("click", function () {
		 let content = bodies[i];
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
}

// Desktop slider about hackathon
function startDesktopSlider() {
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
}

// Mobile slider
function startMobileSlider() {
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
	let intervalId = setInterval(() => {
		 let nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
		 goToSlide(nextSlide);
	}, 3000);

	progressBars.forEach((bar, index) => {
		 bar.addEventListener('click', () => {
			  clearInterval(intervalId);
			  goToSlide(index);
			  intervalId = setInterval(() => {
					let nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
					goToSlide(nextSlide);
			  }, 3000);
		 });
	});

	const leftArrow = document.querySelector('.left-arrow');
	const rightArrow = document.querySelector('.right-arrow');

	leftArrow.addEventListener('click', () => {
		 let prevSlide = currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1;
		 goToSlide(prevSlide);
	});

	rightArrow.addEventListener('click', () => {
		 let nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
		 goToSlide(nextSlide);
	});
}

// Language selection and initialization of sliders
document.addEventListener('DOMContentLoaded', function () {
	let currentLang = localStorage.getItem('selectedLang') || 'РУС';
	document.getElementById('currentLang').textContent = currentLang;

	const langLinks = document.querySelectorAll('.lang-link');
	langLinks.forEach(function (link) {
		 link.addEventListener('click', function () {
			  localStorage.setItem('selectedLang', link.dataset.lang);
			  document.getElementById('currentLang').textContent = link.dataset.lang;
		 });
	});

	startDesktopSlider();
	if (window.innerWidth <= 430) {
		startMobileSlider();
	} else if (window.innerWidth > 430){
		return;
	}
});

function toggleContent() {
	const desktopContent = document.querySelector('.desktop__content');
	const mobileContent = document.querySelector('.mobile__content');
 
	if (window.innerWidth <= 430) {
	  desktopContent.style.display = 'none';
	  mobileContent.style.display = 'block';
	} else {
	  desktopContent.style.display = 'block';
	  mobileContent.style.display = 'none';
	}
 }
 
 window.addEventListener('resize', toggleContent);
 document.addEventListener('DOMContentLoaded', toggleContent);

 document.addEventListener('DOMContentLoaded', function () {
	let menuBurger = document.querySelector('.menu-burger');
	let headerNavbar = document.querySelector('.header__navbar');
	let headerFlexContainer = document.querySelector('.header__flexcontainer');
	

	menuBurger.addEventListener('click', function () {
		 headerNavbar.classList.toggle('active-menu');
		 headerFlexContainer.classList.toggle('active-menu');
		 menuBurger.classList.toggle('active');
	});
});
 // menu burger // 
 document.querySelector('.my-svg').classList.add('black-stroke');

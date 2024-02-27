// Timer //
function countdown() {
	const endDate = new Date("March 27, 2024 00:00:00").getTime();
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

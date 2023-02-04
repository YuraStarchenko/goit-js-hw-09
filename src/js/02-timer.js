import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const UPDATE_TIME = 1000;
let timerId = null;

const refs = {
	myInput: document.querySelector('input#datetime-picker'),
	startBtn: document.querySelector('button[data-start]'),
	stopBtn: document.querySelector('button[data-start]'),
	timerClock: document.querySelector('.timer'),
	seconds: document.querySelector('[data-seconds]'),
	minutes: document.querySelector('[data-minutes]'),
	hours: document.querySelector('[data-hours]'),
	days: document.querySelector('[data-days]'),
};

refs.startBtn.disabled = true;



// console.log(new Date());

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,

	onClose(selectedDates) {
		if(selectedDates[0] < new Date()){
			Notiflix.Report.warning("Please choose a date in the future");
		} else {
			refs.startBtn.disabled = false;
		}
	},
};
flatpickr(refs.myInput, options);

class timer {
	constructor() {
		
	}
}



refs.startBtn.addEventListener('click', () => {
	refs.startBtn.disabled = true;
	refs.stopBtn.disabled = false;
	const timer = {
		start() {
			const startTime =	Date.now();

		const	timerId = setInterval(() => {
				const currentTime = Date.now();
				const deltaTine = currentTime - startTime;
				const timeClock = convertMs(deltaTine);
				updateClockface(timeClock);
			}, UPDATE_TIME);
		},
	};
	timer.start();
});

refs.stopBtn.addEventListener('click', () => {
	refs.startBtn.disabled = false;
	refs.stopBtn.disabled = true;
	clearInterval(timerId);
});

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

function updateClockface({days, hours, minutes, seconds}){
	refs.timerClock.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

// refs.days.textContent = days;
// refs.hours.textContent = hours;
// refs.minutes.textContent = minutes;
// refs.seconds.textContent = seconds;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

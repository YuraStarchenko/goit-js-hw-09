import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const UPDATE_TIME = 1000;
let intervalId = null;

const refs = {
	myInput: document.querySelector('input#datetime-picker'),
	startBtn: document.querySelector('button[data-start]'),
	resetBtn: document.querySelector('button[data-stop]'),
	secondsRef: document.querySelector('[data-seconds]'),
	minutesRef: document.querySelector('[data-minutes]'),
	hoursRef: document.querySelector('[data-hours]'),
	daysRef: document.querySelector('[data-days]'),
};

refs.startBtn.disabled = true;
refs.resetBtn.disabled = true;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,

	onClose(selectedDates) {
		const currentTime = new Date();

		if(selectedDates[0] - currentTime > 0){
			refs.startBtn.disabled = false;
		} else {
			Notiflix.Report.failure("У нас есть что было -> В.Кличко🤣");
		}
	},
};
	

const flatP = flatpickr(refs.myInput, options);

refs.startBtn.addEventListener('click', () => {
	refs.startBtn.disabled = true;
	refs.resetBtn.disabled = false;

	intervalId = setInterval(() => {
		const selectedDate = flatP.selectedDates[0];
		const startTime = new Date();
		const countDown = selectedDate - startTime;
		updateClockface(convertMs(countDown));
		if(countDown < UPDATE_TIME){
			clearInterval(intervalId);
		}
	}, UPDATE_TIME);
});

refs.resetBtn.addEventListener('click', () => {
	refs.startBtn.disabled = false;
	refs.resetBtn.disabled = true;
	clearInterval(intervalId);
	clearBtn();
});

function clearBtn(){
	refs.daysRef.textContent = "00";
	refs.hoursRef.textContent = "00";
	refs.minutesRef.textContent = "00";
	refs.secondsRef.textContent = "00";
}

function updateClockface({ days, hours, minutes, seconds }){
	refs.daysRef.textContent = addLeadingZero(days);
	refs.hoursRef.textContent = addLeadingZero(hours);
	refs.minutesRef.textContent = addLeadingZero(minutes);
	refs.secondsRef.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

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
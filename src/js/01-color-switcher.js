// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону <body> на випадкове значення, 
// використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.
// =========================================================================== //

const DELAY_CHANGE_COLOR = 1000;
let timerId = null;

const refs = {
	startBtn: document.querySelector('button[data-start]'),
	stopBtn: document.querySelector('button[data-stop]'),
	body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', () => {
	timerId = setInterval(() => {
		refs.body.style.backgroundColor = getRandomHexColor();
	}, DELAY_CHANGE_COLOR);
});

refs.stopBtn.addEventListener('click', () => {
	clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
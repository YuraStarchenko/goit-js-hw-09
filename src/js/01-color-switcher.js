// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону <body> на випадкове значення, 
// використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const refs = {
	startBtn: document.querySelector('button[data-start]'),
	stopBtn: document.querySelector('button[data-stop]'),
	body: document.querySelector('body'),
};



refs.startBtn.addEventListener('click', );
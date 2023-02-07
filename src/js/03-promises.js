const refs = {
	form: document.querySelector('form.form'),
	firstDelay: document.querySelector('[name="delay"]'),
	delayStep: document.querySelector('[name="step"]'),
	amount: document.querySelector('[name="amount"]'),
	createBtn: document.querySelector('[type="submit"]'),
};

refs.createBtn.addEventListener('click', () => {
	
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

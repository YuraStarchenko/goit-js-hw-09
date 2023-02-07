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


createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
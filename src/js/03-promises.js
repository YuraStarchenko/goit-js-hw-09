const refs = {
	form: document.querySelector('form.form'),
	firstDelay: document.querySelector('[name="delay"]'),
	delayStep: document.querySelector('[name="step"]'),
	amount: document.querySelector('[name="amount"]'),
	createBtn: document.querySelector('[type="submit"]'),
};

refs.createBtn.addEventListener('click', promiseCreateBtn);


function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		const shouldResolve = Math.random() > 0.3;
		setTimeout(() => {
			if (shouldResolve) {
				resolve({position, delay});
			} else {
				reject({position, delay});
			}
		}, delay);
	})
}

function promiseCreateBtn(){


	createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
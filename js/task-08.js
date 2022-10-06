const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value && password.value) {
		event.currentTarget.reset();
	} else {
		alert('Please fill in all the fields!');
	}
});
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

    if (email.value && password.value) {
        const objectData = {
            email: email.value,
            password: password.value,
        }
        event.currentTarget.reset();
        console.log(objectData);
	} else {
		alert('Please, fill in all the fields!');
	}
});
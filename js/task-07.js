const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', (event) => {
	const size = event.currentTarget.value;

	text.style.fontSize = `${size}px`;
});
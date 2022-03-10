
const btn = document.querySelector ('.toggle-icon');

btn.addEventListener('click', function(){
	document.querySelector('nav').classList.toggle('sr-only');

})
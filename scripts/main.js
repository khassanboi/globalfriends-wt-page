document.getElementById('menu-icon').addEventListener('click', () => {
	document.getElementById('nav-list').classList.toggle('visible');
});

document.querySelectorAll(".nav__item-link").forEach(el => {
	el.addEventListener('click',function (e) {
		document.getElementById('nav-list').classList.toggle('visible');
	});
});

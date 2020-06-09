const main_burger = document.querySelector('.main-burger')
const side_menu = document.querySelector('.side-menu')

main_burger.addEventListener('click', () => {
	main_burger.classList.toggle('active')
	side_menu.classList.toggle('active')
})


window.addEventListener('click', e => {
	console.log(e.target, e.target.parentNode)
	// if (e.target != side_menu && e.target.parentNode != side_menu && e.target != main_burger) {
	// 	main_burger.classList.remove('active')
	// 	side_menu.classList.remove('active')
	// }
})

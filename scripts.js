const burger = document.querySelector('.burger')
const side_menu = document.querySelector('.side-menu')
const side_menu_children = Object.values(side_menu.getElementsByTagName("*"))
const body = document.querySelector('body')
const category_titles = document.querySelectorAll('.category-title')


function getActiveCategory() {
	category_titles.forEach(category_title => {
		const top = category_title.getBoundingClientRect().top
		const active_category = side_menu.querySelector(`a[href="#${category_title.parentNode.id}"]`)
		if (parseInt(top) === 0) {
			active_category.classList.add('active')
		} else {
			active_category.classList.remove('active')
		}
	})
}

getActiveCategory()


for (let elem of side_menu_children) {
	if (elem.classList.contains('category-link')) {
		side_menu_children.splice(side_menu_children.indexOf(elem), 1)
	}
}

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	side_menu.classList.toggle('active')
	body.classList.toggle('lock')
})


window.addEventListener('click', e => {
	if (e.target != burger
		&& !Object.values(burger.children).includes(e.target)
		&& e.target != side_menu 
		&& !side_menu_children.includes(e.target)) {
		body.classList.remove('lock')
		burger.classList.remove('active')
		side_menu.classList.remove('active')
	}
})


window.addEventListener('scroll', () => {
	getActiveCategory()
})
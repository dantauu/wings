const aircraftData = [
	{
		id: 1,
		name: 'Су-27',
		image: 'images/airplane.svg',
		description:
			'Су-27 (по кодификации НАТО: Flanker-B) — советский/российский многоцелевой истребитель. Разработан в ОКБ Сухого. Принят на вооружение в 1985 году. Су-27 является одним из основных самолётов ВКС России, модификации стоят на вооружении в странах СНГ, Индии, Китае.',
	},
	{
		id: 2,
		name: 'МиГ-29',
		image: 'images/airplane.svg',
		description:
			'МиГ-29 (по кодификации НАТО: Fulcrum) — советский/российский многоцелевой истребитель четвёртого поколения. Разработан в ОКБ МиГ. МиГ-29 предназначен для уничтожения воздушных целей противника днём и ночью, в простых и сложных метеоусловиях.',
	},
	{
		id: 3,
		name: 'Ту-160',
		image: 'images/airplane.svg',
		description:
			'Ту-160 (по кодификации НАТО: Blackjack) — сверхзвуковой стратегический бомбардировщик-ракетоносец с изменяемой геометрией крыла. Самый крупный и самый мощный в истории военной авиации сверхзвуковой самолёт и самый тяжёлый боевой самолёт в мире.',
	},
	{
		id: 4,
		name: 'Ил-76',
		image: 'images/airplane.svg',
		description:
			'Ил-76 — советский/российский тяжёлый военно-транспортный самолёт. Разработан в КБ Ильюшина. Предназначен для транспортировки и десантирования личного состава, техники и грузов различного назначения.',
	},
	{
		id: 5,
		name: 'Су-57',
		image: 'images/airplane.svg',
		description:
			'Су-57 (ранее известный как ПАК ФА, Т-50) — российский многофункциональный истребитель пятого поколения. Разработан в ОКБ Сухого. Су-57 оснащён принципиально новым комплексом глубоко интегрированной авионики и обладает сниженной заметностью.',
	},
	{
		id: 6,
		name: 'Ан-124',
		image: 'images/airplane.svg',
		description:
			'Ан-124 «Руслан» — тяжёлый транспортный самолёт. Разработан в АНТК им. О. К. Антонова. На момент создания Ан-124 был самым грузоподъёмным серийным транспортным самолётом в мире.',
	},
	{
		id: 7,
		name: 'Ту-22М',
		image: 'images/airplane.svg',
		description:
			'Ту-22М (по кодификации НАТО: Backfire) — советский/российский дальний сверхзвуковой ракетоносец-бомбардировщик с изменяемой геометрией крыла. Предназначен для поражения морских и наземных целей противника с больших, малых и предельно малых высот.',
	},
	{
		id: 8,
		name: 'Як-130',
		image: 'images/airplane.svg',
		description:
			'Як-130 — учебно-боевой самолёт, разработанный ОКБ имени Яковлева. Предназначен для обучения курсантов лётных училищ и боевого применения в локальных конфликтах.',
	},
	{
		id: 9,
		name: 'МиГ-31',
		image: 'images/airplane.svg',
		description:
			'МиГ-31 (по кодификации НАТО: Foxhound) — советский/российский двухместный сверхзвуковой всепогодный истребитель-перехватчик дальнего радиуса действия. Предназначен для перехвата и уничтожения воздушных целей на предельно малых, малых, средних и больших высотах.',
	},
	{
		id: 10,
		name: 'Су-35',
		image: 'images/airplane.svg',
		description:
			'Су-35 — российский многоцелевой сверхманёвренный истребитель поколения 4++. Глубоко модернизированный вариант Су-27. Отличается усовершенствованной авионикой и новыми двигателями с управляемым вектором тяги.',
	},
]

// Создание меню навигации с самолетами
function createAircraftMenu() {
	const navContainer = document.getElementById('aircraft-nav')

	aircraftData.forEach(aircraft => {
		const aircraftCard = document.createElement('div')
		aircraftCard.className = 'aircraft-card'
		aircraftCard.setAttribute('data-id', aircraft.id)

		aircraftCard.innerHTML = `
            <img src="${aircraft.image}" class="airplane-image" alt="${aircraft.name}">
            <h3>${aircraft.name}</h3>
        `

		aircraftCard.addEventListener('click', () =>
			showAircraftDetail(aircraft.id)
		)
		navContainer.appendChild(aircraftCard)
	})
}

// Отображение детальной информации о самолете
function showAircraftDetail(aircraftId) {
	const aircraft = aircraftData.find(a => a.id === aircraftId)
	if (!aircraft) return

	const contentContainer = document.getElementById('aircraft-content')

	// Создаем новое содержимое
	const detailContent = document.createElement('div')
	detailContent.className = 'aircraft-detail animate__animated animate__fadeIn'

	detailContent.innerHTML = `
        <h2>${aircraft.name}</h2>
        <div class="aircraft-image">
            <img src="${aircraft.image}" alt="${aircraft.name}" class="animate__animated animate__zoomIn">
        </div>
        <div class="aircraft-description animate__animated animate__fadeInUp">
            <p class="aircraft-description-text">${aircraft.description}</p>
        </div>
    `

	// Анимация исчезновения текущего содержимого
	contentContainer.classList.add('animate__animated', 'animate__fadeOut')

	setTimeout(() => {
		// Очищаем контейнер и добавляем новое содержимое
		contentContainer.innerHTML = ''
		contentContainer.classList.remove('animate__animated', 'animate__fadeOut')
		contentContainer.appendChild(detailContent)

		// Выделяем выбранный самолет в меню
		document.querySelectorAll('.aircraft-card').forEach(card => {
			if (parseInt(card.getAttribute('data-id')) === aircraftId) {
				card.classList.add('selected')
			} else {
				card.classList.remove('selected')
			}
		})
	}, 300)
}

// Инициализация после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
	createAircraftMenu()
})

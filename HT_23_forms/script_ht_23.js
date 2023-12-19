// Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

const registrationForm = document.querySelector("#registrationForm")
const unprovided = "Unprovided"
const clearButton = document.querySelector("#clean")

let table = document.createElement("table")

const getFromContent = function (event) {
	event.preventDefault()
	const checkboxes = [...document.querySelectorAll('input[class="language"]:checked')]
	const userDataReceiver = {
		"First Name": registrationForm.querySelector("#firstName").value || unprovided,
		"Last Name": registrationForm.querySelector("#lastName").value || unprovided,
		"Date Of Birth": registrationForm.querySelector("#dob").value || unprovided,
		"Gender": registrationForm.querySelector('input[name="gender"]:checked')
			? registrationForm.querySelector('input[name="gender"]:checked').value
			: unprovided,
		"City": registrationForm.querySelector("#city").value || unprovided,
		"Address": registrationForm.querySelector("#address").value || unprovided,
		"Language(s)": checkboxes.length !== 0 ? checkboxes.map(acc => ` ${acc.value}`) : unprovided,
	}
	const body = document.querySelector("body")

	table.style.border = "solid 1px green"

	const dataKeysList = Object.keys(userDataReceiver)
	const isTable = document.querySelector("table")

	for (let column = 0; column < 2; column++) {
		const tr = document.createElement("tr")
		tr.style.border = "solid 1px green"
		for (let row = 0; row < 7; row++) {
			if (column === 0) {
				if (!isTable) {
					const th = document.createElement("th")
					th.style.width = "150px"
					th.style.textAlign = "center"
					th.innerText = dataKeysList[row]
					th.style.border = "solid 1px blue"
					tr.appendChild(th)
				}
			} else {
				const td = document.createElement("td")
				td.innerText = userDataReceiver[dataKeysList[row]]
				td.style.border = "solid 1px red"
				td.style.textAlign = "center"
				tr.appendChild(td)
			}
		}
		table.appendChild(tr)
	}
	body.appendChild(table)
}

const clear = function (event) {
	try {
		const tableToClean = document.querySelector("table")
		tableToClean.remove()
		table = document.createElement("table")
	} catch (TypeError) {
		console.log(`Not yet exist the element :) ${TypeError.message}`)
	}
}

registrationForm.addEventListener("submit", getFromContent)
clearButton.addEventListener("click", clear)

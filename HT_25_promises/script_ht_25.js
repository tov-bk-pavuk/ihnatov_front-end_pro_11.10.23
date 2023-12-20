// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100)
// Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для
// отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

// Preparation code for titles
const htTitle = "Home task 25 Promises"
const title = document.querySelector("title")
const h1 = document.querySelector("h1")
title.innerText = htTitle
h1.innerText = htTitle
const API = "https://jsonplaceholder.typicode.com/posts"
const body = document.querySelector("body")


async function fetchData(number) {
	try {
		const response = await fetch(API);
		const responseData = await response.json()
		return responseData.filter(item => {
			if (item.id.toString() === number.toString()) {
				return item
			}
		})
	} catch (error) {
		console.log(`error = ${error.message}`)
	}
}

const searchFormHandler = function (evt) {
	const errorUserMessage = document.querySelector("#inputError")
	errorUserMessage.style.display = "none"
	const inputIdValue = evt.target.value
	const articleBody = document.querySelector(".articleBody")
	const articleTitle = document.querySelector(".title")

	if (
		!isNaN(Number(inputIdValue)) &&
		Number(inputIdValue) >= 1 &&
		Number(inputIdValue) <= 100 &&
		!inputIdValue.includes(".")
	) {
		fetchData(inputIdValue).then(item => {
				articleBody.innerText = item[0].body
				articleBody.style.color = "black"
				articleTitle.innerText = item[0].title
				articleTitle.style.color = "black"
			}
		).catch(error => console.log(`error = ${error}`))
	} else {
		const errorUserMessage = document.querySelector("#inputError")
		errorUserMessage.style.display = "inline-block"
	}
}

const commentFormHandler = function (evt) {
	evt.preventDefault()
	if (evt.target.id === "commentForm") {
		const commentP = document.createElement("p")
		const comments = document.querySelector("h4")
		commentP.innerText = document.querySelector("#commentForm input[name='commentText']").value
		commentP.style.color = "black"
		commentP.style.fontStyle = "italic"
		comments.after(commentP)
		document.querySelector("#commentForm input[name='commentText']").value = ""
	}
}

const onchange = document.querySelector("#searchIdForm")
onchange.addEventListener("input", searchFormHandler)
body.addEventListener("submit", commentFormHandler)
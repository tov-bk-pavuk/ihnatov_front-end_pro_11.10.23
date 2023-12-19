// Дано 3 блоки
//
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення,
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

"use strict";
import { data } from "../common_data/common_objects.js";

const body = document.querySelector("body")

// const general = function (event) {
//     const tag = event.target.querySelector(".list");
//     if (tag) {tag.style.display = "block"}
// }
//
// const buttonHandler = function (event) {
//     const button = event.currentTarget;
//     if (button) {
//         alert(`Congrats with new ${button.parentNode.innerText}`)
//     }
// }
//
// const button = document.querySelector("button")
//
// button.addEventListener("click", buttonHandler)
// body.addEventListener("click", general)

// Dropdown Product with button
const planeHandler = function (event) {
	const tag = event.target;

	// clears (deletes) last menu items
	const parentUlLis = tag.parentNode.children
	const listUlLis = Array.from(parentUlLis)
	listUlLis.forEach((item)=>{
		const liChildren = Array.from(item.children)
		liChildren.forEach((child)=>{
			if (child && child.innerText.length > 30) {child.remove()}
		})
	})


	if (tag && tag.tagName === "LI") {
		const ulTag = document.createElement("ul")
		// ulTag.style.border = "dotted blue 1px"
		ulTag.style.display = "inline-block"
		ulTag.style.fontSize = "25px"
		ulTag.style.position = "absolute"
		// ulTag.style.margin = "-1px 0 0 5%"
		ulTag.style.margin = "0 0 0 25%"
		ulTag.style.padding = "0"
		ulTag.style.left = "100%"
		ulTag.style.top = "0"
		ulTag.style.listStyleType = "none"
		ulTag.className = tag.id
		tag.className = tag.id

		try {
			for (let planeProperties in data[tag.parentNode.className][tag.id]) {
				const liTag = document.createElement("li")
				liTag.className = planeProperties
				liTag.innerText = `${planeProperties}: ${data[tag.parentNode.className][tag.id][planeProperties]}`
				if (planeProperties === "image url") {
					liTag.innerHTML = `<img style="max-width: 550px;" alt="${planeProperties}" src="${data[tag.parentNode.className][tag.id][planeProperties]}">`
				}
				ulTag.appendChild(liTag)

			}
			const buttonTag = document.createElement("button")
			buttonTag.innerText = `buy ${tag.id}`
			buttonTag.style.fontSize = "25px"

			ulTag.appendChild(buttonTag)
			tag.appendChild(ulTag)
		} catch (TypeError) {
			console.log(`Not yet exist the element :) ${TypeError.message}`)
		}
	}

	if (tag && tag.tagName === "BUTTON") {
		alert(`Congrats with purchasing${tag.innerText.replace("buy", "")}!`)
		const allUl = document.querySelectorAll("ul")
		console.log(`allLi = ${allUl}`)
		allUl.forEach((ul) => {
			if (ul.className !== "categories") {
				ul.remove()
			}
		});
	}




}
// dropdown planes
const categoryHandler = function (event) {
	const tag = event.target;
	if (tag && tag.className === "" && tag.id === "" && tag.tagName === "LI") {

		const classListPrototype = document.querySelectorAll("[class]")
		const classList = Array.from(classListPrototype)
		classList.forEach((item)=>{
			if (item.className !== "categories" && item.className !== "") {
				item.remove()
			}
		})

		const ulTag = document.createElement("ul")
		ulTag.style.listStyleType = "none"
		ulTag.style.display = "inline-block"
		ulTag.style.fontSize = "25px"
		// ulTag.style.border = "1px dotted green "
		ulTag.style.position = "absolute"
		ulTag.style.left = "100%"
		ulTag.style.top = "0"
		ulTag.style.padding = "0"
		ulTag.style.margin = "0 0 0 25%"
		// ulTag.style.margin = "-1px 0 0 5%"
		ulTag.className = tag.innerText

		for (let plane in data[tag.innerText]) {
			const liTag = document.createElement("li")
			liTag.id = plane
			liTag.innerText = plane
			// liTag.style.border = "1px dotted orange"
			ulTag.appendChild(liTag)
		}
		tag.appendChild(ulTag)
	}
}

// Creating the first list of categories
const ulTag = document.createElement("ul")
ulTag.style.listStyleType = "none"
ulTag.style.display = "inline-block"
ulTag.style.position = "absolute"
ulTag.style.fontSize = "25px"
ulTag.style.padding = "0"
ulTag.className = "categories"
for (let category in data) {
	const liTag = document.createElement("li")
	liTag.innerText = category
	ulTag.appendChild(liTag)
}

body.appendChild(ulTag)

body.addEventListener("click", categoryHandler)
body.addEventListener("click", planeHandler)


// // Select all child elements of the body
// const bodyChildren = document.body.querySelectorAll('*');
// const liChildren = document.body.querySelectorAll('li');
// liChildren.forEach(function (element) {
// 	element.style.width = '200px'; // Example: 1px solid black border
// 	element.style.height = '100px'; // Example: 1px solid black border
// });
// // Loop through each child and set a border
// bodyChildren.forEach(function (element) {
// 	element.style.border = '1px dotted red'; // Example: 1px solid black border
// });

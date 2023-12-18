// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути
// всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
// На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
// При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень
// користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
// Реалізувати можливість видалення замовлення зі списку.

"use strict";
import { data } from "../common_data/common_objects.js";


const body = document.querySelector("body")

// creating categories
const categoriesUlTag = document.createElement("ul")
for (let category in data) {
	categoriesUlTag.className = "categories"
	const categoryLiTag = document.createElement("li")
	categoryLiTag.className = category
	categoryLiTag.innerText = category
	// creating sub categories
	const productUlTag = document.createElement("ul")
	for (let product in data[category]) {
		productUlTag.className = "products"
		const productLiTag = document.createElement("li")
		productLiTag.id = product
		productLiTag.innerText = product
		productUlTag.appendChild(productLiTag)
		// creating product description
		const productDescriptionUlTag = document.createElement("ul")
		productDescriptionUlTag.className = "product_description"
		const BuyButton = document.createElement("button")
		BuyButton.innerText = `Buy ${product}`
		BuyButton.className = product
		BuyButton.id = `buy`
		// creating product description
		for (let productDescription in data[category][product]) {
			const productDescriptionLiTag = document.createElement("li")
			productDescriptionLiTag.className = productDescription
			productDescriptionLiTag.innerText = `${productDescription}: ${data[category][product][productDescription]}`
			if (productDescription === "image url") {
					productDescriptionLiTag.innerHTML = `<img alt="${product}" src="${data[category][product][productDescription]}">`
				}
			productDescriptionUlTag.appendChild(productDescriptionLiTag)
		}
		productDescriptionUlTag.appendChild(BuyButton)
		productLiTag.appendChild(productDescriptionUlTag)
	}
	categoryLiTag.appendChild(productUlTag)
	categoriesUlTag.appendChild(categoryLiTag)
}
body.appendChild(categoriesUlTag)

// add basket button
const myOrders = document.createElement("button")
myOrders.innerText = "My purchases"

// event handlers
const BuyingFlowHandler = function (event) {
    const evt = event.target
		console.log(`evt = ${evt.tagName}`)
	// show subcategories
	if (evt.parentNode.className === "categories") {
		const displayedProducts = body.querySelectorAll(".products")
		displayedProducts.forEach(value => value.style.display = "none")
		const classProducts = event.target.querySelector(".products");
    const classProductDescription = event.target.querySelector(".product_description");
		classProducts.style.display = "inline-block"
    classProductDescription.style.display = "none"
	}
	// show products
	else if (evt.parentNode.className === "products") {
		const displayedProducts = body.querySelectorAll(".product_description")
		displayedProducts.forEach(value => value.style.display = "none")
    const classProductDescription = event.target.querySelector(".product_description");
    classProductDescription.style.display = "inline-block"
	} else if (evt.tagName === "BUTTON" && evt.id === "buy") {
		const model = evt.parentNode.querySelector(".model")

		let timestamp = new Date()
		// timestamp.setDate(timestamp.getDate())
		timestamp = timestamp.setDate(timestamp.getDate())

		const newDate = new Date(timestamp);
		const formattedDate = newDate.toDateString() + " " + newDate.toLocaleTimeString()

		const LiPlane = evt.parentNode.parentNode.querySelector(".product_description")
		const price = evt.parentNode.querySelector(".price").innerText

		const purchase = {
			// "timestamp": timestamp,
			"timestamp": formattedDate,
			"price": price,
			"purchase": LiPlane.innerHTML
		}
		// 	add order to local storage
		// localStorage.setItem(timestamp.toString(), JSON.stringify(purchase))
		localStorage.setItem(formattedDate, JSON.stringify(purchase))

		// localStorage.setItem("")
		alert(`Congrats, you have purchased a plane ${model.innerText}.\nPlease check 'My orders' section`)
		window.location.reload()
	}
}

const myOrdersButton = document.querySelector("#orders")

const myOrdersHandler = function (event) {
// 	make a list of date and price
// 	clear all other elements
	const allUl = document.querySelectorAll("ul")
	allUl.forEach((item) => {item.remove()})
// 	show my orders
	const orderUl = document.createElement("ul")
	orderUl.className = "order_list"
	const listOfOrders = Object.keys(localStorage)
	for (let item of listOfOrders) {
		const liOrder = document.createElement("li")

		const liOrderDetails = document.createElement("li")

		liOrder.id = item
		let purchase = JSON.parse(localStorage.getItem(item))
		liOrderDetails.innerHTML = purchase.purchase
		liOrder.innerText = `${purchase.timestamp}: ${purchase.price}`
		liOrder.style.fontWeight = "bold"
		// add button to delete an order from the list of orders
		const delButton = document.createElement("button")
		delButton.innerText = "del from basket"
		delButton.id = `${purchase.timestamp}`
		delButton.className = "del"
		liOrder.appendChild(delButton)
		orderUl.appendChild(liOrder)
		liOrderDetails.style.display = "none"
		liOrderDetails.className = "order_details"
		orderUl.appendChild(liOrderDetails)
	}
	body.appendChild(orderUl)


}
// 	show order details
const dropdownMyOrdersHandler = function (evt) {
	if (evt.target.tagName === "LI" && evt.target.parentNode.className === "order_list") {
		const orderDetailsLi = evt.target.nextSibling
		if (orderDetailsLi.style.display === "" || orderDetailsLi.style.display === "none") { orderDetailsLi.style.display = "inline-block"}
		else {orderDetailsLi.style.display = "none"}

		const buyButtons = document.querySelectorAll("#buy")
		buyButtons.forEach((button) => {button.style.display = "none"})
	}
}

// 	delete an order from list
const deleteOrderHandler = function (evt) {
	if (evt.target.className === "del") {
		const productId = evt.target.id
		localStorage.removeItem(productId)
		evt.target.parentNode.style.textDecoration = "line-through"
		console.log(`productId = ${productId}`)
	}
}
// go to main menu
const reloadHandler = function (evt) {
	if (evt.target.id === "reload") {window.location.reload()}
}

myOrdersButton.addEventListener("click", myOrdersHandler)
body.addEventListener("click", BuyingFlowHandler)
body.addEventListener("click", dropdownMyOrdersHandler)
body.addEventListener("click", deleteOrderHandler)
body.addEventListener("click", reloadHandler)

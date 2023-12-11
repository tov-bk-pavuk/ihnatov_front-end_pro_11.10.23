// Дано 3 блоки
//
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення,
// що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

"use strict";

const data = {
	"civil": {
		"airbus": {
			"model": "Airbus A350",
			"price": "USD 317 million",
			"aircraft flight range": "15,000 km",
			"image url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/F-WWCF_A350_LBG_SIAE_2015_%2818953559366%29.jpg/1280px-F-WWCF_A350_LBG_SIAE_2015_%2818953559366%29.jpg",
		},
		"boeing": {
			"model": "Boeing 787 Dreamliner",
			"price": "USD 248 million",
			"aircraft flight range": "13,530 km",
			"image url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg/1280px-Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg"
		},
		"embraer": {
			"model": "Embraer E190-E2",
			"price": "USD 50 million",
			"aircraft flight range": "5,278 km",
			"image url": "https://www.nzherald.co.nz/resizer/dfixIDR96NcV4UU0EEtTxcUZmAI=/1440x810/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/F4I4DRXEYX6A2JMVGQH7M7J7Z4.jpg"
		}
	},
	"private": {
		"cessna": {
			"model": "Cessna Citation Longitude",
			"price": "USD 26 million",
			"aircraft flight range": "6,482 km",
			"image url": "https://simply-jet-media.sos-ch-gva-2.exo.io/filer_public_thumbnails/filer_public/c7/cf/c7cf275b-1dca-4c01-8ff0-ef4e5a9de040/longitude_notail_64c0371_8989.jpg__1200x675_q85_crop_subsampling-2_upscale.jpg"
		},
		"gulfstream": {
			"model": "Gulfstream G650",
			"price": "USD 65 million",
			"aircraft flight range": "12,964 km",
			"image url": "https://d36vpv0zv8va20.cloudfront.net/images/d_g650ER_a_newsroom_00256.20220926.jpg"
		},
		"bombardier": {
			"model": "Bombardier Global 7500",
			"price": "USD 73 million",
			"aircraft flight range": "14,260 km",
			"image url": "https://images.aircharterservice.com/global/aircraft-guide/private-charter/bombardier-global-7500.jpg"
		}
	},
	"military": {
		"f-35": {
			"model": "Lockheed Martin F-35 Lightning II",
			"price": "USD 94 million",
			"aircraft flight range": "2,220 km",
			"image url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1280px-F-35A_flight_%28cropped%29.jpg"
		},
		"sukhoi": {
			"model": "Sukhoi Su-57",
			"price": "USD 42 million",
			"aircraft flight range": "3,500 km",
			"image url": "https://www.ainonline.com/cdn-cgi/image/width=1200,format=webp,quality=95/https://backend.ainonline.com/sites/default/files/styles/fpsc_1200x630/public/uploads/2017/12/web12-2017-3-pakfa-at-maks-2017.jpg?h=ba0839cf&itok=KrXVfQsg"
		},
		"mig": {
			"model": "Mikoyan MiG-35",
			"price": "USD 50 million",
			"aircraft flight range": "2,400 km",
			"image url": "https://i.insider.com/5c00327b8eb7e800bf0c24d3?width=700&format=jpeg&auto=webp"
		}
	}
}

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

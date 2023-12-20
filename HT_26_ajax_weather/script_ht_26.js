// За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
//
// q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png

// Preparation code for titles
const htTitle = "Home task 26 AJAX Weather"
const title = document.querySelector("title")
const h1 = document.querySelector("h1")
title.innerText = htTitle
h1.innerText = htTitle
// const API = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
// const API = "http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19"
const API = "http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&APPID=5d066958a60d315387d9492393935c19"

// function for filling our forecast table with data from API
const slyFunction = function (idName, content) {
	const mapTable = (idName) => (
		{
			"city": document.querySelector(".city"),
			"temperature": document.querySelector(".temperature"),
			"pressure": document.querySelector(".pressure"),
			"description": document.querySelector(".description"),
			"humidity": document.querySelector(".humidity"),
			"windSpeed": document.querySelector(".windSpeed"),
			"windDirectionDegrees": document.querySelector(".windDirectionDegrees"),
			"iconImg": document.querySelector(".iconImg"),
		}[idName]
	)
	// fill with data certain item of the table
	idName === "iconImg" ? mapTable(idName).src = content : mapTable(idName).innerText = content
}

async function fetchData(number) {
	try {
		const response = await fetch(API);
		return await response.json()
	} catch (error) {
		console.log(`error = ${error.message}`)
	}
}

const weatherTableHandler = function (evt) {
	// resolving the promise and mapping tags with data
	fetchData().then(item => {
			slyFunction("city", item.name)
			slyFunction("temperature", item.main.temp)
			slyFunction("pressure", item.main.pressure)
			slyFunction("description", item.weather[0].description)
			slyFunction("humidity", item.main.humidity)
			slyFunction("windSpeed", item.wind.speed)
			slyFunction("windDirectionDegrees", item.wind.deg)
			slyFunction("iconImg", `http://openweathermap.org/img/w/${item.weather[0].icon}.png`)
		}
	).catch(error => console.log(`error = ${error}`))
}

// going to API after DOM uploading
document.addEventListener('DOMContentLoaded', weatherTableHandler)

// ChatGPT weather forcast based on the API data
import {queryOpenAI} from "../HT_26_ajax_weather/gpt_integration.js";

const GPTHandler = function (evt) {
	if (evt.target.id === "GPTButton") {
		const dataForPrompt = document.querySelector("#weatherTable")

		const ChatGptP = document.querySelector("#chatGPT")
		const prompt = `Data: ${dataForPrompt.innerText}.
		Explain verbosely the weather in Ukrainian if you were a meteorologist.
		Make recommendations about dressing today`
		queryOpenAI(prompt)
			.then(response => {
				ChatGptP.innerText = response.choices[0].message.content
			})
			.catch(error => console.error(error));
	}
}
document.addEventListener("click", GPTHandler)

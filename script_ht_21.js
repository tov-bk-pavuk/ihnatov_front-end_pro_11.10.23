// Створити програму для відображення результатів голосування. З наступними умовами:
//
// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

// переделать в один объект
const smiles = (number) => (
        {
        1: "img/smile_1.jpg",
        2: "img/smile_2.jpg",
        3: "img/smile_3.jpg",
        4: "img/smile_4.jpg",
        5: "img/smile_5.jpg",
}[number]
)

// убрать из глобальной области видимости
const polls = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
}

const body = document.querySelector("body")
const div = document.createElement("div")
div.id = "mainDiv"
div.style.display = "flex"
div.style.marginLeft = "auto"

const length = Object.keys(polls).length;
for (let number = 1; number <= length; number++) {
        const innerDiv = document.createElement("div")
        innerDiv.style.width = "20%"
        innerDiv.style.padding = "10px"
        innerDiv.id = number.toString()
        const img = document.createElement("img")
        const innerParagraph = document.createElement("p")
        img.src = smiles(number)
        innerDiv.appendChild(img)
        innerDiv.appendChild(innerParagraph)
        div.appendChild(innerDiv)
}

body.appendChild(div)
// перейти на класс и айдишник вместо узлов
document.querySelector("#mainDiv").addEventListener("click", function (event) {
        polls[event.target.parentNode.id]++
        event.target.parentNode.children[1].textContent = polls[event.target.parentNode.id]
})

// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const body = document.querySelector("body")
const newTable = document.createElement('table')
let counter_filler = 0
for (let columns = 1; columns <= 10; columns++) {
    const newTr = document.createElement('tr')
    for (let rows = 1; rows <= 10; rows++){
        counter_filler++
        const newTd = document.createElement('td')
        newTd.style.padding = "10px"
        newTd.textContent = counter_filler.toString()
        newTr.appendChild(newTd)
    }
    newTable.appendChild(newTr)
}

body.appendChild(newTable)
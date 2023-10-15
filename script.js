// Home Task 3
const line_1 = prompt("Enter a line", "line_1")
const line_2 = prompt("Enter a line", "line_2")
const line_3 = prompt("Enter a line", "line_3")

alert(line_1 + line_2 + line_3)

let newParagraph = document.createElement("p")
newParagraph.innerText = `You entered the text: ${line_1 + line_2 + line_3}`
document.body.appendChild(newParagraph)
const numbers = "12345"

let numbersParagraph = document.createElement("p")
numbersParagraph.innerText = `Number is: ${numbers}`
document.body.appendChild(numbersParagraph)

let arr = [...numbers]

for (let num of arr) {
    let newParagraph = document.createElement("p")
    newParagraph.innerText = `${num}`
    document.body.appendChild(newParagraph)
}

// Home Task 4

const first_number = prompt("first_number", "0")
const second_number = prompt("second_number", "1")

alert(
    `
    ${first_number} + ${second_number} = ${Number(first_number) + Number(second_number)}
    ${first_number} - ${second_number} = ${first_number - second_number}
    ${first_number} * ${second_number} = ${first_number * second_number}
    ${first_number} / ${second_number} = ${first_number / second_number}
    `
)

// Home Task 5
const hoursAmount = prompt("Enter hours amount", "1")
let seconds = Number(hoursAmount) * 3600
alert(`Seconds = ${seconds}`)
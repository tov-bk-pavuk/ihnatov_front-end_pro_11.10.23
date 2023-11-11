// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = ["", 123, "asd", true, null, [], {}, 11, 13.19, NaN]
const average = function (array) {
    const arr = array.filter((item) => Number(item) === item);
    const sum = arr.reduce((sum, item) => sum += item, 0)
    return sum / arr.length
};

console.log(average(arr))


// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

const doMath = (x, znak, y) => (
    {
        "+": x + y,
        "-": x - y,
        "*": x * y,
        "/": x / y,
        "%": x % y,
        "^": x ** y,
    }[znak]
)
const promptMessage = "Enter X operation Y, separated by spaces (e.g., 5 + 7 for addition)."
const userInput = prompt(promptMessage, "")
const inputArr = userInput !== null ? [...userInput.split(" ")] : alert("Canceled")
if (inputArr === undefined) {location.reload();}
if (!isNaN(Number(inputArr[0])) && !isNaN(Number(inputArr[2])) && "+-*/%^".includes(inputArr[1])) {
    const result = doMath(inputArr[0], inputArr[1], inputArr[2])
    console.log(result)
} else {
    alert("Something wrong with input")
}
console.log("Finish")


// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const inputNumber = function () {
    while (true) {
        const inputNumber = prompt(messageNumberOfArrays)
        if (!isNaN(Number(inputNumber)) && inputNumber !== null  && inputNumber.trim() !== "") {
            return Number(inputNumber)
        } else alert("Try again")
    }
}

const messageNumberOfArrays = "Enter amount of arrays"
const messageArrItems = "Enter arr items separated by space"
let arrAmount = inputNumber()
const baseArr = []
while (arrAmount > 0) {
    let arrItems = prompt(messageArrItems)
    baseArr.push(arrItems.trim().split(" "))
    arrAmount--;
}
baseArr.map(item => {console.log(item)})


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const deleteSubStringFromString = function (mainString, subString) {
    return mainString.filter((item) => !subString.includes(item)).join("")
}
const mainString = prompt("Enter a main string")
const deleteSymbols = prompt("Enter symbols to delete")
badInputMessage = "Bad input"
const userInputMainString = mainString !== null  && mainString.trim() !== "" ? [...mainString] : prompt(badInputMessage)
const userInputDeleteSymbols = deleteSymbols !== null  && deleteSymbols.trim() !== "" ? [...deleteSymbols] : prompt(badInputMessage)
console.log(deleteSubStringFromString(userInputMainString, userInputDeleteSymbols))
// Home task 9
// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.
const minArrLength = 4
const start = 1
const deleteCount = 3
const userInput = prompt("Enter array elements divided by space")
if (userInput === null) {
    alert("You have pushed 'Cancel' button")
} else if (userInput.trim() === "") {
    alert("You have entered an empty string")
} else if (userInput) {
    const arr = [...userInput.split(" ")];
    console.log(`Entered array =  ${arr}`);
    console.log(`Sorted array =  ${arr.sort()}`);
    if (arr.length < minArrLength) {
        alert("You array is less than 4 elements")
    } else {
        arr.splice(start, deleteCount)
        console.log(`Shortened array = ${arr}`)
    }
}

// Home task 10
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
const EVENNESS_DIVISOR = 2
const INITIAL_SUM = 0;
const INITIAL_PRODUCT = 1;
const deleteNumbersCount = 1

// Знайти суму та кількість позитивних елементів.
const positiveNumbers = arr.filter((arr) => arr > 0)
const positiveNumbersSum = positiveNumbers.reduce((sum, arr) => sum + arr, 0)
console.log(`positiveNumbersAmount = ${positiveNumbers.length}`)
console.log(`positiveNumbersSum = ${positiveNumbersSum}`)

// Знайти мінімальний елемент масиву та його порядковий номер.
// arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
const minValue = Math.min(...arr)
const minValueIndex = arr.findIndex((arr) => arr === minValue)
console.log(`minValue = ${minValue}`)
console.log(`minValueIndex = ${minValueIndex}`)

// Знайти максимальний елемент масиву та його порядковий номер.
const maxValue = Math.max(...arr)
const maxValueIndex = arr.findIndex((arr) => arr === maxValue)
console.log(`maxValue = ${maxValue}`)
console.log(`maxValueIndex = ${maxValueIndex}`)

// Визначити кількість негативних елементів.
const negativeNumbers = arr.filter((arr) => arr < 0)
console.log(`negativeNumbersAmount = ${negativeNumbers.length}`)

// Знайти кількість непарних позитивних елементів.
const positiveOddNumbers = positiveNumbers.filter((arr) => arr % EVENNESS_DIVISOR !== 0)
console.log(`positiveOddNumbers = ${positiveOddNumbers.length}`)

// Знайти кількість парних позитивних елементів.
const positiveEvenNumbers = positiveNumbers.filter((arr) => arr % EVENNESS_DIVISOR === 0)
console.log(`positiveEvenNumbersAmount = ${positiveEvenNumbers.length}`)

// Знайти суму парних позитивних елементів.
const positiveEvenNumbersSum = positiveEvenNumbers.reduce((sum, arr) => sum + arr, INITIAL_SUM)
console.log(`positiveEvenNumbersSum = ${positiveEvenNumbersSum}`)

// Знайти суму непарних позитивних елементів.
const positiveOddNumbersSum = positiveOddNumbers.reduce((sum, arr) => sum + arr, INITIAL_SUM)
console.log(`positiveOddNumbersSum = ${positiveOddNumbersSum}`)

// Знайти добуток позитивних елементів.
const productNumbersSum = positiveNumbers.reduce((product, arr) => product * arr, INITIAL_PRODUCT)
console.log(`productNumbersSum = ${productNumbersSum}`)

// Знайти найбільший серед елементів масиву, остальні обнулити.
zeroWithOneMaxValueArray = arr.map((arr) => arr *= 0);
zeroWithOneMaxValueArray.splice(maxValueIndex, deleteNumbersCount, arr[maxValueIndex])
console.log(`zeroWithOneMaxValueArray = ${zeroWithOneMaxValueArray}`)

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
    arr = [...userInput.split(" ")];
    console.log(`Entered array =  ${arr}`);
    console.log(`Sorted array =  ${arr.sort()}`);
    if (arr.length < minArrLength) {
        alert("You array is less than 4 elements")
    } else {
        arr.splice(start, deleteCount)
        console.log(`Shortened array = ${arr}`)
    }
}


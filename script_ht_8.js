// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let wholeString = ""
for (let number = 10; number <= 20; number++ ) {
    wholeString += `${number} `
}
console.log(wholeString)

// Вивести квадрати чисел від 10 до 20.
let counter = 0;
let number = 10;
wholeString = "";
while (counter <= 10) {
    wholeString += `${number * number} `
    number++;
    counter++;
}
console.log(wholeString);

// Вивести таблицю множення на 7.
wholeString = "";
counter = 1
let product = 1
do{
    product = counter * 7;
    counter++;
    wholeString += `${product} `
} while(product <= 63);
console.log(wholeString);

// Знайти суму всіх цілих чисел від 1 до 15.
let start = 1;
let end = 15;
let arr = Array.from({length: end - start}, (_, i) => i + start);
let sum = 0
for (let number of arr) {
    sum += number
}
console.log(sum)

// Знайти добуток усіх цілих чисел від 15 до 35.
counter = 15
product = 1
while (counter <= 35) {
    product *= counter;
    counter++;
}
console.log(product)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
counter = 1
sum = 0
while (counter <= 500) {
    sum += counter;
    counter++;
}
console.log(sum / 500);
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
counter = 30;
sum = 0;
for (counter; counter <= 80; counter += 2) {
    sum += counter;
}
console.log(sum)

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
wholeString = "";
counter = 100;
for (counter; counter <= 200; counter++) {
    if (counter % 3 === 0) {
        wholeString += `${counter} `;
    }
}
console.log(wholeString)

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let divisors = "";
let evenDivisors = "";
sum = 0;
const inputNumber = prompt("Enter a number");
let intNumber = !isNaN(Number(inputNumber)) ? Number(inputNumber) : console.log("It is not a number");
counter = intNumber;
while (counter >= 0) {
    if (intNumber % counter === 0) {
        divisors += `${counter} `;
    }
    if (counter % 2 === 0  && intNumber % counter === 0) {
        evenDivisors += `${counter} `;
        sum += counter
    }
    counter--;
}
console.log(divisors)
console.log(evenDivisors)
console.log(sum)

// Надрукувати повну таблицю множення від 1 до 10.
let tableNumber = 1;
// let multiplier = 1;
for (tableNumber; tableNumber <= 9; tableNumber++) {
    for (let multiplier = 1; multiplier <= 9; multiplier++) {
        console.log(`${tableNumber} * ${multiplier} = ${tableNumber * multiplier}`)
    }
}

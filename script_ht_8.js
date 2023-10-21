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


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
// Надрукувати повну таблицю множення від 1 до 10.
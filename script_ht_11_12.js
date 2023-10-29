// HT 11
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
console.log(`Home task 11\n`)

function removeElement(array, value) {
    const valueIndex = array.indexOf(value);
    valueIndex !== -1 ? array.splice(array[valueIndex - 1], 1) : alert("No such value in the array")
}

const array = [1, 2, 3, 4, 5, 6, 7];
const valueToDelete = 1
console.log(`array before modification = ${array}`)
removeElement(array, valueToDelete)
console.log(`value to delete = ${valueToDelete}`)
console.log(`array AFTER modification = ${array}`)


// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів
// із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i
const length = 118
const characters = "sUejvnkj12947^#%hflmjvslfdnfvjaeajsa"

console.log(`\n\nHome task 12\n`)

key = generateKey(length, characters)

function generateKey(length, characters) {
    length = length <= 0 ? alert("Length can must be above 0") : length
    characters = characters.length === 0 || characters.trim() === "" ? alert("Characters string is empty") : characters
    let result = ""
    let counter = 0
    const min = Math.ceil(0);
    const max = Math.floor(characters.length);
    while (counter < length) {
        const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
        result += characters[randomInt];
        counter++;
    }
    return result
}

console.log(`Length = ${length}`)
console.log(`Characters = ${characters}`)
console.log(`Key = ${key}`)
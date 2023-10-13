const prompt = require('prompt-sync')();

let input = prompt('What is your name? ', '');
console.log(`Hi ${input}! How are you?`);
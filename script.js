// Home task 6
const questionDOB = "Can you please provide your born year?"
const questionPlace = "What is the name of the place you live in?"
const questionSport = "What is your favorite sport?"
const refuseToEnter = "It's a pity that you didn't enter"

let enteredText = prompt(questionDOB, "")
const dateOfBirth = (enteredText === null) ? (alert(`${refuseToEnter} your birth year.`), "") : enteredText

enteredText = prompt(questionPlace, "")
const placeOfResidence = (enteredText === null) ? (alert(`${refuseToEnter} the place you live in.`), "") : enteredText

enteredText = prompt(questionSport, "")
const favoriteSport = (enteredText === null) ? (alert(`${refuseToEnter} your favorite sport.`), "") : enteredText

let person = {
    place: "",
    championName: "",
    sport: favoriteSport,
};

switch (placeOfResidence.toLowerCase()) {
    case "kiev":
        person["place"] = "Ukraine";
        break;
    case "washington":
        person["place"] = "USA";
        break;
    case "london":
        person["place"] = "England";
        break;
    default:
        person["place"] = placeOfResidence;
}

switch (favoriteSport.toLowerCase()) {
    case "box":
        person["championName"] = "Muhammad Ali";
        break;
    case "diving":
        person["championName"] = "Greg Louganis";
        break;
    case "ski":
        person["championName"] = "Ingemar Stenmark";
        break;
    case "":
        person["championName"] = null;
        break;
}

const placeMessage = person.place ? `You live in ${person.place}` : "You don't have a home";
const sportMessage = person.championName ? `Do you want to become ${person.championName}?` :
    person.sport ? `So you like ${person.sport}` : "You don't like sport";
const ageMessage = dateOfBirth < 1913 ? "IT is hard to believe you exist" : dateOfBirth ? `Your age is near ${2023 - dateOfBirth}` : "You don't exist"
person.placeMessage = placeMessage;
person.sportMessage = sportMessage;
person.ageMessage = ageMessage;

alert(
    `${person.ageMessage}\n
    ${person.placeMessage}\n
    ${person.sportMessage}\n
    `)


// Home task 7
let numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr == null:
        console.log("You pressed \"Cancel\"");
        break;
    case numOrStr.trim() === "":
        console.log('Empty String');
        break;
    case numOrStr !== "" && numOrStr.length > 0 && isNaN(Number(numOrStr)):
        console.log(`string = ${numOrStr}`);
        break;
    default:
        console.log(`number = ${numOrStr}`);
        break;
}

// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

const counter = function (){
    let counter = 0
    return function (){
        return counter++
    }
}
const callCounter = counter()
console.log(`callCounter = ${callCounter()}`)
console.log(`callCounter = ${callCounter()}`)
console.log(`callCounter = ${callCounter()}`)

// Experiments
const createPerson = function () {
    const person = {
        name: "Noname",
        age: 0,
        experience: 0,
        addOneExperiencePoint: function (addArg) {this.experience += addArg},
    }

    return function (points=0, name="", age=0) {
        person.name = name ? name : person.name
        person.age = age ? age : person.age
        person.addOneExperiencePoint(points ? points : 0)
        return person
    }
}
const borisBarbaris = createPerson()
borisBarbaris(5, "Boris Barbaris", 7)
console.log(`person's name = ${borisBarbaris().name}`)
console.log(`person's age = ${borisBarbaris().age}`)
console.log(`person's experience = ${borisBarbaris().experience}`)
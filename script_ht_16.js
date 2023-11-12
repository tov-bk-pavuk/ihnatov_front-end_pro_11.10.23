// 1. Створити сутність "Людина".
//
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
debugger

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printRecords = function () {
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
}

// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника):
// марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен
// приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у
// відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу
// Людина для виведення інформації про власника
debugger

function Car(producer, model, productionDate, govNumber) {
    this.producer = producer;
    this.model = model;
    this.productionDate = productionDate;
    this.govNumber = govNumber;

    this.addOwner = function (owner) {
        owner instanceof Person && owner.age >= 18 && owner.age < 110
            ?
            this.owner = owner
            :
            alert(`There is something wrong with ${owner}. Not an instance of Person or too young/old`)
    }
    this.carRecordsWithOwner = function () {
        console.log(`producer: ${this.producer}\n`)
        console.log(`model: ${this.model}\n`)
        console.log(`productionDate: ${this.productionDate}\n`)
        console.log(`govNumber: ${this.govNumber}\n`)
        this.owner.printRecords()
    }
}

debugger
// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
const driver = new Person("Mikola Kefir", 51)
const driversDaughter = new Person("Lesya Insta", 19)
const van = new Car("Mercedes", "Sprinter", 2018, "KA1123EH")
const sedan = new Car("Daewoo", "matiz", 2008, "KA3418EH")
van.addOwner(driver)
sedan.addOwner(driversDaughter)
van.carRecordsWithOwner()
debugger
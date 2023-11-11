debugger

// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

debugger

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Apartment {
    residents = []

    addResident(person) {
        person instanceof Person
            ?
            this.residents.push(person)
            :
            alert(`The ${person} is not an instance of the Person class`)
    }
}
debugger

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість
// перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку
// виводить у консоль відповідне повідомлення.

class Building {
    apartments = []

    constructor(apartmentsLimit) {
        this.apartmentsLimit = apartmentsLimit
    }

    addApartment(apartment) {
        if (
            apartment instanceof Apartment
            &&
            this.apartments.length < this.apartmentsLimit
        ) {
            this.apartments.push(apartment)
        } else {
            alert(
                `The ${this.constructor.name}'s instance capacity has reached its limit. ` +
                `Can't be more than ${this.apartmentsLimit}`
            )
        }
    }
}
debugger

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

const leah = new Person("Leah", "female")
const borya = new Person("Borya", "male")
const trinity = new Apartment()
const double = new Apartment()
const homeForTwo = new Building(2)
trinity.addResident(leah)
trinity.addResident(borya)
homeForTwo.addApartment(trinity)
homeForTwo.addApartment(double)
debugger
homeForTwo.addApartment(double)  // alert about limit exceed
debugger

// Experiments
const a = trinity.toString()
const b = Apartment.toString()
debugger
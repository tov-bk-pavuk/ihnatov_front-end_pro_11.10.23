class _Attendance {
    _attendanceRecords = []

    present() {
        this._attendanceRecords.length < 25
            ?
            this._attendanceRecords.push(true)
            :
            alert("Attendance Records list is full")
    }

    absent() {
        this._attendanceRecords.length < 25
            ?
            this._attendanceRecords.push(false)
            :
            alert("Attendance Records list is full")
    }

    get attendance() {
        let ones = this._attendanceRecords.map((item)  => item === true ? 1 : 0)
        return ones.reduce((sum, item) => sum += item, 0) / ones.length
    }
    set _setFakeAttendance(records) {
        this._attendanceRecords = records
    }
}

class Student {
    _date = new Date().getFullYear()
    // _marks = []  // we should implement setter like for attendance
    _attendance = new _Attendance()

    constructor(firstName, lastName, yearOfBirth, marks) {
        this._firstName = firstName
        this._lastName = lastName
        this._yearOfBirth = new Date(yearOfBirth, 6, 15)
        this._marks = marks // we shouldn't have this field in constructor
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }
    get age() {
        return `Approximately = ${this._date - this._yearOfBirth.getFullYear()} years`
    }

    get GPA() {
        return this._marks.reduce((sum, item) => sum += item, 0) / this._marks.length
    }

    get attendance(){
        return this._attendance.attendance
    }
    present() {
        this._attendance.present()
    }
    absent() {
        this._attendance.absent()
    }
    get summary() {
        switch (true) {
            case this.GPA > 90 && this.attendance > 0.9:
                return "Молодець!";
            case this.GPA < 90 && this.attendance < 0.9:
                return "Редиска!";
            case this.GPA < 90 || this.attendance < 0.9:
                return "Добре, але можна краще";
        }
    }
}

testData = {
    marks90: [89, 90, 91, 100, 89, 88, 87],
    marks80: [80, 90, 81, 11, 89, 88, 87],
    attendanceLow: [true, false, true, true, false, false, false, true],
    attendanceHigh: [true, true, true, true, true, true, true, true],
}
debugger
const vasya = new Student("Vasya", "Batareykin", 2000, testData["marks90"])
const petya = new Student("Petya", "Fortochkin", 2003, testData["marks80"])
const borya = new Student("Borya", "Kompot", 1998, testData["marks90"])
const zina = new Student("Zinaida", "Borch", 2005, testData["marks80"])
debugger
vasya._attendance._setFakeAttendance = testData["attendanceHigh"]
petya._attendance._setFakeAttendance = testData["attendanceHigh"]
borya._attendance._setFakeAttendance = testData["attendanceLow"]
zina._attendance._setFakeAttendance = testData["attendanceLow"]
debugger
vasya.present()
vasya.absent()
vasya.GPA
vasya.age
vasya.present()
debugger
zina.present()
debugger
vasya.summary
petya.summary
borya.summary
zina.summary
debugger
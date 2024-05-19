function Student (name, surname, birthDate, grades =[]){
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getFullStudentName = function () {
    return `${this.name} ${this.surname}`;
}

Student.prototype.getAge = function () {
    let totalYear = new Date().getFullYear();
    return totalYear - this.birthDate.getFullYear()
}

Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
    return this;
};
Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    let average = this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    return average;
}

Student.prototype._fillAttendance = function (value) {
    const nextIndex = this.attendance.indexOf(null);
    if (nextIndex !== -1) {
        this.attendance[nextIndex] = value;
    }
    return this;
}

Student.prototype.present = function () {
    this._fillAttendance(true);
    return this;
}

Student.prototype.absent = function () {
    this._fillAttendance(false);
    return this;
}

Student.prototype.getAverageAttendance = function () {
    const visited = this.attendance.filter(day => day !== null);
    return visited.length/this.attendance.length;
}

Student.prototype.summaryPerfomance = function () {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageAttendance > 0.9 && averageGrade > 90){
        return "Well done!"
    } else if (averageAttendance < 0.9 && averageGrade > 90) {
        return "Good! But you can better!"
    } else return "Radish!!! Fix it!"
}

console.log ('Function Student');

const student1 = new Student('John', 'Dohl', new Date(1991, 0, 1), [100, 60, 50]);
student1.present().absent().present().present().present().present().absent();
student1.addGrade(40).addGrade(100).addGrade(100);
console.log(student1);
console.log(student1.getFullStudentName() +' '+ student1.getAge() +' '+ student1.summaryPerfomance());

const student2 = new Student('Петро', 'Петров', new Date(1990, 11, 1), [100, 100, 100]);
student2.present().present().present().present().present().present();
student2.addGrade(100).addGrade(100).addGrade(100);
console.log(student2);
console.log(student2.getFullStudentName() +' '+ student2.getAge() +' '+ student2.summaryPerfomance());

const student3 = new Student('Alex', 'Cool', new Date(1995, 4, 5), [100, 100, 100, 100]);
student3.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
student3.addGrade(100).addGrade(100).addGrade(100);
console.log(student3);
console.log(student3.getFullStudentName() +' '+ student3.getAge() +' '+ student3.summaryPerfomance());

/*******Classes********/
class StudentUnit {
    constructor (name, surname, birthDate, grades =[]){
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }
    getFullStudentName() {
        return `${this.name} ${this.surname}`;
    }

    getAge() {
        let totalYear = new Date().getFullYear();
        return totalYear - this.birthDate.getFullYear()
    }

    addGrade(grade) {
        this.grades.push(grade);
        return this;
    };
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        let average = this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
        return average;
    }

    _fillAttendance(value) {
        const nextIndex = this.attendance.indexOf(null);
        if (nextIndex !== -1) {
            this.attendance[nextIndex] = value;
        }
        return this;
    }

    present() {
        this._fillAttendance(true);
        return this;
    }

    absent() {
        this._fillAttendance(false);
        return this;
    }

    getAverageAttendance() {
        const visited = this.attendance.filter(day => day !== null);
        return visited.length/this.attendance.length;
    }

    summaryPerfomance() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageAttendance > 0.9 && averageGrade > 90){
            return "Well done!"
        } else if (averageAttendance < 0.9 && averageGrade > 90) {
            return "Good! But you can better!"
        } else return "Radish!!! Fix it!"
    }
}

console.log ('Class Student');

const student4 = new StudentUnit('John1', 'Dohl1', new Date(1991, 0, 1), [100, 60, 50]);
student4.present().absent().present().present().present().present().absent().absent();
student4.addGrade(40).addGrade(100).addGrade(100);
console.log(student4);
console.log(student4.getFullStudentName() +' '+ student4.getAge() +' '+ student4.summaryPerfomance());

const student5 = new StudentUnit('Петро', 'Петров', new Date(1990, 11, 1), [100, 100, 100]);
student5.present().present().present().present().present().present();
student5.addGrade(100).addGrade(100).addGrade(100);
console.log(student5);
console.log(student5.getFullStudentName() +' '+ student5.getAge() +' '+ student5.summaryPerfomance());

const student6 = new StudentUnit('Alex', 'Cool', new Date(1995, 4, 5), [100, 100, 100]);
student6.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present();
student6.addGrade(100).addGrade(100).addGrade(100);
console.log(student6);
console.log(student6.getFullStudentName() +' '+ student6.getAge() +' '+ student6.summaryPerfomance());
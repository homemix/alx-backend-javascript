function printTeacher(firstName, lastName) {
    // a function to print teacher
    // with arguments firstName and lastName
    return "".concat(firstName.slice(0, 1), ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    return StudentClass;
}());
// testing and examples
// test director interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// test teacher interface
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
// test print teacher function
console.log(printTeacher('John', 'Doe'));
// test class student
var student1 = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework());

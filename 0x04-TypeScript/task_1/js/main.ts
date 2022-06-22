
interface Teacher{
    // an interface for teacher
    firstName:string
    fullTimeEmployee:boolean
    lastName:string
    location:string
    contract?:boolean
}


interface Directors extends Teacher{
    // an interface for director extending teacher
    numberOfReports:number;
}

function printTeacher(firstName:string, lastName:string){
    // a function to print teacher
// with arguments firstName and lastName
    return`${firstName.slice(0,1)}. ${lastName}`
}

interface printTeacherFunction{
    // an interface for the function print teacher
    (firstName:string, lastName:string):string
}

interface Student{
    // an interface for student class
    firstName:string
    lastName:string
}
class StudentClass implements Student{
// a class for student class
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework():string{
        return `Currently working`
    }
}


// testing and examples
// test director interface
const director1:Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
console.log(director1);

// test teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

// test print teacher function
console.log(printTeacher('John','Doe'))

// test class student
const student1: StudentClass = new StudentClass('John','Doe');
console.log(student1.workOnHomework());

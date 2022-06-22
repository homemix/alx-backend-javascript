interface Teacher{
    firstName:string
    fullTimeEmployee:boolean
    lastName:string
    location:string
    contract?:boolean
}

interface Directors extends Teacher{
    numberOfReports:number;
}

const director1:Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
console.log(director1);

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

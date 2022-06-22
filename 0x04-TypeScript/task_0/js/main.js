let student1;
let student2;
student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
student2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};
let studentsList = [student1, student2];
console.log(studentsList);
let table = "<table>";
for (let key in studentsList) {
    console.log(studentsList[key]);
    table += `<tr>
<td>${key}</td>
<td>${studentsList[key]}</td>
</tr>`;
}
table += "</table>";
// document.getElementById("demoB").innerHTML = table;
console.log(table);

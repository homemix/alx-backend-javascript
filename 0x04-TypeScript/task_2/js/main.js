"use strict";
exports.__esModule = true;
exports.createEmployee = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    // a class for director
    Director.prototype.getCoffeeBreak = function () {
        return "";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    // a class for teacher
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
exports.createEmployee = createEmployee;
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

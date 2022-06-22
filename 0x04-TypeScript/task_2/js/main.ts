interface DirectorInterface {
    // an interface for director
    workFromHome(): string

    getCoffeeBreak(): string

    workDirectorTasks(): string
}

interface TeacherInterface {
    // an interface for teacher
    workFromHome(): string

    getCoffeeBreak(): string

    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    // a class for director
    getCoffeeBreak(): string {
        return "";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    workFromHome(): string {
        return "Working from home";
    }

    getToWork(): string {
        return "Getting a coffee break";
    }
}

class Teacher implements TeacherInterface {
    // a class for teacher

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workFromHome(): string {
        return "Cannot work from home";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: any) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

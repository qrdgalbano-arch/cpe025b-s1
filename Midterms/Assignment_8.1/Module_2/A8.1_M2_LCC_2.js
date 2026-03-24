function sendEmail(from, to, message) {}

class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    // Add course and level to user
    addCourse(course, level) {
        this.courses.push({ course, level });
    }

    // Remove course from user
    removeCourse(course) {
        this.courses = this.courses.filter(c => c.course !== course);
    }

    // Edit level of existing course
    editCourse(course, level) {
        let c = this.courses.find(c => c.course === course);
        if (c) {
            c.level = level;
        } else {
            this.courses.push({ course, level });
        }
    }

    // Simulate sending a message and store in cache
    sendMessage(from, message) {
        this.messages.push({ from: from.email, to: this.email, message });
        sendEmail(from, this, message);
    }

    // Display all messages sent to this user
    showMessagesHistory() {
        for (let msg of this.messages) {
            console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
        }
    }
}

class ExtendedUser extends User {
    // Getter returns full name as combined string
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    // Setter splits combined string into name and surname
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
}

class Teacher extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'teacher' });
    }
}

class Student extends ExtendedUser {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'student' });
    }
}

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses
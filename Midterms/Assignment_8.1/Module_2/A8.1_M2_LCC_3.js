// --- Dependencies from prior challenges ---
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
        if (c) { c.level = level; } else { this.courses.push({ course, level }); }
    }

    // Simulate sending a message and store in cache
    sendMessage(from, message) {
        this.messages.push({ from: from.email, to: this.email, message });
        sendEmail(from, this, message);
    }

    // Display all messages sent to this user
    showMessagesHistory() {
        for (let msg of this.messages) console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
    }
}

// --- Challenge #3: ExtendedUser rewritten with static match ---
class ExtendedUser extends User {
    // Getter returns full name as combined string
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    // Setter splits combined string into name and surname
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }

    // Static method to match teacher and student by courses
    static match(teacher, student, course) {
        if (course) {
            let tc = teacher.courses.find(c => c.course === course);
            let sc = student.courses.find(c => c.course === course);
            if (tc && sc && tc.level >= sc.level) return { course: tc.course, level: sc.level };
            return undefined;
        }
        let matches = [];
        for (let sc of student.courses) {
            let tc = teacher.courses.find(c => c.course === sc.course);
            if (tc && tc.level >= sc.level) matches.push({ course: sc.course, level: sc.level });
        }
        return matches;
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
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}
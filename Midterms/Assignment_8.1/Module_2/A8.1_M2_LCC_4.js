// --- Dependencies from prior challenges ---
function sendEmail(from, to, message) {}

class User {
    #name;
    #surname;
    #email;

    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }

    get name() { return this.#name; }
    set name(value) {
        // First letter uppercase, rest letters only
        if (!/^[A-Z][a-zA-Z]+$/.test(value)) throw new Error(`Invalid name: ${value}`);
        this.#name = value;
    }

    get surname() { return this.#surname; }
    set surname(value) {
        // First letter uppercase, rest letters only
        if (!/^[A-Z][a-zA-Z]+$/.test(value)) throw new Error(`Invalid surname: ${value}`);
        this.#surname = value;
    }

    get email() { return this.#email; }
    set email(value) {
        // Letters and dots only, valid email format
        if (!/^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(value)) throw new Error(`Invalid email: ${value}`);
        this.#email = value;
    }

    addCourse(course, level) { this.courses.push({ course, level }); }
    removeCourse(course) { this.courses = this.courses.filter(c => c.course !== course); }
    editCourse(course, level) {
        let c = this.courses.find(c => c.course === course);
        if (c) { c.level = level; } else { this.courses.push({ course, level }); }
    }
    sendMessage(from, message) {
        this.messages.push({ from: from.email, to: this.email, message });
        sendEmail(from, this, message);
    }
    showMessagesHistory() {
        for (let msg of this.messages) console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
    }
}

class ExtendedUser extends User {
    // Getter returns full name as combined string
    get fullName() { return `${this.name} ${this.surname}`; }

    // Setter splits combined string into name and surname
    set fullName(value) { [this.name, this.surname] = value.split(' '); }

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

// --- Challenge #4 ---
class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    // Add new student to list
    addStudent(name, surname, email) {
        this.students.push(new Student({ name, surname, email }));
    }

    // Add new teacher to list
    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({ name, surname, email }));
    }

    // Return student by name and surname
    getStudentByName(name, surname) {
        return this.students.find(s => s.name === name && s.surname === surname);
    }

    // Return teacher by name and surname
    getTeacherByName(name, surname) {
        return this.teachers.find(t => t.name === name && t.surname === surname);
    }

    // Return teachers able to tutor the given student
    getTeacherForStudent(student) {
        return this.teachers.filter(t => ExtendedUser.match(t, student).length > 0);
    }

    // Return students the given teacher is able to tutor
    getStudentsForTeacher(teacher) {
        return this.students.filter(s => ExtendedUser.match(teacher, s).length > 0);
    }
}

let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'kestes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...
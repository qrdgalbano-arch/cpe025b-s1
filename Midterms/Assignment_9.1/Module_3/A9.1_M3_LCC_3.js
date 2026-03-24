class User {
    // Regex patterns for validation
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
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
}

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
} catch(err) {
    console.log(err.message);
}


class Users {
    #map = new Map();

    // Add user to collection if email not already present
    add(name, surname, email) {
        if (!this.#map.has(email)) {
            this.#map.set(email, new User(name, surname, email));
        }
    }

    // Delete user by email
    delete(email) {
        this.#map.delete(email);
    }

    // Get single user by email
    get(email) {
        return this.#map.get(email);
    }

    // Get all users sorted by given field
    getAll(field) {
        return [...this.#map.values()].sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));
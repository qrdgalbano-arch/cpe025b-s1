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

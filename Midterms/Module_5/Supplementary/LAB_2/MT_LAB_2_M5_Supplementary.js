let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let sortContacts = function(contacts, field) {
    if (!(contacts instanceof Array)) {
        console.log("Error: first argument must be an array.");
        return;
    }
    if (field !== "name" && field !== "phone" && field !== "email") {
        console.log("Error: sort field must be 'name', 'phone', or 'email'.");
        return;
    }
    contacts.sort((a, b) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
    });
    console.log(`Contacts sorted by ${field}.`);
}

// Simulated user menu
let handleMenu = function(action, contacts) {
    switch (action) {
        case "show_all":
            console.log("=== All Contacts ===");
            showAllContacts(contacts);
            break;

        case "show_one":
            let index = 1; // simulated user input
            console.log(`=== Show Contact at Index ${index} ===`);
            showContact(contacts, index);
            break;

        case "add":
            console.log("=== Adding New Contact ===");
            addNewContact(contacts, "Diana Prince", "0712 345 6789", "diana@example.com");
            console.log("New contact added.");
            break;

        case "sort":
            let sortField = "name"; // simulated user input: "name", "phone", or "email"
            console.log(`=== Sorting by "${sortField}" ===`);
            sortContacts(contacts, sortField);
            showAllContacts(contacts);
            break;

        default:
            console.log("Unknown action.");
    }
}

// --- Test runs ---

console.log("=== Initial Contacts ===");
showAllContacts(contacts);

console.log("\n--- Menu: sort by name ---");
handleMenu("sort", contacts);

console.log("\n--- Menu: sort by email ---");
sortContacts(contacts, "email");
showAllContacts(contacts);

console.log("\n--- Menu: sort by phone ---");
sortContacts(contacts, "phone");
showAllContacts(contacts);

console.log("\n--- Menu: add new contact ---");
handleMenu("add", contacts);

console.log("\n--- Menu: show all (after addition) ---");
handleMenu("show_all", contacts);

console.log("\n--- Error Handling: invalid field ---");
sortContacts(contacts, "age");

console.log("\n--- Error Handling: invalid array ---");
sortContacts("not an array", "name");
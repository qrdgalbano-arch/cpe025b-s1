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

function showContact(contacts, index) {
    if (!(contacts instanceof Array)) {
        console.log("Error: first argument must be an array.");
        return;
    }
    if (index < 0 || index >= contacts.length) {
        console.log("Error: index out of range.");
        return;
    }
    let contact = contacts[index];
    console.log(`Contact ${index + 1}:`);
    console.log(`  Name:  ${contact.name}`);
    console.log(`  Phone: ${contact.phone}`);
    console.log(`  Email: ${contact.email}`);
}

function showAllContacts(contacts) {
    if (!(contacts instanceof Array)) {
        console.log("Error: argument must be an array.");
        return;
    }
    for (let i = 0; i < contacts.length; i++) {
        showContact(contacts, i);
    }
}

function addNewContact(contacts, name, phone, email) {
    if (!(contacts instanceof Array)) {
        console.log("Error: first argument must be an array.");
        return;
    }
    if (!name || !phone || !email) {
        console.log("Error: name, phone, and email must all have a value.");
        return;
    }
    contacts.push({ name, phone, email });
    console.log(`Contact "${name}" has been added successfully.`);
}

// --- Test runs ---

console.log("=== All Contacts (Initial) ===");
showAllContacts(contacts);

console.log("\n=== Show Contact at Index 1 ===");
showContact(contacts, 1);

console.log("\n=== Adding New Contact ===");
addNewContact(contacts, "Diana Prince", "0712 345 6789", "diana@example.com");

console.log("\n=== All Contacts (After Addition) ===");
showAllContacts(contacts);

console.log("\n=== Error Handling Tests ===");
showContact("not an array", 0);
showContact(contacts, 10);
addNewContact(contacts, "", "0712 345 6789", "test@example.com");
addNewContact("not an array", "John", "123", "john@example.com");
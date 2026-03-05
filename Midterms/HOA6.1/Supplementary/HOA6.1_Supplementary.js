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

// write your code here
let choice;

while (true) {
    choice = prompt("Choose an action: (show / all / add / search / quit)");

    if (choice === null || choice === "") {
        continue;
    }

    if (choice === "show") {
        let index = prompt("Enter the index number of the contact:");
        index = parseInt(index);

        if (isNaN(index) || index < 0 || index >= contacts.length) {
            console.log("Error: Invalid index. Please enter a valid contact number.");
        } else {
            console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
        }

    } else if (choice === "all") {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }

    } else if (choice === "add") {
        let newName = prompt("Enter contact name:");
        let newPhone = prompt("Enter contact phone:");
        let newEmail = prompt("Enter contact email:");

        if (newName && newPhone && newEmail) {
            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });
            console.log("New contact added successfully.");
        } else {
            console.log("Contact not added. All fields are required.");
        }

    } else if (choice === "search") {
        let searchName = prompt("Enter the name to search:");
        let found = false;

        for (let contact of contacts) {
            if (contact.name === searchName) {
                console.log(`Phone: ${contact.phone} / Email: ${contact.email}`);
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Contact not found.");
        }

    } else if (choice === "quit") {
        break;

    } else {
        console.log("Invalid option. Please choose a valid action.");
    }
}
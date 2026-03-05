let contacts = [{
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true
}, {
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false
}, {
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true
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
            console.log(`${contacts[index].name} / ${contacts[index].role} / ${contacts[index].skills[0]}`);
        }

    } else if (choice === "all") {
        for (let contact of contacts) {
            console.log(contact.name);
        }

    } else if (choice === "add") {
        let newName = prompt("Enter contact name:");
        let newRole = prompt("Enter contact role:");
        let newSkill = prompt("Enter contact skill:");

        if (newName && newRole && newSkill) {
            contacts.push({
                name: newName,
                role: newRole,
                skills: [newSkill],
                availability: true
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
                let status = contact.availability ? "Available" : "Busy";
                console.log(`Role: ${contact.role} / Status: ${status}`);
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Contact not found.");
        }

    } else if (choice === "quit") {
        alert("Goodbye!");
        break;

    } else {
        console.log("Invalid option. Please choose a valid action.");
    }
}
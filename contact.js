const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contact Management System");
  console.log("-------------------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a Contact");
  console.log("3. View Contacts");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}
function addContact() {
  const name = prompt("Name: ");
  const email = prompt("Email: ");
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
  console.log("Added!");
}

let contacts = [];

function deleteContact() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log((i + 1).toString() + ":", contact.name);
  }
  const number = parseInt(prompt("Enter ID: "));
  if (isNaN(number) || number > contacts.length) {
    console.log("invaid.");
    return;
  }
  contacts.splice(number - 1, 1);
  console.log("Removed");
}

function listContact() {
  for (let contact of contacts) {
    console.log("#############");
    console.log("Name: ", contact.name);
    console.log("Email: ", contact.email);
  }
}

function searchContact() {
  const searchString = prompt("Search: ").toLowerCase();
  const result = [];

  for (let contact of contacts) {
    if (contact.name.includes(searchString)) result.push(contact);
  }
}

printInfo();
let keepGoing = true;
while (true) {
  const number = prompt("Enter an operation (1-5)");
  console.log();
  switch (number) {
    case "1":
      addContact();
      break;
    case "2":
      deleteContact();
      break;
    case "3":
      listContact();
      break;
    case "4":
      searchContact();
      break;
    case "5":
      keepGoing = false;
      break;

    default:
      console.log("unknown");
      break;
  }
}

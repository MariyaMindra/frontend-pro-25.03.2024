const contacts = [
    {
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
    {
        name: "Max",
        phone: "+3801111111",
        email: "example1@email.com",
    },
];

function Contact(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
    // if (contacts instanceof Book){
    //     this.contacts = contacts.contacts.slice();
    // } else if (Array.isArray(contacts)){
    //     this.contacts = contacts.find(contact => contact instanceof Contact);
    // }
}

Book.prototype.findContact = function(searchName)  {
    return this.contacts.find(contact => contact.name === searchName);
};

Book.prototype.add = function (contact) {
        this.contacts.push(contact);
};

const mappedContacts = contacts.map(contact => {
    return new Contact(contact.name, contact.phone, contact.email);
});

const myBook = new Book(mappedContacts);

const newContact = new Contact("Maria", "38063555555", "mariia@gmail.com")
myBook.add(newContact);

const findContact = myBook.findContact('Maria');

console.log(findContact);
console.log(myBook);

// const exampleBook = new Book(myBook);
// console.log ('check:' + exampleBook);
//
// const arrayBook = new Book( [
//     {
//     name: "Jra",
//     phone: "+333333",
//     email: "some1@email.com",
//     },
//     {some: 11, key2: 333}
// ]);
//
// console.log ('check array:' + arrayBook);

















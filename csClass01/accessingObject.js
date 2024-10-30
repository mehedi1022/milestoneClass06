const Person = {
    name: 'abdul',
    age: 23,
    contact: {
        phone: '34345',
        email: "abdul@gmail.com"
    },
    education:{
        schoolName: "anda high school",
        subjects:[
            {name: 'bangla', mark: 45},
            {name: 'english', mark: 64},
            {name: 'math', mark: 74}
        ]
    }
}

// console.log(Person.contact.email);
console.log(Person.education.subjects[1].name);
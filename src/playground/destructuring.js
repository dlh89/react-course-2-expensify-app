//
// Object destructuring
//

// const person = {
//   name: 'David',
//   age: 28,
//   location: {
//     city: 'Eastbourne',
//     temperature: 5
//   }
// }

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temperature: temp} = person.location
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [drink, , medium, ] = item;
console.log(`A medium ${drink} costs ${medium}`);
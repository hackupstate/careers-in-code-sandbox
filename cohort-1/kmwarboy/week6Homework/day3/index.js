// Day 3 Homework - Lesson 7

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good!', id: 823423 },
    { text: 'You are the best!', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
]

//Array.prototype.some() // is at least one person 19?

// const isAdult = people.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// })
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );
// console.log(isAdult);

// Array.prototype.every() // is everyone 19?

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19 );
// console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for.
// Find the comment with the ID of 823423

// const comment = comments.find(function(comment) {
//     if (comment.id === 823423) {
//         return true;
//     }
// })

// const comment = comments.find(comment => comment.id === 823423);

// console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newComments);

// Day 3 Homework - Lesson 14

// Start with strings, numbers and booleans

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'Wes';
// let name2 = name;
// console.log(name, name2);
// name = 'Wesley';
// console.log(name, name2);

// Let's say we have an array -
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;

console.log(players, team);
// You might think we can do soemthing like this:

team[3] = 'Lux';
console.log(team);
console.log(players);

// However what happens when we update that array?


// Now here is the problem!

// Oh no -  we have edited the original array too!

// Why? It's because that is ana rray reference, not an array copy. They both point to the same array!


// So, how do we fix this? We take a copy instead!
const team2 = players.slice();


console.log(players.slice(2, 3));

// One day

// Or create a new array and concat the old one in
const team3 = [].concat(players);

// Or use the new ES6 spread
const team4 = [...players];
team4[3] = 'heee hawww';
console.log(team4);

const team5 = Array.from(players);

// Now when we update it, the original one isn't changed


// The same thing goes for objects, let's say we have a person object
// With objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// And think we make a copy
// const captain = person;
// captain.number = 99;


// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
console.log(person);

// We will hopefully soon see the object ...spread
const cap3 = {...person};


const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developers'
    }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
dev.name = 'wesley';
console.log(dev);

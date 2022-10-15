//Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let name = 'Eric'
console.log('Hey '+ name + ', would you like to learn some Python today?')

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
name = 'Mohsin zahid'
console.log(name.toLowerCase(), name.toUpperCase(), toTitleCase(name) )

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:

console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new"`)

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

let quote = 'A person who never made a mistake never tried anything new'
let famous_person = 'Albert Einstein'
let message = `${famous_person} once said, "${quote}"`
console.log(message)

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the
// name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces.

name = '\t\t\nMohsin zahid\n\n\t'
console.log(name)
console.log(name.trim())

//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the
// number 8. Be sure to enclose your operations in print statements to see the results.
// This program will do some arithmetic calculations
console.log(2+6)
console.log(2*4)
console.log(16/2)
console.log(10-2)

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// This program will print my favourite number
const myFavouriteNumber = 69;
console.log(`My favourite number is: ${myFavouriteNumber}`);

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const names = ["ahsan", "house greg", "walter white", "lothbrok", "babar azam"];
names.forEach((each) => console.log(each));

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
names.forEach((each) => console.log(`How are you? ${each}`));

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const transports = [
  "Honda 70",
  "Honda 125",
  "Yamaha YBR",
  "Mercedes",
  "Sportage",
];
transports.forEach((each) => console.log(`I would like to own a ${each}`));

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = [
  "ahsan",
  "house greg",
  "walter white",
  "lothbrok",
  "babar azam",
];
guests.forEach((each) =>
  console.log(`I would like to invite ${each} for dinner`)
);
console.log("ahsan won't be able to make it to dinner");

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set
// of invitations. You’ll have to think of someone else to invite.
guests[0] = "haris rauf";
guests.forEach((each) =>
  console.log(`I would like to invite ${each} for dinner`)
);
console.log("We found a bigger table");

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guests.unshift("dan abramov");
guests.splice(Math.floor(guests.length / 2), 0, "linus torvald");
guests.push("rizwan");
guests.forEach((each) =>
  console.log(`I would like to invite ${each} for dinner`)
);

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you
// have space for only two guests.
console.log('you can invite only two people for dinner')
while (guests.length > 2) {
  let name = guests.pop()
  console.log(`Hey ${name}, I'm sorry, I can't invite you to dinner`)
}
guests.forEach((each) =>
    console.log(`Hey ${each}, You are still invited for dinner`)
);
while (guests.length > 0) {
  guests.pop()
}
guests.forEach((each) =>
    console.log(`${each}`)
);

//Seeing the World: Think of at least five places in the world you’d like to visit.
const places = [
    'London',
    'Paris',
    'Melbourne',
    'Copenhagen',
    'NewYork',
]
places.forEach((each) =>
    console.log(`${each}`)
);
console.log('\narranged Places\n')
let arrangedPlaces = JSON.parse(JSON.stringify(places))
arrangedPlaces.sort()
arrangedPlaces.forEach((each) =>
    console.log(`${each}`)
);
console.log('\norignal Places\n')
places.forEach((each) =>
    console.log(`${each}`)
);

console.log('\nReversed Places\n')
let reversedPlaces = JSON.parse(JSON.stringify(places))
reversedPlaces.reverse()

reversedPlaces.forEach((each) =>
    console.log(`${each}`)
);
console.log('\norignal Places\n')
places.forEach((each) =>
    console.log(`${each}`)
);

console.log('\nReversed Places Again\n')
reversedPlaces.reverse()
reversedPlaces.forEach((each) =>
    console.log(`${each}`)
);

console.log('\narranged Places\n')
reversedPlaces.sort()
reversedPlaces.forEach((each) =>
    console.log(`${each}`)
);

console.log('\nSort Reversed Places Again\n')
reversedPlaces.reverse()
reversedPlaces.forEach((each) =>
    console.log(`${each}`)
);

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
console.log('number of people invited to dinner', guests.length)

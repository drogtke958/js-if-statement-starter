// Keily Drogt
// May 13 2024
// JS IF Statements

// Open the instructions.md file in VS Code (click
// the icon in the top right corner of your screen 
// with the magnifying glass on it to view the markdown (.md) file)

// Add the code for your three demos here

//Demo #1
const firstName = 'Elisabeth';
console.log(`Hello, ${firstName}!`)
if (firstName.length > 7) {
    console.log('Wow, you have a REALLY long name!')
}

//Demo #2
const fName = 'Nicholas';
console.log(`Hello\, ${fName}!`)
if (fName.length > 7) {
    console.log('Wow, you have a REALLY long name!')
} else {
    console.log(`Your name isn't very long, ${fName}, is it?`)
}

//Demo #3
const age = parseInt(prompt('Enter your age: (Example: 16'));

if (age < 3) {
    const message = "You're still just a  baby!";
} else if (age < 18) {
    const message = "You're not yet an adult.";
} else if (age < 100){
    const message = "Almost at the century mark!";
} else {
    const message = "What an unusual age!";
}

// Comment out the previous demo code before running
// your current demo code
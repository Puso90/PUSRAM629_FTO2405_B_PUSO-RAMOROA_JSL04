// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
//Didn't really know how to use undefined but figured it out - it returns undefined all the time if I use this: !==.
if (userPreference === '') {
    userPreference = 'Regular';
} else if (userPreference == undefined) {
    userPreference = 'undefined';
};

console.log(`This user prefers a ${userPreference} drink`);





// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 7; // Any number of cans

let stockLeftMessage = (cansLeft < 5) ? `Time to restock!` : `We're stocked!`;
console.log(stockLeftMessage);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 150; // Current heart rate in bpm

let heartRateMessage = (heartRate < 100) ? `Boost needed!` : `Energy levels are high!`;
console.log(heartRateMessage);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 8; // Current temperature in °C

let timeMessage = (currentTemp <= 5 && currentTemp > 5) ? `Chilled to perfection!` : `Needs a cooler!`;
console.log(timeMessage);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

 let hourMessage = (currentHour > 7 && currentHour < 24 ) ? `Unleash the beast!` : `Better stick to water.`;
 console.log(hourMessage);

// Shorthand ternary operator
/*
let age = 20;
let message = (age >= 18) ? 'You are an adult.' : 'You are a minor.';
console.log(message); */


//---------------------------------------------------------------------------------------------------------------
// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions

/*REFERENCE TO SOLUTION: 
1.  https://lokesh-prajapati.medium.com/javascript-shorthand-techniques-ultimate-cheat-sheet-415d9abbe47c
2.  https://builtin.com/software-engineering-perspectives/ternary-operator-js#:~:text=What%20Is%20The%20Ternary%20(Conditional,value%20to%20return%20if%20false.
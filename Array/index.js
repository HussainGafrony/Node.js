// Array  – Some Built-in Functions

let fruits = ['apple', 'orange', 'banana', 'kiwi', 'pineapple'];

// Push: Adds an element to the end of the array
// fruits.push('strawberry');
// console.log("After push:", fruits);

// Pop: Removes the last element from the array
// let removedFruit = fruits.pop();
// console.log("After pop:", fruits);
// console.log("Removed fruit:", removedFruit);

// Join: Joins all elements of an array into a string
// let fruitsString = fruits.join(', ');
// console.log("Joined string:", fruitsString);

// Remove 1 element starting from index 1
// let removedElements = fruits.splice(1, 1);
// console.log("After splice:", fruits);
// console.log("Removed elements:", removedElements);

// Add elements at Items without removing any
// let Items = ["mango", "pear", "cherry"];
// fruits.splice(2, 0, ...Items);
// console.log("After splice (adding):", fruits);

// Replace 2 elements starting from index 0
// fruits.splice(0, 2, "mango", "pear");
// console.log("After splice (replacing):", fruits);

// Concatenate arrays using concat method
// let fruits2 = ["grape", "kiwi", "mango"];
// let num = Array.from({ length: fruits.length + fruits2.length }, (_, i) => i + 2);
// let combinedFruits = fruits.concat(fruits2, num);
// console.log("Array 1:", fruits);
// console.log("Array 2:", fruits2);
// console.log("num:", num);
// console.log("Combined Array:", combinedFruits);


// Using indexOf to find the index of an element
// let newValue = 'cherry';
// let indexOfBanana = fruits.indexOf("banana");
// let indexOfCherry = fruits.indexOf(newValue);
// console.log("Index of 'banana':", indexOfBanana);
// console.log("Index of 'cherry':", indexOfCherry);
// if (indexOfCherry === -1) {
//     fruits.push(newValue);
//     console.log(newValue, ' is added to the end of the array');
//     console.log('fruits : ', fruits);
// } 

// Slice: Returns a portion of the array
// let slicedFruits = fruits.slice(0,2);
// console.log("Sliced array:", slicedFruits);

// Using includes to check if an element is present in the array
// let newValue = 'cherry';
// let includesBanana = fruits.includes("banana");
// let includesCherry = fruits.includes(newValue);

// if (!includesCherry) {
//     console.log(" newValue ", includesCherry ? 'include' : 'not found');
//     fruits.splice(0, 0, newValue);
//     console.log(fruits);
//     console.log(" newValue :", fruits.includes(newValue) ? 'include' : 'not found');
// }





//1. Write a function that counts down from ten and says "BLAST OFF" at 0

//2. Write a function that logs even numbers from 0-100

//3. Write a function that loops through an array of numbers nd returns the total sum of the array.

// const array = [0,5,4,3,2];

//     for (let i = 10; i >= 0; i--) {
//         if (i === 0) {
//             console.log ("BLAST OFF");
//             return;
//         }    
//     console.log(i);
//     }

    // 2

    // for (let i = 0; i <= 100; i = i + 2) {
    //     console.log(i)
    // }
    
// 3. Write a function that loops through an array of numbers and returns the total sum of the array.

const array = [2, 4, 8, 10]
let sum = 0;

for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
}
console.log(sum)

// 4. // LAB Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy
// Frank
// Ben
// Ben
// Frank
// Jimmy
//////////////////  0         1        2         3
const arrNames = ['James', 'Alicia', 'Maria', 'Bridgette'] 

for(let i = 0; i < arrNames.length; i++){
    console.log(arrNames[i])
}

for(let i = arrNames.length -1; i >= 0; i-- ) {
    console.log(arrNames[i])
}
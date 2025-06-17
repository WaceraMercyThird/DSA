// array are data structure that store multiple elements
// Arrays are used by many algorithms.


//Declaring Arrays
const numbers = [1,2,4,10,7]

const mixed = [1, "two", true, null]


for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
const index = numbers.indexOf(4);
const exists = numbers.includes(7); 
const sorted = [...numbers].sort((a, b) => a - b);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);




console.log(index)
console.log(exists)
console.log(sorted)
console.log(evens)
console.log(sum)
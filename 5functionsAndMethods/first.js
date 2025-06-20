// Function to calculate the sum of two numbers

function sum(a, b) {
  let s = a + b;
  return s;
}
console.log(sum(3, 4));

// Arrow function
const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMult = (x, y) => {
  console.log(x * y);
};
arrowMult(3, 7);

function countVowel(str) {
  let count = 0;
  for (let l of str.toLowerCase()) {
    if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
      count++;
    }
  }
  return count;
}
console.log(countVowel("Gaurav"));

// using arrow function

const arrowVowel = (str) => {
  let count = 0;
  for (let l of str.toLowerCase()) {
    if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
      count++;
    }
  }
  return count;
};
let val = arrowVowel("gaurav");
console.log(val);

// for each loop
// arr.forEach(callBackFunction)

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val);
});

arr.forEach((val) => {
  console.log(val * val);
});

let newArr = arr.map((val) => { // map is used to create new array using returned value
  return val ** 3;
});
console.log(newArr);

// filter -> creates new array of elements that give true for a condition

let evenArr = arr.filter((val) =>{
    return val % 2 === 0;
});
console.log(evenArr);

// reduce -> performs some  operations and reduces the array to a single value and returns that value

let output = arr.reduce((prev, curr) => {
     return prev + curr;
}, 0);
console.log(output);

let nums = [24, 72, 100, 1, 111]
const maximum = nums.reduce((prev, current) =>{
  return prev > current ? prev : current;
});
console.log(maximum);

let marks = [91, 99, 70, 80, 89, 94];
let marksAbove90 = marks.filter((val) =>{
  return val > 90;
});
console.log(marksAbove90);

let userNum = prompt("Enter a number:");
let arrNum = [];
for(let i = 1; i <= userNum; i++){
  arrNum[i-1] = i;
};
console.log(arrNum);

let sumArr = arrNum.reduce((prev, curr) =>{
  return prev + curr;
});
console.log(sumArr);

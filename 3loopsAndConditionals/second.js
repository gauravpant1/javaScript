// Strings

let str = "JavaScript";
console.log(str.length);
console.log(str[0]);


// Template literals
const obj = {
    name: "pen",
    price:10
};
console.log(`the cost of ${obj.name} is ${obj.price} rupees.`);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
let str2 = "I love ";
let concOutput = str2.concat(str);
console.log(concOutput);

let sliceOutput = str.slice(0, 4);
console.log(sliceOutput);

let result = str.replace("J", "G");
console.log(result);

let res = str.charAt(9);
console.log(res);


// let name = prompt("Enter your name:");
// let stringLength = name.length;
// let userName = "@" + name + stringLength;
// console.log(userName); 
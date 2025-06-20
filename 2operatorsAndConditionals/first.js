// Arithmetic operators
let a = 3;
let b = 4;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);

console.log("a%b=", a%b); // modulus
console.log("a^b=", a**b); // exponential

console.log(a++); //  post increment
console.log(a);

console.log(++a); // pre increment
console.log(a);

console.log(a--); // post decrement
console.log(a);

console.log(--a); // pre decrement
console.log(a);

// Assignment operators
a = 19;
console.log("a += 3 = ", a+=3);

// Comparison operators
/* 1. == (equal to)
   2. === (equal to and type)
   3. != (not equal to)
   4. !== (not equal to and type)
   5. >, >=, <, <=
*/
console.log(a!==b);

// Logical operators
// &&(and) , ||(or) , !(not)

let cond1 = a > b;
let cond2 = a === b;
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!(2 > 5)", !(2>5));

// Ternary operator
let age = 22;
result = age >= 18? "You can vote." : "You can't vote.";
console.log(result);

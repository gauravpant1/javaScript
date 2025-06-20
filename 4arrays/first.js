let marks = [85, 97, 44, 37, 76, 60];

// for loop
//  for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
//  }

 // for-of loop
//  for(let i of marks){
//     console.log(i);
//  }

// finding average marks
let sum = 0;
for(let mark of marks){
    sum = sum + mark;
}
let avgMarks = sum / marks.length;
console.log(`Average marks = ${avgMarks}`);

// Updating final price of items after 10% offer
let prices = [250, 645, 300, 900, 50];
let i = 0;
for(let price of prices){
    offer = price * 0.1;
    prices[i] = prices[i] - offer;
     i++; 
     
}
console.log(`The final price after 10% offer is ${prices}`);

// Array methods
prices.push(12, 77);
let deletedPrice = prices.pop();
console.log(deletedPrice);

let cities = ["kathmandu", "Pokhara", "Dhangadhi"];
console.log(cities);

console.log(cities.toString());

console.log(prices.concat(cities));

cities.unshift("Mahendranagar");
console.log(cities);

cities.shift("Mahendranagar");
console.log(cities);

console.log(cities.slice(0,2));

console.log(prices);
prices.splice(2, 2, 33, 55, 77 );
console.log(prices);

// practice question
 let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
 console.log(arr);
 arr.shift();
 console.log(arr);
 arr.splice(1, 1, "Ola");
 console.log(arr);
 arr.push("Amazon");
 console.log(arr);
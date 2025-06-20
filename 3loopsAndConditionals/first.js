for(let i=1; i<=4; i++){
    console.log("I am a Programmer.")
}

// calculate sum from 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum =",sum);

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
do{
    console.log("Gaurav Pant");
    i++;
} while(i<=9);

// for-of loop
let str = "GauravPant";
let length = 0;
for (let i of str) {
    // console.log(i);
    length++;
}
console.log(length);

// for-in loop  used for object

let student = {
    name: "Gaurav Pant",
    age: 22
};

for(let key in student){
    console.log("key=",key, "value=", student[key]);
}

let heading = document.getElementById("heading");
console.dir(heading);

let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);

let para = document.getElementsByTagName("p");
console.dir(para);

let firstEl = document.querySelector("p");// returns first element
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // returns a node list
console.dir(allEl);

// for id use # and for class use . before the Id or class name

// Q1

let cont = document.querySelector("h2");
console.dir(cont);

cont.innerText = cont.innerText + " from Apna College Students";

let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = divs[0].innerText + ". Adding new content in first div";
// divs[1].innerText = "second div" ;
// divs[2].innerText = divs[2].innerText + ". Hello";

let idx = 1;
for(let div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}



let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let className = div.getAttribute("class");
console.log(className);
div.setAttribute("class", "newBoxes");
console.log(`Updated class = ${div.getAttribute("class")}`);

div.style.backgroundColor = "red";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

let p = document.querySelector("p");
// p.remove();



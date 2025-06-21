let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(newButton);

let par = document.querySelector("p");

par.classList.add("newClass"); 



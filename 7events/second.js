// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again 

let toggleButton = document.querySelector("#toggleButton");
let currMode = "light";
toggleButton.addEventListener("click", function(){
if(currMode === "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
} else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
} )

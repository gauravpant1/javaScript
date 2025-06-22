let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {    // Event object
  console.log(evt);  
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX);
  console.log(evt.clientY);
  // console.log("Button was clicked")
};
let btn2 = document.getElementById("btn2");
btn2.ondblclick = () => {
  console.log("Button was clicked.");
};

// Event Listener
let handler1 = function()  {
        console.log("Inside div. handler-1");
    } 
let div = document.querySelector("div");
    div.addEventListener("mouseover",handler1)
    div.addEventListener("mouseover",() => {
        console.log("Inside div. handler-2");
    } )

    div.removeEventListener("mouseover", handler1)
 



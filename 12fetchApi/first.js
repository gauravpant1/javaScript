const button = document.querySelector("#btn");
const catFact = document.querySelector(".cat-fact");
button.innerText = "Get a cat- fact !";



const URL = "https://catfact.ninja/facts";

const getFacts = async () => {
    let response =  await fetch(URL);
    console.log(response); // json format
    let data = await response.json(); // js object
    catFact.innerText = data.data[3].fact;
    
}
// promise chaining
// function getFacts(){
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         catFact.innerText = data.data[3].fact;
//     })
// }

button.addEventListener("click", getFacts);
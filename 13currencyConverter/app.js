 const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

 const dropDowns = document.querySelectorAll(".dropdown select");
 const btn = document.querySelector("form button");
 const fromCurr = document.querySelector(".from select");
 const toCurr = document.querySelector(".to select");
 const msg = document.querySelector(".msg");



for(let select of dropDowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        if(select.name === "to" && currCode === "NPR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
     let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1){
        amountVal = 1;
        amount.value = "1";
    }
    
    const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
  try { let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let convertedAmount = rate*amountVal;
    msg.innerText = `${amountVal}${fromCurr.value} = ${convertedAmount}${toCurr.value}`;
} catch(error){
    msg.innerText = "Error fetching conversion rate.";
}
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});


window.addEventListener("load", () => {
    updateExchangeRate();
})
// console.log("One");
// console.log("Two");

// setTimeout((name) => {
//     console.log(`Hello ${name} This is printed after 3 sec.`)
// }, 3000, "Gaurav");

// console.log("Three");
// console.log("Four");

// // CallBack function
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log(`Data ${dataId}`);
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
// }
// // callBack hell
//     getData(1, () => {
//         getData(2, () => {
//             getData(3);
//         });
//     } );

// Promises --> solution to callBack hell
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise.");
//     resolve();
// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Data ${dataId}`);
//       resolve("success"); // promise fulfilled
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }
// let promise = getData(33);


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise.");
//         resolve("success");
//         // reject(" network error");
//     });
// }
// // .then and .catch are only executed if the promise is fulfilled and rejected resp.
// let promise = getPromise();
//     promise.then((res) => {
//         console.log("Promise Fulfilled.", res);
//     });

//     promise.catch((err)=>{
//         console.log("rejected.", err)
//     });

    function asyncFunc1(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data1");
                resolve("success")
            }, 3000);
        });
    }
    function asyncFunc2(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data2");
                resolve("success")
            }, 3000);
        });
    }
    console.log("fetching data1");
    let p1 = asyncFunc1();
    p1.then((res) => {
        console.log(res);
         console.log("fetching data2");
         let p2 = asyncFunc2();
         p2.then((res) => {
            console.log(res);
         });
    });

    // Async Await
    async function hello(){
        console.log("Hello");
    }

    // await pauses the execution of its surrounding async function until the promise is fulfilled

    function api(){
        return new Promise((resolve, reject) => {
           setTimeout(() => {
            console.log("Weather data.");
            resolve(200);
           }, 2000);
        });
    }

    async function getWeatherData(){
        await api();
    } 



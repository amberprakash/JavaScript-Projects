console.log("start");


setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("CB Netflix");
})

console.log("end");

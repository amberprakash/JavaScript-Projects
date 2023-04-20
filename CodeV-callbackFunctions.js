// 1. What is a callback functions in javascript ...?
// => Functions are First Class Citizens in JavaScript
// => Means you can take a function and pass it to another functions and when you do so the function you pass
// it to another function is known as callback function

setTimeout(function y(){
    console.log("I am callback function");
},5000); // here function y() is callback function which is execute atleast after 5 sec.
// callback function give us the power of asynchronous in javaScript as JavaScript Engine does not wait 
//for 5 sec to finish ... it will proceed further all codes written below. 


function x(para){
    console.log("x...");
    para();
}
x(function tp(){
    console.log("tp..."); // tp() is known as callback function.
});

// JavaScript is a Single threded And Synchronous Language(means having single call stack/Main thread) 
// 

// Deep About Event Listener

        // let count =0;
        // document.getElementById("clickme").addEventListener("click",function xyz(){
        //     console.log("Button Logged",++count);
        // });
        // Here using global variable is not a good choice here any function can access to count varible which is not good.

// Closure Demo along with Event listener

function eventListnerAboveUsingClosure(){
    let count =0;
    document.getElementById("clickme").addEventListener("click",function xyz(){
        console.log("Button Logged",++count);
    });
}
eventListnerAboveUsingClosure();
// NoW here count variable will be hidden and can not be accessed by any other function inside program (Data Privacy)

// Why do we need to remove EventListner ?
// => EventListener are very heavy ,it takes memory ... it maintain references with the variable even when callstack
//   is empty.



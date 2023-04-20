// block 
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b); // cant be printed
// console.log(c); // cant be printed
// here b and c can't be printed because their memory is allocated only in above block but memory 
// of a is allocated globally or in global space


// Shadowing 
var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);// print 10 means line number 20 a will shadow value of line number 18 a and modifies it also
               // because they both are pointed to the same memory location(globally).

let b=100;
{
    var a=10;
    let b=20;               
    const c=30;               
    console.log(a);               
    console.log(b);               
    console.log(c);                            
}
console.log(b);            

// shadowing in function also
const p=69;
function x(){
    const p=10;
    console.log(p);
}
console.log(p);

function x(){
    
    function y(){
        console.log(a);
    }
    return y;
}
// var a=20;

var z=x();
console.log(z);
z();
var a=30;
function a(){
    console.log(b);
}
var b=10;
a();
function f(){
    console.log(x);
    function c(){
        var x=45;
    }
    c();
}
f();
function outter(){
    var a=45;
    function inner(){
        console.log(a);
    }
    return inner;
}

outter()();

function outter1(b){
    var a=45;
    function inner1(){
        console.log(a,b);
    }
    return inner1;
}

outter1("Hello World")();

function outest(){
    let c=65;
    function outter2(b){
        var a=45;
        function inner2(){
            console.log(a,b,c);
        }
        return inner2;
    }
    return outter2;
}

outest()("Hello World")();

// Example of data privacy using closure

var count=0;

function increment(){
    count++;
}
console.log(count);
increment();
increment();
console.log(count);
// here above no data privacy is availbale...any function in program can access to count variable

// now
function counter(){
    let temp=0;
    function increment(){
        temp++;
        console.log(temp);
    }
    return increment;
}
var z1=counter();
var z2=counter();
z1();
z1();
z1();
z2();
z2();
z2();
z2();
z2();

// function constructor in javaScript
// Data is still private and hidden (using closure)

function neWCounter(){
    let count=0;
    this.increment = function(){
        count++;
        console.log(count);
    }
    this.decrement= function(){
        count--;
        console.log(count);
    }
}

var temp= new neWCounter();

temp.increment();
temp.increment();
temp.increment();
temp.decrement();
temp.decrement();
temp.decrement();
temp.decrement();
temp.decrement();
temp.decrement();

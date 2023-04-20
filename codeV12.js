// setTimeout()

function x(){
    for(var i=1;i<=5;i++){
        setTimeout( function(){
            console.log(i);
        },i*1000);
    }
}

function y(){
    for(let i=1;i<=5;i++){
        setTimeout( function(){
            console.log(i);
        },i*1000);
    }
}

function z(){
    function internal(i){
        setTimeout( function(){
            console.log(i);
        },i*1000);    
    } 
    for(var i=1;i<=5;i++){
        internal(i);
    } 
}

//x();
//y();
z();
console.log("confirmed accepted hey there !");
const radius=[5, 7, 8, 9];

function area(radius){
    return (Math.PI * radius * radius);
}
function circumferenec(radius){
    return (2* Math.PI * radius);
}
function diameter(radius){
    return ( 2* radius);
}
// First method
function calculate(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
// Second Method Prototype type (this fucntion is now available to all arrays)
Array.prototype.calcu = function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(radius.calcu(area));




console.log(calculate(radius,area));
console.log(calculate(radius,circumferenec));
console.log(calculate(radius,diameter));


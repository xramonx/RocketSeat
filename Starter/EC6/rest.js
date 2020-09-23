//REST operator at a sum with undefined params  and reduce vector function

function sum(...params){
    return params.reduce((total,next) => total + next);    
}

//destructuring with Rest Operator
function blau(a,b,...params){
    return  params;
}

console.log(sum(2,3,4,5));
console.log(blau(2, 3, 4, 5));




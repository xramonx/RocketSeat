const { requiredOption } = require("commander");

//import soma from './rest.js'


function test(){   
    //try play around changing var/let/
    const x = 4, y=3;
    console.log(x,y);

    {//new scope => it could be a for, a function a if or just a new scope { }
        //try play around changing var/let/
        let y = 6;
        console.log(x,y);

    }
    console.log(x,y)
}

test();
//soma (a ,b){
function soma(...params){
         return params.reduce((total,next) => total*5 + next);
     
    }
    
    

console.log(soma(2,3));
const array =  [1,2,3,4,5,6];

//array function => array.map((item, index) => {            })
const newArray = array.map(function (item,index) {
    return item + 1;
});
console.log(newArray);

const sum = array.reduce((total, next) => {
    return total + next;
});
console.log(sum);

//returns a subarray with even items 
//returns a subarray with filtered items that returns true to the callback function
const filter = array.filter(item => {
    return item%2=== 0;//return true or false, because it is an comparing 
});
console.log(filter);


const find = array.find((item, index) => {
    console.log(`searching ... index == ${index}`);
    return item === 4; 
} );
console.log(`found item: ${find}`);
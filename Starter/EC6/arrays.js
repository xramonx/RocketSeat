const array =  [1,2,3,4,5,6];
console.log('original array: ',array);

//array function => array.map((item, index) => {            })
const newArray = array.map( (item,index) => {
    return item + 1;
});
console.log('map return (item +1)',newArray);

startvalue = 0;
//callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U
const sum = array.reduce((total, next) => {
    return total + next;
}, startvalue);
console.log('redux return (total + next)',sum);
// const income = transactions.reduce((total, actualElement) => {
//     if (actualElement.type === 'income') {
//       return total + Number(actualElement.value);
//     }
//     return total;
//   }, 0);


//returns a subarray with even items 
//returns a subarray with filtered items that returns true to the callback function
const filter = array.filter(item => {
    return item%2=== 0;//return true or false, because it is an comparing 
});
console.log('filter return item%2', filter);
/*--/// Remove repeated items from an array like magic:
    // Explanation: in order to remove repetitions,it uses array.filter that returns a subArray
    // the first parameter of .filter is a callback function that return a (condition)
    // a condition has boolean result  <=> true or false) that decides if it will be filtered or not
    // .filter method tests, for each value of the array, if the actual index === self.indexOf(value)
    // self is the original array that originally called array.filter()
    // IndexOf(value) returns, if present, the FIRST occurrence of actual value
    // if actual index===IndexOf(value) matches (===true) then it is the first occurrence of value
    // // it means that the second occurrence of the same value will not match index===IndexOf(value)
    const addCategoryTitlesWithoutRepetition = addCategoryTitles
    .filter((value, index, self) => { return (self.indexOf(value) === index); });--*/

const find = array.find((item, index) => {
    console.log(`searching ... index == ${index}`);
    return item > 4; 
} );
console.log('find return item > 4',`found item: ${find}`);
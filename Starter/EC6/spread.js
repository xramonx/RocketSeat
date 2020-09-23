//SPREAD
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];
console.log(array3);

const user1 = {
    name: 'ramon',
    age: 35, 
    companyName: 'Coca-Cola',
};

const user2 = {...user1, name: 'Gabriela'};
console.log(user1);
console.log(user2);
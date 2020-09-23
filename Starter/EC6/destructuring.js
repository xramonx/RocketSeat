const user = {
    name: 'Ramon',
    age: 35,
    address: {
        city: 'Curitiba',
        state: 'PR',
    },
};

const {name, age, address:{city}} = user;

console.log(name + age + city);

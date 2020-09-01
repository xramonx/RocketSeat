function showSomething() {
    console.log("hello World! 3s")
}

function checkAge(age) {
    //retorna promise
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (age >= 18)
                resolve()
            else
                reject()

        }, 2000) //send reference of function because there is no ()

    })
}

checkAge(15)//request of Promise -- requested 2000ms
    .then(function () {
        console.log("Maior que 18 - 2s")
    })
    .catch(function () {
        console.log("menor que 18 - 2s")
    })
   
    setTimeout(showSomething, 3000)

    setTimeout( () => {
        console.log("hello World! 4s")
    }, 4000)
    

setTimeout(function () {
    console.log('Expected 1s delay ... 1s')
}, 1000)

console.log('Aguardando...')//first answer


// Info: Start process (22:33:13)
// Aguardando...
// Expected 1s delay ... 1s
// menor que 18 - 2s
// hello World! 3s
// hello World! 4s
// Info: End process (22:33:17)



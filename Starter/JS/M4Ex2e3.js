//function called by onclick callback function (button List Repositories)
function getRepositories() {
    let gitHubUserNameText = document.getElementById('githubusername').value
    const gitHubUrl = 'https://api.github.com/users/' + gitHubUserNameText + '/repos'

    renderRepositoriesOnHtml(['Carregando... '])
    requestPromise(gitHubUrl)
        .then(function (response) {
            console.log("It worked")
            const repositories = []

            response.forEach((element, index) => {
                repositories[index] = 'Repository ' + (index+1) + ' :' + element.name
            });
            //console.log(repositories)
            renderRepositoriesOnHtml(repositories) 
        })
        .catch(function (reject) {
            console.warn(`Fail - Not possible to access: ${gitHubUrl}`)
            renderRepositoriesOnHtml(['Not possible to access: ' + gitHubUrl] )  
        })
}


//function renders an array of texts at different <li> at an existing <ul> from HTML
function renderRepositoriesOnHtml(repositories) {

    //const listElement = document.createElement('ul') //create new <ul>
    const listElement = document.getElementById('ulist')//get Existing <ul> from html
    listElement.innerHTML = ""//empty list content

    let lineElement //news <li>
    let textElementLine  //text for <li>

    repositories.forEach(TextLine => {
        lineElement = document.createElement('li') //create new <li>
        textElementLine = document.createTextNode(TextLine) //create new text for <li>
        
        lineElement.appendChild(textElementLine)//append text -> <li>
        listElement.appendChild(lineElement) // append <li> -> <ul>           
       // document.body.appendChild(listElement)   //append <li to document.body if created new <ul>
    });
}

//returns a new Promise checking ifs status and JSON parsing the object received
function requestPromise(urlAddress) {
    //return promise
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', urlAddress)
        xhr.send(null)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {//pronto
                if (xhr.status === 200) {//status 200 == OK
                    const objet = JSON.parse(xhr.responseText)
                    resolve(objet)
                } else {
                    reject('Error on request')
                }
            }
        }
    })
}

const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const { response } = require('express');

const app = express(); //use doors always bigger than 80 (even then, thee are some reserved doors)
app.use(express.json()); //add a function (middleware) that all rotes must execute it, in this case JSON

/**
 * Métodos HTTP
 * 
 * GET: Buscar info do back-end
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma info no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

/**
 * Middleware (todo o express é baseado em middleware):
 * Interceptador de requisições que pode interromper totalmente a requisição ou pode alterar dados da requisição
 *  
 */

function logRequests(request, response, next) {
    const { method, url } = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.time(logLabel);

    next(); //without "return next();" it is possible to run some after processing, like time measurement

    console.timeEnd(logLabel);
}

app.use(logRequests);
app.use('/projects/:id', validateProject);

const projects = [];

function validateProject(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid project ID.' });//since it doest call next, it interrupts completely the flow of requisition.
    }
    return next();
}

app.get('/projects', (request, response) => {
    //return response.send('Hello World') //return a text when run node src/index.js and try to access localhost:3333/projects
    //return response.json({message: 'Hello World!!' });// same thing, but necessary to use express.json()

    //browse url:  'http://localhost:3333/projects/projects/?beverage=cocacola&names=ramon'
    // const { beverage, names } = request.query;
    // console.log(names);
    // console.log(beverage);    /

    const { title } = request.query;

    const results = title //if there is a filter send it filtered, otherwise send full array
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const project = { id: uuid(), title, owner };

    projects.push(project);//console.log(project);

    return response.json(project); //show only new feature when adding
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;// console.log(id);    
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json('error: project not found!')
    }

    const project = { id, title, owner };

    projects[projectIndex] = project;//update the projects array with the new project with same id

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return response.status(400).json('error: project not found!')
    }

    projects.splice(projectIndex, 1);

    //return response.status(204).send();//204 - OK, No content
    //return response.json('success: successfully deleted');
    return response.status(204).json('with 204 - No content, this message will not be shown');
});

app.listen(3333, () => {
    console.log('ᓚᘏᗢ Back-end started! ')
});


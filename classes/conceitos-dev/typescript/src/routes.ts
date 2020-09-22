import {Request, Response} from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request : Request, response: Response) {

    const user = createUser({
        name: 'Ramon', 
        email: 'ramon@cocacola.com', 
        password: '123423', 
        techs: ['NodeJS', 'React'], 
        vetorDeStrings: ['']});
        
    return response.json({ message: 'Hello World!' });
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello World!' });
});
app.listen(3333);
//now it is possible to check on browser: http://localhost:3333/
// Instruction for typescript:
// yarn init -y
// yarn add typescript -D
// yarn add express
// yarn add -D @types/express
// yarn tsc --init
// yarn tsc
// suggestion: uncomment outDir @ tsconfig.json and modify address to ./dist - all the new js files generated by
// tsc will be available at this folder
// now, just run yarn tsc and all .ts files will be converted to .js files in /dist folder

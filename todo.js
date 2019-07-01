
// const fs = require('fs');
var crudFunction = require('./todocrudfn.js');
// import {readFromFile,writeToFile,list} from "todocrudfn.js"; 

// var mutableValue = require('./lib').mutableValue;

const args = process.argv;

const printHelp = () => {
    const text = `
Todo program: 
$ node todo.js add  <text>
$ node todo.js done <id>
$ node todo.js list
$ node todo.js edit <id> <text>
    `;
    console.log(text);
    return;
}
if (args.length < 3) {
    printHelp();
    process.exit(1);
}

const op = args[2];
const opId = args[3];
const opText = args[4];

// const config = {
//     todo_file: "./todo.list.json"
// };
// start 
switch(op) {
    case 'add': {
        crudFunction.writeToFile(opId);
        console.log('add invoked');
        break;
    }
    case 'done': {
        
        crudFunction.Done(opId)
            console.log('done invoked');
        break;
    }
    case 'list': {
        crudFunction.list();
        console.log('list invoked');
        break;
    }
    case 'edit': {
        crudFunction.edit(opId,opText);
        console.log('edit invoked');
        break;
    }

}
// end
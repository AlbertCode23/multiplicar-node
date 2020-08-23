const yargs = require('./config/yargs').argv;
const colors = require("colors");

const { createFile, listFile } = require("./multiplicar/multiplicar");

let commando = yargs._[0];

switch (commando) {
  case "listar":
    listFile(yargs.base, yargs.limite);

    break;

  case "crear":
    createFile(yargs.base, yargs.limite)
      .then((file) => console.log(`archivo creado: ${file}`))
      .catch((e) => console.log(e));

    break;
  default:
    console.log("Comando no reconocido");
}

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

console.log(yargs.base);

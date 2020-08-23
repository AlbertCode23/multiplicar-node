const fs = require("fs");
var colors = require("colors");



listFile = ( base, limite = 10 ) => {

  console.log('======================='.blue);
  console.log(`======tabla de ${base}=======`.yellow);
  console.log("=======================".blue);

   for (let index = 1; index <= limite ; index++) {
     res = base * index;

     console.log( `${base} * ${index} = ${res} \n`.bgBlue);
   }


}


createFile = ( base, limite ) => {
    
  return new Promise (  ( resolve, reject ) => {

        let data = "";
        
        for (let index = 1; index <= limite; index++) {
          res = base * index;
          data += `${base} * ${index} = ${res} \n`;
        }
        
        fs.writeFile(`./tablas/table${base}.txt`, data, (err) => {
          if (err) reject ( err )
          else
             resolve("The file has been saved!");
          
        });

    });
};


module.exports = {
    createFile,
    listFile
}
// const express = require("express"); // "type": "commonjs"
import express, { response } from "express"; // "type": "module"
import fs from 'fs'
import date from 'date-and-time';


const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("welcome to filesystem");
});


//create files
app.get("/createfiles", function (request, response) {
  const flname=createfile();
  response.send(flname);
});


//read director--list of filename present in directory

app.get("/read-directory",function(req,res){
  const directorlist=readdirectory()
  res.send(directorlist)
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


const createfile=()=>{

  const nows = new Date();
  const date_time=date.format(nows, 'YYYY-MM-DD HH:mm:ss');
let myFileName =Date.now() + '.txt';


fs.writeFile('./filelist/'+myFileName,date_time,(error)=>{
    console.log("completed writing!!")

})
return "file created successfully : "+myFileName
}

const readdirectory=()=>{

  const folderPath = './filelist';
  
  const listfiles=fs.readdirSync(folderPath);
  return listfiles;
}
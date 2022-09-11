const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES =__dirname; 

const removeExtension = (fileName) => {
    //TODO tracks.js
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)//todo index, tracks
    if(name !== 'index'){
        console.log(`cargando rutan ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //todo http:localhost:3000/api/tracks
    }
});

module.exports = router;
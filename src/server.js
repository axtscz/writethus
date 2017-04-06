import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './app';
import template from './template';
import randomseed from "random-seed"
import utility from "../lib/utility.js"

var seed = randomseed.create("ALEX");

const server = express();

server.use('/assets', express.static(__dirname + '/assets'));
server.get("/sw", function(req, res){
    res.sendFile(__dirname + "/assets/serviceworker/serviceworker.js")
});

server.get(["/", '/:id'], (req, res) => {
    let seedValue = "";
    if (req.params.id) {
        seedValue = req.params.id;
        seed = randomseed.create(seedValue);
        let culture = utility.generateCulture(seed);
        let characters = utility.generateCharacters(seed, 5, culture);
        let location = utility.pickLocation(seed, culture);
        let url = "writeth.us"+ req.url.toString();
        const initialState = {characters: characters, url: url, location: location.location};
        const appString = renderToString(<App {...initialState} />);
        res.send(template({
            body: appString,
            title: 'WriteThus',
            initialState: JSON.stringify(initialState)
        }));
    } else {
        seedValue = utility.randomSeedString(6);
        res.redirect("/" + seedValue);
    }

});

server.listen(8080);
console.log('LISTENING');

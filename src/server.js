import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './app';
import template from './template';
import names from "../json/master.json"
import randomseed from "random-seed"
import _ from "lodash"
import crypto from "crypto"
import utility from "../lib/utility.js"

var seed = randomseed.create("ALEX");

const server = express();

server.use('/assets', express.static(__dirname + '/assets'));

server.get(["/", '/:id'], (req, res) => {
    let seedValue = "";
    if (req.params.id) {
        seedValue = req.params.id;
        seed = randomseed.create(seedValue);
        let characters = [];
        for (let i = 0; i < seed.intBetween(2, 5); i++) {
            let name = names[seed(names.length)];
            characters.push(name);
        }

        const initialState = {characters: characters};
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

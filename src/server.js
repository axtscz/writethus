import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './app';
import template from './template';
import names from "../json/master.json"
import randomseed from "random-seed"
import _ from "lodash"

const seed = randomseed.create("ALEX");

const server = express();

server.use(__dirname + '/assets', express.static('assets'));

server.get('/', (req, res) => {
    var characters = []
    for (var i = 0; i < seed.intBetween(2, 5); i++){
        var name = names[seed(names.length)];
        characters.push(name)
    }

    const initialState = {characters: characters};
    const appString = renderToString(<App {...initialState} />);

    res.send(template({
        body: appString,
        title: 'WriteThus',
        initialState: JSON.stringify(initialState)
    }));
});

server.listen(8080);
console.log('LISTENING');

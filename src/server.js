import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "./app";
import template from "./template";
import randomseed from "random-seed";
import utility from "../lib/utility.js";

var seed = randomseed.create("ALEX");

const server = express();
server.use(express.compress());
const oneDay = 86400000;

server.use(
    "/fonts",
    express.static(__dirname + "/assets/fonts", {maxage: 86400000 * 30})
);
server.use(
    "/assets/css",
    express.static(__dirname + "/assets/css", {maxage: 86400000})
);
server.use(
    "/assets",
    express.static(__dirname + "/assets", {maxage: 900000})
);
server.get("/sw", function (req, res) {
    res.sendFile(__dirname + "/assets/serviceworker/serviceworker.js");
});
server.get("/favicon.ico", function (req, res) {
    res.sendFile(__dirname + "/assets/img/favicon.ico");
});

server.get(["/", "/:id"], (req, res) => {
    let seedValue = "";
    if (req.params.id) {
        seedValue = req.params.id;
        seed = randomseed.create(seedValue);
    } else {
        seedValue = utility.randomSeedString(6);
        seed = randomseed.create(seedValue);
    }
    //generate all the data
    let culture = utility.generateCulture(seed);
    let characters = utility.generateCharacters(seed, 5, "EN");
    let location = utility.pickLocation(seed);
    let genre = utility.pickGenre(seed);
    let url = "writeth.us" + req.url.toString();
    let combinations = utility.calculateCombinations();

    const initialState = {
        characters: characters,
        url: url,
        location: location.location,
        genre: genre.genre,
        seed: seedValue,
        combinations: combinations.toString()
    };
    const appString = renderToString(<App {...initialState} />);
    res.send(
        template({
            body: appString,
            title: "WriteThus - Writing Prompts",
            initialState: JSON.stringify(initialState)
        })
    );
});

server.listen(8080);
console.log("LISTENING");

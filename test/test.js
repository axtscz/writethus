/**
 * Created by Alex Cruz on 4/6/2017.
 */
const mocha = require("mocha");
const assert = require("assert");
const should = require("should");
const utilities = require("../lib/utility.js");
const randomseed = require("random-seed");


describe("Generate Functions", function () {
    describe("Generate Seed String", function () {
        describe("Generate seed string", function () {
            it("it should return an string", function () {
                utilities.default.randomSeedString(6).should.be.a.String();
            });
            it("it needs to have a length of 6", function () {
                utilities.default.randomSeedString(6).should.have.length(6);
            });
        });
    });
    describe("Generate Characters", function () {
        describe("Generate a list of people", function () {
            let seed = randomseed();
            it("it should return an array", function () {
                utilities.default.generateCharacters(seed).should.be.a.Array();
            });
            it("it needs to have a length of 6 if asked", function () {
                utilities.default.generateCharacters(seed, 6).length.should.be.within(2, 6);
            });
        });
    });
    describe("Generate Culture", function () {
        describe("Generate a culture", function () {
            let seed = randomseed();
            it("it should return an String", function () {
                utilities.default.generateCulture(seed).should.be.a.String();
            });
        });
    });
    describe("Generate Location", function () {
        describe("Generate a list of people", function () {
            let seed = randomseed();
            it("it should return an Object", function () {
                utilities.default.pickLocation(seed).should.be.a.Object();
            });
            it("it should contain a location", function () {
                utilities.default.pickLocation(seed).should.have.keys("location");
            });
        });
    });
    describe("Generate Genre", function () {
        describe("Generate a Genre", function () {
            let seed = randomseed();
            it("it should return an Object", function () {
                utilities.default.pickGenre(seed).should.be.a.Object();
            });
            it("it should contain a genre", function () {
                utilities.default.pickGenre(seed).should.have.keys("genre");
            });
        });
    });
    describe("Pick Gender", function () {
        describe("Pick a gender", function () {
            let seed = randomseed();
            it("it should return an String", function () {
                utilities.default.pickGender(seed).should.be.a.String();
            });
            it("it should be either M or F", function () {
                utilities.default.pickGender(seed).should.match(/[FM]/);
            });
        });
    });
    describe("Calculate Combinations", function () {
        let seed = randomseed();
        it("it should return an Number", function () {
            utilities.default.calculateCombinations(seed).should.be.a.Object();
        });
    });
});

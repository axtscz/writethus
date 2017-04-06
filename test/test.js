/**
 * Created by Alex Cruz on 4/6/2017.
 */
const mocha = require("mocha");
const assert = require("assert");
const should = require("should");
const utilities = require("../lib/utility.js");
const randomseed = require("random-seed");



describe("generators", function(){
    describe("Generate seed string", function(){
        it("it should return an string", function(){
            utilities.default.randomSeedString(6).should.be.a.String();
        });
        it("it needs to have a length of 6", function(){
            utilities.default.randomSeedString(6).should.have.length(6);
        })
    });
    describe("Generate a list of people", function () {
        let seed = randomseed();
        it("it should return an array", function(){
            utilities.default.generateCharacters(seed).should.be.a.Array();
        });
        it("it needs to have a length of 6 if asked", function(){
            utilities.default.generateCharacters(seed, 6).length.should.be.within(2, 6);
        })
    })
});

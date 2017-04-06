/**
 * Created by Alex Cruz on 4/6/2017.
 */
var mocha = require("mocha");
var assert = require("assert");
var should = require("should");
var utilities = require("../lib/utility.js");



describe("generators", function(){
    describe("Generate seed string", function(){
        it("it should return an string", function(){
            utilities.default.randomSeedString(6).should.be.a.String();
        })
        it("String needs to have a length of 6", function(){
            utilities.default.randomSeedString(6).should.have.length(6);
        })
    })
});

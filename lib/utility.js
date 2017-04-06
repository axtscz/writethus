/**
 * Created by Alex Cruz on 4/6/2017.
 */
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
import names from "../json/master.json";
import locations from "../json/locations.json";
import genres from "../json/genres.json";
import randomseed from "random-seed";
let seed = randomseed.create();
import _ from "lodash"

export default {
    randomSeedString: function (length) {
        let value = "";
        for (let i = 0; i < length; i++) {
            value = value + (alpha[seed.range(alpha.length)])
        }
        return value;
    },
    generateCulture: function(seed){
        let cultures = ["ES", "IT", "EN"]
        return cultures[seed(cultures.length)]
    },
    generateCharacters: function (seed, max, culture) {
        let characters = [];
        let maxNum = max || 5;
        var nameList = names;
        if (culture){
            nameList = _.filter(nameList, {"culture": culture});
        }
        for (let i = 0; i < seed.intBetween(3, maxNum); i++) {
            let name = nameList[seed(nameList.length)];
            characters.push(name);
        }
        return characters;
    },
    pickLocation: function (seed, culture) {
        var locationList = locations;
        if (culture){
            locationList = _.filter(locationList, {"culture": culture});
        }
        return locationList[seed(locationList.length)];
    },
    pickGenre: function (seed) {
        return genres[seed(genres.length)];
    }
    //TODO: Add more generators
};
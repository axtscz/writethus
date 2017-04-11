/**
 * Created by Alex Cruz on 4/6/2017.
 */
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
import names from "../json/master.json";
import locations from "../json/locations.json";
import genres from "../json/genres.json";
import characters from "../json/characters.json";
import randomseed from "random-seed";
import _ from "lodash";
import BigNumber from "bignumber.js";
let seed = randomseed.create();
BigNumber.config({DECIMAL_PLACES: 10, ROUNDING_MODE: 4})

export default {
    calculateCombinations: function () {
        let nameCount = names.length;
        let locationCount = locations.length;
        let genreCount = genres.length;
        let characterCount = characters.length;
        let totals = new BigNumber(nameCount + locationCount + genreCount + characterCount).pow(3);
        totals.toFormat(2);
        return totals;
    },
    randomSeedString: function (length) {
        let value = "";
        for (let i = 0; i < length; i++) {
            value = value + (alpha[seed.range(alpha.length)])
        }
        return value;
    },
    pickGender: function (seed) {
        var genders = ["M", "F"];
        return genders[seed(genders.length)]
    },
    generateCulture: function (seed) {
        let cultures = ["ES", "IT", "EN"];
        return cultures[seed(cultures.length)]
    },
    pickLocation: function (seed, culture) {
        var locationList = locations;
        if (culture) {
            locationList = _.filter(locationList, {"culture": culture});
        }
        return locationList[seed(locationList.length)];
    },
    pickGenre: function (seed) {
        return genres[seed(genres.length)];
    },
    pickPlotline: function (seed, gender) {
        let plotList = characters;
        plotList = _.filter(plotList, function (o) {
            return o.gender.indexOf(gender) >= 0
        });
        return plotList[seed(plotList.length)]
    },
    generateCharacters: function (seed, max, culture) {
        let characters = [];
        let maxNum = max || 5;
        var nameList = names;
        if (culture) {
            nameList = _.filter(nameList, {"culture": culture});
        }

        for (let i = 0; i < seed.intBetween(3, maxNum); i++) {
            let gender = this.pickGender(seed);
            let nameListFiltered = _.filter(nameList, {"gender": gender});
            let character = nameListFiltered[seed(nameListFiltered.length)];
            character.occupation = this.pickPlotline(seed, gender);
            characters.push(character);
        }
        return characters;
    }
    //TODO: Add more generators
};
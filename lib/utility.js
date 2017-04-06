/**
 * Created by Alex Cruz on 4/6/2017.
 */
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
import names from "../json/master.json"
import randomseed from "random-seed";
let seed = randomseed.create();

export default {
    randomSeedString: function (length) {
        let value = "";
        for (let i = 0; i < length; i++) {
            value = value + (alpha[seed.range(alpha.length)])
        }
        return value;
    },

    generateCharacters: function (seed) {
        let characters = [];
        for (let i = 0; i < seed.intBetween(2, 5); i++) {
            let name = names[seed(names.length)];
            characters.push(name);
        }
        return characters;
    }
    //TODO: Add mor generators
};
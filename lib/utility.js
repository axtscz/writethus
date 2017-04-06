/**
 * Created by Alex Cruz on 4/6/2017.
 */
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
import randomseed from "random-seed";
let seed = randomseed.create();

export default {
    randomSeedString: function (length) {
        let value = "";
        for (let i = 0; i < length; i++) {
            value = value + (alpha[seed.range(alpha.length)])
        }
        return value;
    }
};
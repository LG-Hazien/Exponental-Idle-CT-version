import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "oWo";
var name = "Exponential Idle";
var description = "No Theory description.";
var authors = "LG-Hazien";
var version = "1.0.0";

var ft;

const x = BigNumber.ZERO;

var init = () => {
    ft = theory.createCurrency("f", "f");

    ///////////////////
    // Regular Upgrades

    // x1
    {
        let getDesc = (level) => "x=" + x;
        x1 = theory.createUpgrade(0, ft, new FreeCost());
        x1.getDescription = (_) => Utils.getMath(getDesc(s1.level));
        x1.getInfo = (amount) => Utils.getMathTo(getInfo(s1.level), getInfo(s1.level + amount));
        x1.bought = (amount) => { 
            x += 0.1  
        };
    }
}

init();
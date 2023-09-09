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

var x = BigNumber.ZERO;

var init = () => {
    ft = theory.createCurrency("f", "f");

    ///////////////////
    // Regular Upgrades

    // x1
    {
        let getDesc = () => "x=" + x;
        let getInfo = () => "Each level increases 0.1 x."
        x1 = theory.createUpgrade(0, ft, new FreeCost());
        x1.getDescription = (_) => Utils.getMath(getDesc());
        x1.getInfo = (amount) => getInfo();
        x1.bought = (amount) => { 
            x += 0.1
        };
    }
    // y
    {
        let getDesc = (level) => "y=" + y;
        let getInfo = () => "Each level increases 4 x."
        y = theory.createUpgrade(1, ft, new ExponentialCost(1e9, 1.2));
        y.getDescription = (_) => Utils.getMath(getDesc(y.level));
        y.getInfo = (amount) => getInfo();
        y.bought = (amount) => { 
            x += 4
        };
    }
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);

    ft.value *= (x / 12) + BigNumber.ONE;
}

init();
ft.value = BigNumber.ONE //INTIAL VALUE
/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
 * or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
 * sorted in highest to lowest order, as the value of the change key.
 *
 * Currency             | Unit	| Amount
 * Penny	            | $0.01 | (PENNY)
 * Nickel	            | $0.05 | (NICKEL)
 * Dime	                | $0.1  | (DIME)
 * Quarter	            | $0.25 | (QUARTER)
 * Dollar	            | $1    | (ONE)
 * Five Dollars	        | $5    | (FIVE)
 * Ten Dollars	        | $10   | (TEN)
 * Twenty Dollars	    | $20   | (TWENTY)
 * One-hundred Dollars  | $100  | (ONE HUNDRED)
 *
 * See below for an example of a cash-in-drawer array:
 *
 * [
 * ["PENNY", 1.01],
 * ["NICKEL", 2.05],
 * ["DIME", 3.1],
 * ["QUARTER", 4.25],
 * ["ONE", 90],
 * ["FIVE", 55],
 * ["TEN", 20],
 * ["TWENTY", 60],
 * ["ONE HUNDRED", 100]
 * ]
 *
 * should return {status: "OPEN", change: [["QUARTER", 0.5]]}
 * @param price
 * @param cash
 * @param cid
 * @returns {*}
 */
const denomination = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 }
];

function checkCashRegister(price, cash, cid) {

    let output = {status: null, change: []};
    let change = cash - price;

    // transform cid into drawer object
    let register = cid.reduce(function(acc, curr){
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {total: 0 });

    //handle change
    if(register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    if(register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // loop through denomination array
    let change_array = denomination.reduce(function(acc, curr){
        let value = 0;
        while(register[curr.name] > 0 && change >= curr.value) {
            change -= curr.value;
            register[curr.name] -= curr.value;
            value += curr.value;

            //round change to nearest 100th to deal with precision errors
            change = Math.round(change * 100) / 100;
        }

        // Add this denomination to the output only if any was used.
        if(value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; //return current change_array
    }, []); // initial value of empty array for reduce

    // If there are no elements in change_array or we have leftover change, return "Insufficient Funds"
    if(change_array.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    //final change
    output.status = "OPEN";
    output.change = change_array;
    console.log(output);
    return output;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
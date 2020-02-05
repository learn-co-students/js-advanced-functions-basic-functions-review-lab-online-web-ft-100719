// Your code here
function saturdayFun(activity=
    "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
function mondayWork(activity=
    "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(symbol= "*") {

    return function (adj= "Special") {
        return (`You are ${symbol}${adj}${symbol}!`)
    }
         
}

let Calculator = 
{
    add: function(x, y) {return x + y},
    subtract: function(x, y) {return x - y},
    multiply: function(x, y) {return x * y},
    divide: function(x, y) {return x / y}
}

function actionApplyer(startInt, arrFn){
    if (arrFn === []){
        return startInt
    }
    arrFn.map(fun => startInt = fun(startInt))

    return startInt
}
// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(string="go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(highlight="*") {
    return function(param="special") {
        return `You are ${highlight}${param}${highlight}!`
    }
}

let Calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a, b) { return a - b },
    multiply: function(a, b) { return a * b },
    divide: function(a, b) { return a / b }
}

function actionApplyer(start, array) {
    let num = start
    for ( let i = 0; i < array.length; i++ ) {
        num = array[i](num)
    }
    return num
}
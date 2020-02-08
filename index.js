// Your code here
function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(char = "*") {
    return function(parameter = "special") {
        return `You are ${char}${parameter}${char}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(integer, array) {
    if (array.length !== 0) {
        array.forEach(i => {
            integer = i(integer);
        });
    }
    return integer;
}
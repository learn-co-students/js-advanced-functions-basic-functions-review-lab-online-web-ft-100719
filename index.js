// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
} 

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str='*') {
    return function (adj='special') {
        return `You are ${str}${adj}${str}!`
    }
}

let Calculator = {
    add: function(n1,n2) {
        return n1 + n2
    },

    subtract: function(n1,n2) {
        return n1 - n2
    },

    multiply: function(n1,n2) {
        return n1 * n2
    },

    divide: function(n1,n2) {
        return n1 / n2
    }
}


function actionApplyer(start,move){

    for (let i = 0; i < move.length; i++ ){
        start = move[i](start)
    }
    
    return start
}
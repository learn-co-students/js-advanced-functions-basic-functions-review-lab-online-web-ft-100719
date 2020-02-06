function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}

const Calculator = {
  add: function (x, y) {
    return x + y
  },
  subtract: function (x, y) {
    return x - y
  },
  multiply: function (x, y) {
    return x * y
  },
  divide: function (x, y) {
    return x / y
  }
}

function actionApplyer(integer, functions) {
  let total = integer
  for (let i = 0; i < functions.length; i++) {
    total = functions[i](total)
  }
  return total
}
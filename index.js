function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(decoration = '*') {
  return function(adj = 'unique') {
    return `You are ${decoration}${adj}${decoration}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  }
}

const actionApplyer = function(int, funcArray) {
  return funcArray.reduce(function(acc, cur) {return acc = cur(acc)}, int)
}
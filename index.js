// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

function wrapAdjective(flair = '*') {
  return function (adjective = "special") {
    return `You are ${flair + adjective + flair}!`
  }
}

const Calculator = {
  add: () => 1 + 3,
  subtract: () => 1 - 3,
  multiply: () => 1 * 3,
  divide: () => 10 / 5
}

function actionApplyer(start, functionArray) {
  return functionArray.reduce((total, currFunction) => currFunction(total), start)
}
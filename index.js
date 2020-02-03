// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  let inner = function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
  return inner;
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(n, arr) {
  if (arr.length !== 0) {
    arr.forEach(f => {
      n = f(n);
    });
  }
  return n;
}

// Your code here
function saturdayFun(activity = "roller-skate") {
    let msg = "This Saturday, I want to " + activity + "!";
    return msg;
}
saturndayFun(activity = "bathe my dog");

function mondayWork(activity = "go to the office") {
    let msg = "This Monday, I will " + activity + ".";
    return msg
}
mondayWork();
mondayWork(activity = "work from home");


function wrapAdjective(symb1 = "*"){
    return function(msg ){ 
        return "You are " + symb1 + msg + symb1 + "!";
    }
}
wrapAdjective()();

let Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b;
    },
    multiply: function(a,b) {
      return a * b;
    },
    divide: function(a,b) {
      return a / b;
    }
};

function actionApplyer(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
}
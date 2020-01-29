// Your code here

const saturdayFun = (activity = 'roller-skate') =>{
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') =>{
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (decoration = '*') =>{
    return function(adj = 'special'){
        return `You are ${decoration}${adj}${decoration}!`
    }
}

let Calculator = {
    add: (num1, num2) =>{
        return num1 + num2
    },
    subtract: (num1, num2) =>{
        return num1 - num2
    },
    multiply: (num1, num2) =>{
        return num1 * num2
    },
    divide: (num1, num2) =>{
        return num1 / num2
    }
}

const actionApplyer = (startingInt, functionArray) =>{
    let returnValue = startingInt
    functionArray.forEach(func =>{
        returnValue = func(returnValue)
    })
    return returnValue
}
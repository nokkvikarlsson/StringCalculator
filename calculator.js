function add (numbers){
    
    var numberArray = numbers.split(/[,\n]/);
    
    if(numberArray[0].includes("//")){
        var delimiter = numberArray[0].substring(2);
        numberArray.splice(0, 1);
        numberArray = numbers.split(/[, \n delimiter]/);
    }

    checkArray(numberArray);
    return sum(numberArray);
}

function checkArray(numberArray){

    var negativeNumbers = [];
    for(var i = 0; i < numberArray.length; i++) {
        if(parseInt(numberArray[i]) < 0) {
            negativeNumbers.push(numberArray[i]);
        } 
    }
    if(negativeNumbers.length > 0) {
        throw new Error("Negatives not allowed:" + negativeNumbers);
    }
}

function sum(numberArray){

    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        if(parseInt(numberArray[i]) < 1000) {
            total += parseInt(numberArray[i]); 
        }
    }
    return total;
}

module.exports = add;
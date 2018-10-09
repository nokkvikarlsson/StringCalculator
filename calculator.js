function add (numbers){
    
    if(numbers == ""){
        return 0;
    }

    if(numbers.includes(",") || numbers.includes("\n")){
        var numberArray = numbers.split(/[,\n]/);
        checkArray(numberArray);
        return sum(numberArray);
    }
    else{
        return parseInt(numbers);
    }
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
//Our add function
function add (numbers){
     
    //Split the array by the delimiters "," and "\n"
    var numberArray = numbers.split(/[,\n]/);
    
    //If the first index contains "//" that means there is another delimiter
    if(numberArray[0].includes("//")){
        //Isolate the delimiter
        var delimiter = numberArray[0].substring(2);
        //Cut "//" from the string
        numberArray.splice(0, 1);
        //Split the array again by the delimeters "," "\n" and the new delimiter
        numberArray = numbers.split(/[, \n delimiter]/);
    }

    checkArray(numberArray);
    return sum(numberArray);
}

//Checks if the array contains a negative number
function checkArray(numberArray){

    var negativeNumbers = [];
    for(var i = 0; i < numberArray.length; i++) {
        //If there is a negative number add it to the negativeNumbers array.
        if(parseInt(numberArray[i]) < 0) {
            negativeNumbers.push(numberArray[i]);
        } 
    }
    //If the negativeNumbers array has any values throw an exception.
    if(negativeNumbers.length > 0) {
        throw new Error("Negatives not allowed:" + negativeNumbers);
    }
}

//Sums and return the values in the numberArray
function sum(numberArray){

    var total = 0;
    for(var i = 0; i < numberArray.length; i++){
        //If a value is larger then 1000 don't add it to the total.
        if(parseInt(numberArray[i]) < 1000) {
            total += parseInt(numberArray[i]); 
        }
    }
    return total;
}

module.exports = add;
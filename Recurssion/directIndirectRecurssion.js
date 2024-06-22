// Direct Recurssion :- in which function call itself

// first way
function printNumber(min, max) {
    if (min > max) {
        return
    }
    printNumber(min + 1, max)
    console.log(min) // output :- 5,4,3,2,1
}

printNumber(1, 5)

// second way
function printNumber(min, max) {
    if (min > max) {
        return
    }
    console.log(min) // output :- 1,2,3,4,5
    printNumber(min + 1, max)
}

printNumber(1, 5)

// =============== Indirect Recurssion :- in this we make a helper function that calls the main function and main function calls the helper function
function printNumber(min,max){
    if(min>max){
        return
    }

    console.log('min',min); // output :- 1,2,3,4,5
    min=min+1;
    logic(min,max)
}

function logic(min,max){
    if(min>max){
        return
    }

    printNumber(min,max)
}

printNumber(1,5)
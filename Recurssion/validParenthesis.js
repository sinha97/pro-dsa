// input = ["(","(",")",")"]

function validParanthesis(arr, startIndex = 0, currIndex = 0) {
    if (startIndex == arr.length) {
        return currIndex == 0
    }

    if (currIndex < 0) {
        return false
    }

    if (arr[startIndex] === '(') {
        validParanthesis(arr, startIndex + 1, currIndex + 1)
    } else if (arr[startIndex] === ')') {
        validParanthesis(arr, startIndex + 1, currIndex - 1)
    } else {
        return false
    }

}


//TODO: try to solve 
// Input: ["(",")","{","}","[","]"]
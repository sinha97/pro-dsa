//[1,2,3,4,5,2,1,3,4,1]


// itrative approach
function allOccurance(arr, key) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            count++
        }
    }
    return count
}

// recurssive approach
function recurrAllOccurance(arr, key, index = 0) { // if index is given then use that otherwise initialize it to 0 
    if (index > arr.length) {
        return 0
    }

    return (arr[index] === key ? 1 : 0) + recurrAllOccurance(arr, key, index + 1)
}
// itrative approach
function reverseString(string) {
    let reverse = '';
    let length = string.length - 1;

    while (length >= 0) {
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}

// recursive appraoch

function recurssiveReverseString(string) {
    // base case
    if (string === '') {
        return string
    }

    // return string[string.length - 1] + recurssiveReverseString(string.substring(0, string.length - 1))

    // explation of above return part

    let reversePart = recurssiveReverseString(string.substring(0,string.length-1))
    let result = string[string.length-1]+reversePart

    console.log(`Reversing last char : ${string[string.length-1]} added in front of ${reversePart} to form a result: ${result}`)
    return result
}
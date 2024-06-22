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

    return string[string.length - 1] + recurssiveReverseString(string.substring(0, string.length - 1))
}
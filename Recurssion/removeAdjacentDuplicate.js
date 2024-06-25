// let inputString = 'aabcc'
// let i = 1
// console.log(inputString.substring(0, i))
// console.log(inputString.substring(i + 1))
// console.log(inputString.substring(0, i) + inputString.substring(i + 1))

// Itrative approach
function removeAdDup(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        if (i === string.length - 1 || string[i] !== string[i + 1]) {
            result += string[i]
        }
    }
    return result
}

// recurssive Approach
function recurrsiveRemoveAdjacentDuplicate(str) {
    if (str.length <= 1) {
        return str
    }

    if (str[0] === str[1]) {
        return recurrsiveRemoveAdjacentDuplicate(str.substring(1))
    }

    return recurrsiveRemoveAdjacentDuplicate(str[0] + recurrsiveRemoveAdjacentDuplicate(str.substring(1)))
}


// TODO: try to remove all duplicate character in a string
// by both approach
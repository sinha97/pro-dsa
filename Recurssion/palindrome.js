// madam
// ada
// d -> true

function isPalndrome(string) {
    if (string.length <= 1) {
        return true
    }

    if (string[0] == string[string.length - 1]) {
        return isPalndrome(string.substring(1, string.length - 1))
    } else {
        return false
    }
}

console.log(isPalndrome('madam'))
//task is to remove all tabs and spaces from a string.This includes a character \t ans ' ' from a string


// itrative approach
function removeTabsAndSpaces(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '\t' && str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// return recurssive appraoch
function removeTabsAndSpaces(str) {
    // Base case: if the string is empty, return an empty string
    if (str.length === 0) {
        return '';
    }

    // Recursive case: process the first character and make a recursive call for the rest of the string
    const firstChar = str[0];
    const restOfString = str.slice(1);

    // If the first character is a tab or space, skip it
    if (firstChar === '\t' || firstChar === ' ') {
        return removeTabsAndSpaces(restOfString);
    }

    // Otherwise, include the first character in the result
    return firstChar + removeTabsAndSpaces(restOfString);
}
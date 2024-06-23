// count vowels in a given string

// first check the character the is vowel or not
function isVowel(char) {
    let lowerChar = char.toLowerCase()
    let vowels = 'aeiou'

    if (vowels.indexOf(lowerChar) != -1) {
        return true
    } else {
        return false
    }
}

// itrative approach
function countVowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            count += 1
        }
    }
    return count
}

// console.log(countVowels('Hello Vivek Kumar'))


// ============= Recurssive Approach =================//

function recursiveCountVowel(string, stringLength) {
    if(stringLength == 0){
        return 0
    }
    
    if (stringLength == 1) {
        return Number(isVowel(string[0]))
    }
    return recursiveCountVowel(string, string.length - 1) + isVowel(string[stringLength - 1])
}
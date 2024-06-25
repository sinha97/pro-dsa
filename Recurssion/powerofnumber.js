// recurssion approach
function powerNumber(base, expo) {
    if (expo === 0) {
        return 1
    } else {
        return base * powerNumber(base, expo - 1)
    }
}

console.log(powerNumber(3, 4))
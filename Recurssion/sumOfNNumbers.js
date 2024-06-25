// recurrsive approach
function sumNuber(value) {
    if (value === 1) {
        return 1
    }
    return value + sumNuber(value - 1)
}

console.log(sumNuber(5))
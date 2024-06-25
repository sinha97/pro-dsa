// itrative approach

function fibonacci(value) {
    let n0 = 0
    let n1 = 1

    for (let i = 0; i < value; i++) {
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }
    return n0
}

// console.log(fibonacci(6))

// Recurrsive approach
function recurssiveFibonacci(value) {
    if (value <= 1) {
        return value
    }
    return (recurssiveFibonacci(value - 1) + recurssiveFibonacci(value - 2))
}

console.log(recurssiveFibonacci(4))

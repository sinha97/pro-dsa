// find gcd of two numbers
// input : 42 and 18
// output : 6
// 42 divisors are 1,2,3,6,7,14,21,42
// 18 divisors are 1,2,3,6,9,18


// recurssive approach
function gcd(value1, value2) {
    if (value1 === value2) return value1

    if (value1 > value2) {
        return gcd(value1 - value2, value2)
    } else {
        return gcd(value1, value2 - value1)
    }
}

// console.log(gcd(42, 18))

// itrative approach
function gcd2(a, b) {
    let numbers = [a, b];

    while (numbers[1] !== 0) {
        const temp = numbers[1];
        numbers[1] = numbers[0] % numbers[1];
        numbers[0] = temp;
    }

    return numbers[0];
}
// console.log(gcd2(42, 18))


//=================================================================>>>>>>>>>>>>>>>>
function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function gcd3(a, b) {
    let divisorsA = getDivisors(a);
    let divisorsB = getDivisors(b);

    let commonDivisors = divisorsA.filter(value => divisorsB.includes(value));

    return Math.max(...commonDivisors);
}


//==========================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function gcd(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

//==================================================
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
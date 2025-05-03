const arr = [2, 3, 4, 5, 6, 7, 8];
// square and return even numbers


arr.filter(x => x % 2 == 0).map(x => x * x); // normai way
arr.flatMap(x => x % 2 == 0 ? x * x : []) //using flatmap

console.log(arr)

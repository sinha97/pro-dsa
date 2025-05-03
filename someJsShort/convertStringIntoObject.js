const str = "a.b.c.d.e";
const strArr = str.split(".");
const obj = strArr.reduceRight(cb);

function cb(acc, next) {
    return { [next]: acc }
}

console.log(obj)
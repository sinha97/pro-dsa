var isSubsequence = function(s, t) {
    let sindex=0;
    for(const char of t){
        if(sindex===s.length) break
        if(s[sindex]===char) sindex++
    }

    return sindex===s.length
};
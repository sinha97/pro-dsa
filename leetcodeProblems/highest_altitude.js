var largestAltitude = function(gain) {
    let currentAltitude =0;
    let maxAltitiude =0;
    for (let i = 0; i < gain.length; i++) {
        currentAltitude +=gain[i]
        maxAltitiude=Math.max(maxAltitiude,currentAltitude)
    }
    return maxAltitiude
};
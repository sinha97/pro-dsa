function recurrsiveLength(str) {
    if (str === '') {
        return 0
    }

    return 1 + recurrsiveLength(str.substring(1))
}
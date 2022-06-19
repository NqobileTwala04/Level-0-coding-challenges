function findMaximumNumber() {
    let maxNumber = -Infinity
    for ( let i = 0; i < arguments.length; i++) {
        if ( arguments[i] >= maxNumber) {
            maxNumber = arguments[i]
        }
    }
    return maxNumber
}

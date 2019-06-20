
module.exports = function() {
    const hrstart = process.hrtime()

    return function () {
        const hrend = process.hrtime(hrstart);

        return hrend[1] / 1000000
    }
}
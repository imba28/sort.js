module.exports = function (l) {
    const a = new Array(l);
    for (let i = 0; i < a.length; i++) {
        a[i] = Math.ceil(Math.random() * 50)
    }
    return a;
}